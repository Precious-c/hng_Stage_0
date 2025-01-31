import express, { Request, Response } from "express";
import dotenv from "dotenv";
import logger from "morgan";

dotenv.config({ path: "./src/.env" });
const app = express();
const PORT = process.env.PORT || 5020;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

const email = "preciousamaechi111@yahoo.com";

app.get("/api/", (req: Request, res: Response) => {
  res.json({ email, current_datetime: Date.now(), github_url: "" });
});

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
