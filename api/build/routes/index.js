"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/products", (req, res) => {
    res.send("Se mos traran todos los productos");
});
router.get("/product/:id", (req, res) => {
    res.send("Se mostrará un producto");
});
exports.default = router;
