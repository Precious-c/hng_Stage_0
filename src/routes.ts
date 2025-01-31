import express, { Request, Response } from "express";
const router = express.Router();
const email = "preciousamaechi111@yahoo.com";

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ email: "email" });
});

// module.exports = router;
export default router;
