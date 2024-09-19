import mongoose, { Mongoose } from "mongoose";
import validator from "validator";


const categorySchema = new mongoose.Schema({
    categoryName : {
        type: 'string',
        required: true,
        minLength: [3, 'Category Name Must Contain At Least 3 Characters'],
    }
});

export const  Category = mongoose.model('Category', categorySchema);
