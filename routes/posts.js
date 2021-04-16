const express = require("express");
const router = express.Router();
const postSchema = require("../model/Post");

router.get("/", async (req, res) => {
  try {
    const posts = await postSchema.find();
    res.status(200).json(posts);
    console.log(posts);
  } catch (error) {
    console.log(error);
    res.send(400).json({ message: err });
  }
  res.send("EXCLELLENT MAN, LIKE AT ALL. YEAHHH");
});

router.post("/", (req, res) => {
  const post = new postSchema({
    title: req.body.title,
    description: req.body.description,
  });

  post
    .save()
    .then((data) => {
      res.status(200).json(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  // post.save((err, data) => {
  //   if (err) {
  //     res.status(400);
  //     console.log(err);
  //   } else {
  //     res.status(200).send("Post added successfully");
  //     console.log("data added successfully");
  //   }
  // });
});

module.exports = router;
