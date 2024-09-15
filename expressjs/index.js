import express from "express";

const port = process.env.PORT || 8000;

const app = express(); //creating an express application

app.get("/", (req, res) => {
  //res.send("<h1>Mim<h1>");
  //res.send("Mim");
  res.send({ name: "mim" });

  console.log(req.params);
  console.log(res.data);
});

app.listen(port, () => console.log(`Server is running at port ${port}`));
