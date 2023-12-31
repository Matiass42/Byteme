const { Router } = require("express");
const {postorderuser}=require("../controllers/order/postorder.controller")
const {getOrdersById} = require("../controllers/order/orderId.controllers")
//const {getAll} = require("../controllers/order/getallorder")
const {getOrdersByIduser} = require("../controllers/order/allorderuser")
//const {deleteorder} = require('../controllers/order/deleteorder')
const {validateJWT} =require("../middlewares/validateJWT")
const order = Router();

//Todas las órdenes
//order.get("/", getAll);
//Todas las órdenes de un usuario
//order.get("/:userId", getOrdersById );
//crear orden por usuario
order.post("/:userId",postorderuser)
//Traer una orden en particular
order.get("/pagar",getOrdersById);
//Modificar una orden en particular
//order.delete("/:userId", deleteorder);

module.exports = {
    order
  };