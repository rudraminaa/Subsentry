import mongoose from "mongoose";
import {
  BILLING_CYCLES,
  SUBSCRIPTION_SOURCES,
  DEFAULT_CURRENCY,
} from "../constants/subscription.constants.js";

const subscriptionSchema = new mongoose.Schema(
  {
    // Ownership
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true,
    },

    // Subscription name
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // Billing details
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    currency: {
      type: String,
      default: DEFAULT_CURRENCY,
      uppercase: true,
    },
    billingCycle: {
      type: String,
      required: true,
      enum: Object.values(BILLING_CYCLES),
      lowercase: true,
    },

    // Renewal tracking
    renewalDate: {
      type: Date,
      required: true,
    },

    // Trial support
    isTrial: {
      type: Boolean,
      default: false,
    },
    trialEndsAt: {
      type: Date,
    },

    // Source of subscription data
    source: {
      type: String,
      default: SUBSCRIPTION_SOURCES.MANUAL,
      lowercase: true,
    },

    // Status
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
