import mongoose from "mongoose";
const SubsriptionSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        index:true
    },
    name:{type:String,required:true},
    billingCycle: { type: String, enum: ['monthly', 'yearly'], required: true },
    nextBillingDate: { type: Date, required: true },
    category: { type: String, default: 'General' }
}, { timestamps: true });

export const Subscription = mongoose.model("Subscription", SubsriptionSchema);