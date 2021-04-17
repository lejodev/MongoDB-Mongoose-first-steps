const express = require("express");
const router = express.Router();
const postSchema = require("../model/Post");

// Get posts
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

// Get a specific post
router.get("/:id", async (req, res) => {
  try {
    const post = await postSchema.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).send("Error: " + error);
  }
});

// Create a new post
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
});

// Update a post
router.patch("/:id", async (req, res) => {
  try {
    const updatedPost = await postSchema.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost).status(200);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a post
router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await postSchema.remove({ _id: req.params.id });
    res.status(200).json(deletedPost);
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
});

module.exports = router;
