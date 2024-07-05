import mongoose from 'mongoose';

export const connectDb = async (url, app) => {
    mongoose.connect(url)
        .then(() => {
            console.log("Database is connected...");
            app.listen(process.env.PORT, () => {
                console.log(`Server is running on PORT No. ${process.env.PORT}`);
            })
        })
        .catch((error) => {
            console.log("!error, not connected to database");
        })
};
