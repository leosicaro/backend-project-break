const express = require('express')
const router = express.Router()
const ProductController = require ('../controllers/ProductController')


router.get('/products',ProductController.showProducts)

router.get('/products/:productId', ProductController.showProductById)

router.get('/dashboard',ProductController.getDashboard)

router.get('/dashboard/new',ProductController.dashboardCreate)

router.post('/dashboard', ProductController.create )

router.get('/dashboard/:productId',ProductController.dashboardId)

router.get('/dashboard/:productId/edit',ProductController.dashboardEdit)

router.put('/dashboard/:productId',ProductController.updateProduct)

router.delete('/dashboard/:id/delete', ProductController.deleteProduct )

router.get('/',ProductController.allProducts)

//========================================================================================================









module.exports = router