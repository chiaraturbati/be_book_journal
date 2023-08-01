const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3001;

/* `require("dotenv").config()` is used to load environment variables from a `.env` file into the
Node.js process. */
require("dotenv").config();

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

// Rotte e controller per le operazioni CRUD sui book
const booksRouter = require("./routes/books");
app.use("/books", booksRouter);

// Avvia il server
app.listen(port, () => {
  console.log(`Il server è in esecuzione sulla porta ${port}`);
});
