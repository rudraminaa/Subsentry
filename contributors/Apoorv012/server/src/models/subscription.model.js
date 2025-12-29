import mongoose from "mongoose";
const { Schema } = mongoose;

const subscriptionSchema = new Schema(
  {
    clerkUserId: {
      type: String,
      required: true,
      index: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    billingCycle: {
      type: String,
      enum: ["monthly", "yearly"],
      required: true,
    },

    renewalDate: {
      type: Date,
      required: true,
    },

    isTrial: {
      type: Boolean,
      default: false,
    },

    trialEndsAt: {
      type: Date,
    },

    source: {
      type: String,
      enum: ["web", "mobile", "admin", "promo"],
      required: true,
    },
  },
  { timestamps: true }
);


subscriptionSchema.index({ userClerkId: 1 });

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;