import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
    animalName: {
        type: String,
        required: [true, "Animal Name is required"],
        minLength: [3, 'Animal Name must contain at least 3 characters'],
    },
    image: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
});

export const Animal = mongoose.model("Animal", animalSchema);
