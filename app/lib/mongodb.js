import { MongoClient } from "mongodb";

let client;
let db;

async function connectDB() {
    if (!client) {
        if (!process.env.MONGODB_URI) {
            throw new Error("MongoDB URI is required");
        }
        client = new MongoClient(process.env.MONGODB_URI);
        await client.connect();
        db = client.db("voters"); // Set the database once connected
    }
    return db;
}

export default connectDB;
