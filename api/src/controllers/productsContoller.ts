import { Request, Response } from "express";
import handleError from "../utils/errorHandle";

const getProducts = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleError(res, "ALgún error va aquí");
  }
};
const getProduct = (req: Request, res: Response) => {};
const createProduct = (req: Request, res: Response) => {};
const updateProduct = (req: Request, res: Response) => {};
const deleteProduct = (req: Request, res: Response) => {};

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
