import express, { json, urlencoded } from "express";
import cors from "cors";
import controller from "./utils/base.controller";


const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', controller().getAll)
app.post('/', controller().createOne)
app.get('/:id', controller().getOne)
app.put('/:id', controller().updateOne)
app.delete('/:id', controller().deleteOne)

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})