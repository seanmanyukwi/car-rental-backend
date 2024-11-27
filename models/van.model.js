const mongoose = require("mongoose");

const VanSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter van name"],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },

    location: {
      type: String,
      required: true,
      trim: true,
      default: 'Not specified',
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    rentalStatus: {
      type: String,
      enum: ['available', 'rented', 'maintenance'],
      default: 'available',
    },

    rentedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Assuming you have a User model where users are stored
      required: false, // Only needed when the van is rented
    },

    availability: {
      type: Boolean,
      default: true, // true if available for rent, false if not
    },

    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Assuming you have a User model for the owners
      required: true,
    },

    rentalHistory: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        rentedFrom: {
          type: Date,
          default: Date.now,
        },
        rentedTo: {
          type: Date,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Van = mongoose.model("Van", VanSchema);

module.exports = Van;
