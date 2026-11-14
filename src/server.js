import express from "express";
import bookRoutes from "./routes/book.route.js";
import authorRoutes from "./routes/author.route.js";
import publisherRoutes from "./routes/publisher.route.js";
import errorHandler from "./middlewares/error.middleware.js";
import {dbConnection} from "./config/db.js";
import {syncModels} from "./models/index.js";

const app = express();

app.use(express.json());
app.use(bookRoutes);
app.use(authorRoutes);
app.use(publisherRoutes);
app.use(errorHandler);
app.use((req, res) => res.status(404).type('text/plain; charset=utf8').send("Not Found"));

async function startServer() {
    await dbConnection();
    app.listen(process.env.PORT || 8080, () => console.log("Server is running on port " + process.env.PORT || 8080));
}

await startServer();
await syncModels()