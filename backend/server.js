const express = require("express");
const { connection } = require("./db");
const cors = require("cors");
const { userRouter } = require("./routes/users.routes");
const { notesRouter } = require("./routes/notes.routes");
const { auth } = require("./middleware/auth.middleware");


const app = express();

app.use(express.json());
app.use(cors())

app.use("/user",userRouter);
app.use("/notes",auth,notesRouter);

app.listen(4500,async ()=>{
    try {
        await connection;
        console.log("Server is running");
        console.log("db is connected");
    } catch (error) {
        console.log(error.message)
    }
})