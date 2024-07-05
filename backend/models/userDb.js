import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        lowercase: true
    },
    amount: {
        type: Number,
        required: [true, "amount is required"]
    }
});

const User = mongoose.model("User", userSchema);

export default User;