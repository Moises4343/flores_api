import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Flor = sequelize.define('Flor', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'flores',
  timestamps: false,
});

export default Flor;
