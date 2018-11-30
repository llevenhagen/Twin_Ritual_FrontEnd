const models = require('../models')

module.exports = {
  async index (req, res) {
    console.log('looking at cart')
    try {
      const cart = await models.cart.findOne({
        where: {
          merch_id: req.query.merch_id,
          user_id: req.query.user_id
        }
      })
      res.send(cart || null)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch the cart.'
      })
    }
  },
  async cart (req, res) {
    console.log(req.params, 'YOU ARE LOOKING AT THE CARRRRRRRRTTTTT')
    let user_id = req.params.user_id
    try {
      let cart = await models.cart.findAll({
        where: {
          user_id: user_id
        }
      })
      console.log(cart[0].merch_id)
      let cartArray = []
      let objectArray = []
      for (let i = 0; i < cart.length; i++) {
        cartArray.push(cart[i].merch_id)
      }
      for (let i = 0; i < cartArray.length; i++) {
        let item = await models.merch.findById(cartArray[i])
        objectArray.push(item)
      }
      console.log('this is objectarray', objectArray)
      res.send(objectArray)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch the cart.'
      })
    }
  },
  async post (req, res) {
    console.log(req.body.params.merch_id)
    try {
      const item = req.body.params
      const newItem = await models.cart.create({
        merch_id: item.merch_id,
        user_id: item.user_id
      })
      res.send(newItem)
    } catch (err) {
      res.status(400).send({
        error: 'An error has occurred trying to add to cart.'
      })
    }
  },
  async delete (req, res) {
    console.log(req.params)
    try {
      const itemId = req.params.itemId
      const user_id = req.params.user_id
      // const item = models.cart.findById(itemId)
      // console.log(item)
      await models.cart.destroy({
        where: {
          merch_id: itemId,
          user_id: user_id
        }
      })
      res.send(req.params)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to delete this item from your cart.'
      })
    }
  }
}
