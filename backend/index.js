


const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
require('dotenv').config();

app.use(express.json());
app.use(cors());
 
// Database connection mongoDB

mongoose.connect(process.env.MONGO_DB_CONNECTION)

// API creation

app.get("/", (req, res) => {
  res.send("Express app is Running")
});

// image storage engine

const storage = multer.diskStorage({                                                      // Configuración el almacenamiento en disco para los archivos subidos.
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
});

const upload = multer({ storage: storage });                             // Se crea una instancia de multer utilizando la configuración de almacenamiento definida previamente.

// Crating endpoint for images
app.use("/images", express.static("upload/images"))                      // Se configura una ruta estática para acceder a los archivos subidos http://localhost:4000/images
app.post("/upload", upload.single("product"), (req, res) => {            // endpoint POST en /upload // upload.single("product"): Middleware de multer para manejar la subida de un solo archivo con el campo de formulario llamado product. 
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
  })
});

// Schema for creating products
const Product = mongoose.model("Product",  {
  id:{
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true
  },
});

app.post("/addproduct", async(req, res) => {

  let products = await Product.find({})
  let id;

  if(products.length > 0){
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id+1
  }else{
    id = 1;
  }

  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  })
  console.log(product)
  await product.save();
  console.log("Saved")
  res.json({
    success: true,
    name: req.body.name
  })
});

// Creating API for deleting products
app.post("/removeproduct", async(req, res) => {
  await Product.findOneAndDelete({id:req.body.id});
  console.log("Removed")
  res.json({
    success: true,
    name: req.body.name
  })
});

//Creating API for getting all products
app.get("/allproducts", async(req, res) => {
  let products = await Product.find({})
  console.log("All products fetched")
  res.send(products)
})


app.listen(port, (error) => {
  if(!error){
    console.log("Server is Running on port:" +port)
  }else{
    console.log("Error: " +error)
  }
})