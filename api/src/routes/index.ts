import { Router } from "express";

const router = Router();

router.get("/products", (req, res) => {
  res.send("Se mos traran todos los productos");
});
router.get("/product/:id", (req, res) => {
  res.send("Se mostrará un producto");
});

export default router;
