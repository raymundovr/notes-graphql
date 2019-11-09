import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import graphlHTTP from "express-graphql";
import schema from "./schema";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/notes_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/", (req, res) => {
    res.json({
	message: "Notes app v1"
    });
});
app.use("/graphql", (req, res, next) => {console.log('Hit'); next(); }, graphlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


