import "dotenv/config";
import { connectDb } from "./db/connectDb.js";
import { app } from "./app.js";

const port = process.env.PORT || 3000;

connectDb()
    .then(() => {
        app.listen(port, () => {
            console.log(`Listening on port -> ${port}`);
        });
    })
    .catch((error) => {
        console.log(`Connection error -> ${error}`);
    });
