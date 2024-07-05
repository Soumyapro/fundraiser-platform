import User from "../models/userDb.js";


export const about = async (req, res) => {
    return res.status(200).json({ message: "This is your fundraising platform." });
};

export const submitAmount = async (req, res) => {
    try {
        const { name, amount } = req.body;
        if (!name || !amount) {
            return res.status(400).json({ message: "some values are missing.." });
        }
        const user = new User({ name, amount });
        await user.save();
        return res.status(200).json({ message: "details have been saved.." });
    } catch (error) {
        console.log("!error");
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getAmount = async (req, res) => {
    User.aggregate([
        {
            $group: {
                _id: null,
                totalAmount: { $sum: "$amount" }
            }
        }
    ]).then((result) => {
        console.log(result);
        const totalAmount = result[0].totalAmount;
        //console.log(totalAmount);
        return res.status(200).json({ message: "This is your amount", data: totalAmount });
    })
        .catch((error) => {
            console.log("!error");
            return res.status(500).json({ message: "Internal Server Error" });
        })
};
