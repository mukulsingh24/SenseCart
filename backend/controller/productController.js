const Product = require('../models/product')
const createProduct = async(req,res)=>{
    try{
        const {name,price,image}  = req.body
        const create = new Product({
            name,price,image
        })
        const newProduct = await create.save()
        res.status(201).json({newProduct,message:"Product Added Successfull"})
    }
    catch(err){
        res.status(500).json({message:"Error Adding Product"})
    }

}

const getProduct = async(req,res) =>{
    try{
        const get = await Product.find({});
        res.status(200).json({get,message:"Product Recieved"})

    }
    catch(err){
        res.status(500).json({message:"Error Getting Product"})
    }
}

const deleteProduct = async(req,res)=>{
    try{
        const del = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"Product Deletion Successfull"})
    }
    catch(err){
        res.status(500).json({message:"Error Deleting Product"})
    }

}
module.exports = {createProduct,getProduct,deleteProduct}