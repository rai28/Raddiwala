const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      default: null,
    },
    order: {
      itemType: {
        type: String,
        required: true,
        default: null,
      },
      pickUpAddress: {
        city: {
          type: String,
          required: true,
          default: null,
        },
        state: {
          type: String,
          required: true,
          default: null,
        },
        pincode: {
          type: Number,
          required: true,
          default: null,
        },
        address: {
          type: String,
          required: true,
          default: null,
        },
      },
      pickUpDate: {
        date: {
          type: Date,
          required: true,
          default: null,
        },
        time: {
          type: String,
          required: true,
          default: null,
        },
      },
      redeemMethod: {
        type: String,
        required: true,
        default: null,
      },
      orderStatus: {
        type: Boolean,
        required: true,
        default: false,
      },
      orderCreatedAt: {
        type: Date,
        required: true,
        default: Date.now,
      },
    },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
