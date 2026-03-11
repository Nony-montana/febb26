const esxpress = require("express")
const { listProduct, getproducts, getproductsBy  } = require("../controllers/product.controller")
const { verifyUser } = require("../controllers/user.controller")


const router = esxpress.Router()

router.post("/addProduct", verifyUser,  listProduct)
router.get("/products",verifyUser, getproducts)
router.get("/productsBy/",verifyUser, getproductsBy )



module.exports = router