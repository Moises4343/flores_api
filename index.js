import dotenv from 'dotenv';
import express from 'express';
import sequelize from './config/db.js';
import catalogoRoutes from './routes/catalogo.js';
import pedidoRoutes from './routes/pedidos.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/catalogo', catalogoRoutes);
app.use('/api/pedidos', pedidoRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}).catch(err => console.error('No se pudo conectar a la base de datos:', err));
