import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./utills/db.js";
import userRoute from "./routes/user.routes.js";
import companyRoute from "./routes/company.route.js"
import jobRoutes from "./routes/job.routes.js"
import applicationRoute from "./routes/application.route.js"
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOption = {
    origin: 'http://localhost:5173',
    credentials: true
}

app.use(cors(corsOption));
const PORT = process.env.PORT || 3000;


app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/jobs", jobRoutes);
app.use("/api/v1/applications", applicationRoute);
app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
})