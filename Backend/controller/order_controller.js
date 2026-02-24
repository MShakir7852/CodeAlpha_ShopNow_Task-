const addorder=require('../Model/order_model');
// const user=require('../Model/auth_model');


const addOrder = async (req, res) => {
  
  try {
    const order = await addorder.create({
    user: req.body.user,   // get from Postman
    name: req.body.name,
    price: req.body.price
  });

  res.status(201).json(order);
  } catch (error) {
    res.status(500).json({message:'internal server error'});
  }
};


const getOrders = async (req, res) => {
 try { 
    const orders = await addorder.find();
    res.status(200).json({message: "Orders retrieved successfully", orders});
    
 } catch (error) {
    res.status(500).json({message:'internal server error'});
 }
};

module.exports={addOrder,getOrders};