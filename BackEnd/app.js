import express from "express";
import connectDB from "./src/config/monogo.config.js";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import shortUrl from "./src/models/short_url.model.js";
dotenv.config("./.env");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

app.post("/api/create", async (req, res) => {
  const { url } = req.body;
  const shortedURL = String(nanoid(7)).toLowerCase();
  const newUrl = await new shortUrl({ full_url: url, short_url: shortedURL });
  await newUrl.save();
  res.send(shortedURL);
});

app.get("/api/:shortedURL", async (req, res) => {
  const { shortedURL } = req.params;
  const original = await shortUrl.findOne({ short_url: shortedURL });
  if (original) {
    console.log("original", original.full_url);
    res.redirect(original.full_url);
  } else {
    res.status(404).send("Not Found");
  }
});
app.listen(3000, () => {
  connectDB();
  console.log(`Server is running on 3000`);
});
