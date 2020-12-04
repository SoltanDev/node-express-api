import express from "express";
import controller from "./utils/base.controller"


const app = express();
const port = process.env.PORT || 8000;

app.get('/', controller().getAll)

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})