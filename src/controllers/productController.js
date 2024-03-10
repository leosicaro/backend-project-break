const Product =  require ('../models/product')


const ProductController = {
    async showProducts(req,res){
        try {
            const products = await Product.find()
           // res.json(products)
            res.render('../public/views/page/showProducts.pug',{products})
            
        } catch (error) {
            console.log(error + " cannot get item")
        }
    },



    async showProductById(req,res){
        try {
            const productId= req.params.productId
            const product = await Product.findOne({ _id: productId });
        
            res.render('../public/views/page/showProductById.pug',{})
            //res.json(product);
        } catch (error) {
            console.log(error + " no se puede obtener el producto por ID");
            res.status(500).json({ error: "Error interno del servidor" });
        }
    },



    async getDashboard(req,res,next){
        try {
            const products = await Product.find()
            res.render('../public/views/page/dashboard.pug',{products})
            next()
        } catch (error) {
            console.log(error)
        }
    },



    async dashboardCreate(req,res,next){
        try {

            res.render('../public/views/page/dashboardCreate.pug',{})
        } catch (error) {
            console.log(error)
        }
    },



    async create(req,res){
        try {
            const  product = await Product.create(req.body)
            
            res.status(201).json(product)

        } catch (error) {
            console.log(error + " cannot create item")
        }
    },



    async dashboardId (req,res,next){
        try {
            const product = await Product.findById(req.params.productId);
            if (!product) {
                return res.status(404).json({ error: "Producto no encontrado" });
            }
            //res.json(product)
            res.render('../public/views/page/dashboardId.pug',{product})
            next()
        } catch (error) {
            console.log(error)
        }
    },



    async dashboardEdit (req,res,next){
        try {
            res.render('../public/views/page/dashboardEdit.pug',{})
            next()
        } catch (error) {
            console.log(error)
        }
    },




    async updateProduct(req,res){
        try {
            const idProduct = req.params._id 
            const title = req.body.title
            const product = await Product.findByIdAndUpdate(
                idProduct,{
                    title
                },{new:true}
            )
            res.json(product)
        } catch (error) {
            
        }
    },



    async deleteProduct(req,res){
        try {
            const id = req.params._id
            const product = await Product.findByIdAndDelete(id)
            console.log(product)
            res.json({mensaje:"product eliminated"})
            res.redirect('/dashboard')
            
        } catch (error) {
            
        }
    },



    async allProducts (req,res,next){
        try {
            res.render('../public/views/page/index.pug',{})
            next()
        } catch (error) {
            console.log(error)
        }
    },

}

module.exports = ProductController


