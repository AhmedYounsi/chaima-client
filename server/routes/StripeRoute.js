const express = require("express");
const router = express.Router();
const Consult = require("../Models/ConsulModel");
 
//REGISTER USER
router.post("/add_product", async (req, res) => {
 
const stripe = require('stripe')('sk_test_51KTw0sDydD2n66yCibSvhb0gn4iqLFbrIs0mp15oHWVFv3IJuTbxyiUOShSiskVhtCcLZBEsP0Y0uYLKwnvcff3U00MuFEyYhI');
  
const price = await stripe.prices.create({
  unit_amount: 3600,
  currency: 'eur',
  product: 'prod_LAHzxRMgiO6Jt2',
});
 
 
try {
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [{price: price.id, quantity: 1}],
      after_completion: {type: 'redirect', redirect: {url: `http://localhost:5000/stripe/success?id=${req.body._id}`}},
    });
    const consult = await Consult.findByIdAndUpdate(req.body._id,{stripe_link : paymentLink.url},{new:true})
  res.status(200).send({consult,url:paymentLink.url})
  } catch (error) {
    console.log(error)
  }
 return
  });


  router.get("/success", async (req, res) => {
 console.log(req.query.id)
 const consult = await Consult.findByIdAndUpdate(req.query.id,{stripe_link : "",etat:1},{new:true})
 console.log(consult)
 res.redirect("http://localhost:3001/consultations")
  })
  


module.exports = router;