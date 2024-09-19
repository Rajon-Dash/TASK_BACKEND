import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js"
import { Category } from "../models/addCategory.js";
import { ErrorHandler } from "../middlewares/errorMiddleware.js";


export const addCategory = catchAsyncErrors(
  async (req, res, next) => {
    const { categoryName } = req.body;
  
    if (!categoryName) {
      return next(new ErrorHandler("Invalid category name.",400));
    }
  
    await Category.create({ categoryName });
    return next(new ErrorHandler("Category created successfully",200));;
  });


  export const getAllCategory = catchAsyncErrors(async(req,res,next)=>{
    const categories = await Category.find();
    res.status(200).json({success:true,data:categories})
  })
