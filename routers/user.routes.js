const express = require("express");
const { createUser, editUser, deleteUser, getUser, getAllUser, login, verifyUser, getMe, requestOTP, forgotPassword, changePassword } = require("../controllers/user.controller");
const router = express.Router();




router.post("/register", createUser)
router.patch("/edit/:id", editUser)
router.delete("/deleteUser/:id", deleteUser)
router.get("/allusers/:id", verifyUser, getUser)
router.get("/getalluser",verifyUser, getAllUser)
router.post("/login",login)
router.post('/request-otp',requestOTP)
router.post('/forgot-password',forgotPassword)
router.post('/change-password',verifyUser,changePassword)
router.get("/me",verifyUser,getMe)



module.exports = router;

