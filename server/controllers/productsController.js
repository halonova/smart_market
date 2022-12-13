const { Router } = require('express');
const { Product } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, price, isWishlist, isCart } = req.body;
  const newProduct = Product.create({ name, price, isWishlist, isCart });

  res.status(200).json({ message: 'cadastrado com sucesso' });
});

router.delete('/:id', async (req, res) => {
  await Product.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: 'excluido com sucesso' });
});

router.put('/:id', async (req, res) => {
  const { name, price, isWishlist, isCart } = req.body;

  await Product.update(
    { name, price, isWishlist, isCart },
    {
      where: { id: req.params.id },
    }
  );

  res.status(200).json({ message: 'atualizado com sucesso' });
});

module.exports = router;
