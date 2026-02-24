const express=require('express');
const cors=require('cors');
const controller=require('../Backend/controller/auth_controller');
const productcontroller=require('../Backend/controller/product_controller');
const ordercontroller=require('../Backend/controller/order_controller');
const connectdatabase=require('../Backend/config/db');
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    optionsSuccessStatus: 200 // For legacy browser support
  };
const app =express();
app.use(express.json());
app.use(cors(corsOptions));


app.post('/register',(controller.register));
app.post('/login',(controller.login));
app.post('/addproduct',(productcontroller.addproduct));
app.get('/getproducts',(productcontroller.getProducts));
app.post('/orderplaced',(ordercontroller.addOrder));
app.get('/getorders',(ordercontroller.getOrders));


connectdatabase().then(()=>{
app.listen(3000,()=>{
console.log(`server is running at port 3000`);
})
})