const express = require("express");

const { Router } = express;

const router = new Router();

const Team = require("./model");

// Get all teams
router.get("/team", (req, res, next) => {
  Team.findAll()
    .then(teams => {
      res.json(teams);
    })
    .catch(next);
});

// Get a single team

router.get("/team/:id", (req, res, next) => {
  Team.findByPk(req.params.id)
    .then(team => {
      if (team) {
        res.json(team);
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

// Create a team

router.post("/team", (req, res, next) => {
  Team.create(req.body)
    .then(team => res.json(team))
    .catch(next);
});

module.exports = router;
