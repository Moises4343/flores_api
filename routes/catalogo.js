import express from 'express';
import Flor from '../models/flor.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const flores = await Flor.findAll();
  res.json(flores);
});

router.post('/', async (req, res) => {
  const { nombre, descripcion, precio, stock, imagenUrl } = req.body;
  const nuevaFlor = await Flor.create({ nombre, descripcion, precio, stock, imagenUrl });
  res.status(201).json(nuevaFlor);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, stock, imagenUrl } = req.body;
  const flor = await Flor.findByPk(id);
  
  if (!flor) return res.status(404).json({ error: 'Flor no encontrada' });

  await flor.update({ nombre, descripcion, precio, stock, imagenUrl });
  res.json(flor);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const flor = await Flor.findByPk(id);
  
  if (!flor) return res.status(404).json({ error: 'Flor no encontrada' });

  await flor.destroy();
  res.json({ message: 'Flor eliminada' });
});

export default router;
