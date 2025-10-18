import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["Groceries", "Leisure", "Electronics", "Utilities", "Clothing", "Health", "Others"],
        default: "Others",
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true})

export const Expense = mongoose.model('Expense', expenseSchema);