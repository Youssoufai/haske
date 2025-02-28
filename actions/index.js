"use server";
import connectDB from "@/app/lib/mongodb";
import { revalidatePath } from "next/cache";

export async function createVote(formData) {
    try {
        const db = await connectDB();

        const newVote = {
            name: formData.get("name"),
            email: formData.get("email"),
            area: formData.get("area"),
            phone: formData.get("phone"),
            message: formData.get("message"),
            createdAt: new Date(),
        };

        await db.collection("votes").insertOne(newVote);
        revalidatePath("/"); // Refresh page data

        return { success: true, message: "Vote submitted successfully!" };
    } catch (error) {
        console.error("Error creating vote:", error);
        return { success: false, message: "Failed to submit vote." };
    }
}
