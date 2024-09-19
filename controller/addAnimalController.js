import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { ErrorHandler } from "../middlewares/errorMiddleware.js";
import { Animal } from "../models/addAnimal.js"; // Ensure correct import
import cloudinary from "cloudinary";

// Add Animal Controller
export const addAnimal = catchAsyncErrors(async (req, res, next) => {
    const { animalName } = req.body;

    // Check if a file is uploaded
    if (!req.files || !req.files.image) {
        return next(new ErrorHandler("Image file is required!", 400));
    }

    const { image } = req.files;

    // Allowed file types for images
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
    if (!allowedFormats.includes(image.mimetype)) {
        return next(new ErrorHandler("Invalid file type. Please upload an image file (PNG, JPEG, or WEBP).", 400));
    }

    // Upload the image to Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.upload(image.tempFilePath, {
        folder: "animals", // You can define a folder in Cloudinary
    });

    if (!cloudinaryResponse || cloudinaryResponse.error) {
        return next(new ErrorHandler("Failed to upload image to Cloudinary", 500));
    }

    // Ensure animalName is provided
    if (!animalName) {
        return next(new ErrorHandler("Animal name is required.", 400));
    }

    // Create a new Animal document in MongoDB
    const animal = await Animal.create({
        animalName,
        image: {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
        },
    });

    // Send success response
    res.status(200).json({
        success: true,
        message: "Animal added successfully",
        animal,
    });
});



export const getAllAnimal= catchAsyncErrors(async(req,res,next)=>{
    const animals = await Animal.find();
    res.status(200).json({success:true,data:animals})
  })
