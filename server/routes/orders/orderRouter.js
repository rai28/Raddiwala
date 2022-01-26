const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const isAuth = require("../middlewares/isAuth");
const Order = require("../models/OrdersModel");
const app = express();

const orderRouter = express.Router();

// post request for creating order
orderRouter.post(
  "/create",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const {
      itemType,
      city,
      state,
      pincode,
      address,
      date,
      time,
      redeemMethod,
    } = req.body;

    const userId = req.user._id;
    const createOrder = new Order({
      user: userId,
      order: {
        itemType: itemType,
        city: city,
        state: state,
        pincode: pincode,
        address: address,
        pickUpDate: {
          date: date,
          time: time,
        },
        redeemMethod: redeemMethod,
      },
    });
    const createdOrder = await createOrder.save();
    res.status(201).send({
      message: "order created successfully",
      order: createdOrder,
    });
  })
);
