const product=require('../Model/product_model');

const addproduct=async(req,res)=>{
    try {
        const {name,price,description,category}=req.body;
        const newProduct=await product.create({
            name:name,
            price:price,
            description:description,
            category:category
        })
        res.status(200).json({message:'product added successfully',product:newProduct});
    } catch (error) {
        res.status(500).json({message:'internal server error'});
        
    }
};
const getProducts=async(req,res)=>{
    try {
        const products=await product.find();
        res.status(200).json({message:'products retrieved successfully',products});
    } catch (error) {
        res.status(500).json({message:'internal server error'});
    }
};

module.exports={addproduct,getProducts};