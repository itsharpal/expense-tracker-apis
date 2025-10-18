import { Expense } from "../models/expense.model.js";

export const addExpense = async (req, res) => {
    try {
        const { amount, description, category } = req.body;
        if (!amount || !description) {
            return res.status(400).json({
                message: "all fields are required",
                success: false
            })
        }

        const userId = req.id;

        const expense = await Expense.create({
            amount: Number(amount),
            description,
            category: category,
            user: userId
        })

        return res.status(201).json({
            message: 'Expense added successfully',
            expense,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateExpense = async (req, res) => {
    try {
        const expenseId = req.params.id;
        if (!expenseId) {
            return res.status(400).json({
                message: "expense ID is required",
                success: false
            })
        }

        let { amount, description, category } = req.body;
        const updatedExpense = { amount, description, category };
        if (amount) {
            updatedExpense.amount = Number(amount)
        }

        const expense = await Expense.findByIdAndUpdate(expenseId, updatedExpense, { new: true });
        if (!expense) {
            return res.status(404).json({
                message: "No expense exist with this ID",
                success: false
            })
        }

        return res.status(200).json({
            message: "Expense information updated.",
            expense,
            success: true
        });

    } catch (error) {
        console.log(error);
    }
}

export const deleteExpense = async (req, res) => {
    try {
        const expenseId = req.params.id;
        if (!expenseId) {
            return res.status(400).json({
                message: "expense ID is required",
                success: false
            })
        }
        const deletedExpense = await Expense.findByIdAndDelete(expenseId);
        if (!deletedExpense) {
            return res.status(404).json({
                message: "Expense with this ID does not exists !",
                success: false
            })
        }

        return res.status(200).json({
            message: "Expense deleted successfully",
            success: true,
            deletedExpense
        })

    } catch (error) {
        console.log(error);
    }
}

export const getExpense = async (req, res) => {
    try {
        const userId = req.id;
        const { filter, startDate, endDate } = req.query;

        let dateFilter = {};

        const today = new Date();

        if (filter === "week") {
            const lastweek = new Date();
            lastweek.setDate(today.getDate() - 7);
            dateFilter = { createdAt: { $gte: lastweek } };
        } else if (filter === "month") {
            const lastMonth = new Date();
            lastMonth.setDate(today.getMonth() - 1);
            dateFilter = { createdAt: { $gte: lastMonth } };
        } else if (filter === "3months") {
            const last3Months = new Date();
            last3Months.setDate(today.getMonth() - 1);
            dateFilter = { createdAt: { $gte: last3Months } };
        } else if (startDate && endDate) {
            dateFilter = {
                createdAt: {
                    $gte: new Date(startDate),
                    $lte: new Date(endDate),
                },
            };
        }

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const filterQuery = {user: userId, ...dateFilter};

        const total = await Expense.countDocuments(filterQuery);
        const expenses = await Expense.find(filterQuery)
        .sort({createdAt: -1})
        .skip((page - 1) * limit)
        .limit(limit);

        return res.status(200).json({
            message: "Fetched successfully",
            total,
            page,
            limit,
            expenses
        });

    } catch (error) {
        console.log(error);
        
    }
}