import express from 'express';
import Flor from '../models/flor.js';
import Pedido from '../models/pedido.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { clienteNombre, clienteEmail, florId, cantidad } = req.body;
  
  const flor = await Flor.findByPk(florId);
  if (!flor || flor.stock < cantidad) {
    return res.status(400).json({ error: 'Flor no disponible o cantidad insuficiente' });
  }

  const total = flor.precio * cantidad;
  const nuevoPedido = await Pedido.create({ clienteNombre, clienteEmail, florId, cantidad, total });

  flor.stock -= cantidad;
  await flor.save();

  res.status(201).json(nuevoPedido);
});

router.get('/', async (req, res) => {
  const pedidos = await Pedido.findAll({ include: Flor });
  res.json(pedidos);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;
  
  const pedido = await Pedido.findByPk(id);
  if (!pedido) return res.status(404).json({ error: 'Pedido no encontrado' });

  pedido.estado = estado;
  await pedido.save();

  res.json(pedido);
});

export default router;
