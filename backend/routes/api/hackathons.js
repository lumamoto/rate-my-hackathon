const express = require("express");
const router = express.Router();

// Load Hackathon model
const Hackathon = require("../../models/Hackathon");

// @route GET api/hackathons/search
// @description Returns hackathons whose names contain a given term
// @access Public
router.get("/search", (req, res) => {
  let q = req.query.q
  Hackathon.find({name : {$regex : String(q), $options: 'i'}})
    .then((hackathons) => res.json(hackathons))
    .catch((err) =>
      res.status(404).json({ nohackathonsfound: "No Hackathons found" })
    );
});

// @route GET api/hackathons/test
// @description Tests hackathons route
// @access Public
router.get("/test", (req, res) => res.send("Hackathon route testing!"));

// @route GET api/hackathons
// @description Get all hackathons
// @access Public
router.get("/", (req, res) => {
  Hackathon.find()
    .then((hackathons) => res.json(hackathons))
    .catch((err) =>
      res.status(404).json({ nohackathonsfound: "No Hackathons found" })
    );
});

// @route GET api/hackathons/:id
// @description Get single hackathon by id
// @access Public
router.get("/:id", (req, res) => {
  Hackathon.findById(req.params.id)
    .then((hackathon) => res.json(hackathon))
    .catch((err) =>
      res.status(404).json({ nohackathonfound: "No Hackathon found" })
    );
});

// @route POST api/hackathons
// @description Add/save hackathon
// @access Public
router.post("/", (req, res) => {
  Hackathon.create(req.body)
    .then((hackathon) => res.json({ msg: "Hackathon added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this hackathon" })
    );
});

// @route PUT api/hackathons/:id
// @description Update hackathon
// @access Public
router.put("/:id", (req, res) => {
  Hackathon.findByIdAndUpdate(req.params.id, req.body)
    .then((hackathon) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route DELETE api/hackathons/:id
// @description Delete hackathon by id
// @access Public
router.delete("/:id", (req, res) => {
  Hackathon.findByIdAndRemove(req.params.id, req.body)
    .then((hackathon) =>
      res.json({ mgs: "Hackathon entry deleted successfully" })
    )
    .catch((err) => res.status(404).json({ error: "No such a hackathon" }));
});

module.exports = router;
