const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

const bookRouter = require("./routes/books");

/* `require("dotenv").config()` is used to load environment variables from a `.env` file into the
Node.js process. */
require("dotenv").config();

// Middleware per consentire le richieste da qualsiasi origine
app.use(cors());

const mongoURL = `${process.env.DATABASE_URL}`;
mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connessione al database avvenuta con successo!");
  })
  .catch((err) => {
    console.error("Errore nella connessione al database:", err);
  });

app.use(express.json()); // Middleware per consentire a Express di parsare il corpo delle richieste in formato JSON

app.use("/", bookRouter);

// Avvia il server
app.listen(port, "127.0.0.1", () => {
  console.log(`The server is running on http://127.0.0.1:${port}`);
});
