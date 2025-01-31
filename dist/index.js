"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
dotenv_1.default.config({ path: "./src/.env" });
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5020;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)("dev"));
const email = "preciousamaechi111@yahoo.com";
const date = new Date().toISOString();
app.get("/api/", (req, res) => {
    res.json({
        email,
        current_datetime: date,
        github_url: "https://github.com/Precious-c/hng_Stage_0",
    });
});
app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
