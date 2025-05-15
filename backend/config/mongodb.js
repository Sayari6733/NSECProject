import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const dbUri = process.env.MONGODB_URI;

        if (!dbUri) {
            console.error('MONGODB_URI is not defined in .env file');
            process.exit(1);
        }

        // Log the connection URI for debugging purposes (remove in production)
        console.log('MongoDB Connected');

        // Connect to the MongoDB database
        await mongoose.connect(dbUri);

        mongoose.connection.on('connected', () => console.log("Database Connected"));
        mongoose.connection.on('error', (error) => console.error('MongoDB connection error:', error));

    } catch (error) {
        console.error('Database connection error:', error.message);
        process.exit(1);
    }
}

export default connectDB;
