import express from "express";
import cors from "cors";
import CoursesController from "./api/courses.controller.js";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.get("/api/courses", CoursesController.apiQueryCourse);
app.get("/api/sessions", CoursesController.getUniqueSessions);
app.get("/api/subject_names", CoursesController.getUniqueSubjectNames)
app.get("/api/levels", CoursesController.getUniqueLevels)

app.use("*", (req, res) => {
  res.status(404).json({ error: "Page not found." });
});

export default app