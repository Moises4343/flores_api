import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Flor from './flor.js';

const Pedido = sequelize.define('Pedido', {
  clienteNombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  clienteEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pendiente',
  },
}, {
  tableName: 'pedidos',
  timestamps: true,
});

Pedido.belongsTo(Flor, { foreignKey: 'florId' });

export default Pedido;
