const express = require("express");
const router = express.Router();
const connection = require("../config");
const jwtMiddleware = require("../services/jwtMiddleware");

router.get('/', (req, res) => {
  connection.query("SELECT * FROM historia_guidismo;", (err, results) => {
    if (err) {
      res.status(500).send("Data not found");
    } else {
      res.json(results);
    }
  });
});

router.put("/", jwtMiddleware, (req, res) => {
  const newData = req.body;
  connection.query(
    "UPDATE historia_guidismo SET ? ",
    [newData],
    (err, results) => {
      if (err) {
        res.status(500).send("Error updating historia guidismo data");
      } else {
        res.sendStatus(200);
      }
    }
  );
});

router.get("/timeline-one", jwtMiddleware, (req, res) => {
  connection.query(
    "SELECT * FROM historia_guidismo_timeline_one WHERE publish = 1 ORDER BY position ASC;",
    (err, results) => {
      if (err) {
        res.status(500).send("Data not found");
      } else {
        res.json(results);
      }
    }
  );
});

router.get("/timeline-one-withunpublished", jwtMiddleware, (req, res) => {
  connection.query(
    "SELECT * FROM historia_guidismo_timeline_one ORDER BY position ASC;",
    (err, results) => {
      if (err) {
        res.status(500).send("Data not found");
      } else {
        res.json(results);
      }
    }
  );
});

router.get("/timeline-one/:id", jwtMiddleware, (req, res) => {
  connection.query(
    "SELECT * FROM historia_guidismo_timeline_one WHERE id=?",
    [req.params.id],
    (err, results) => {
      if (err) {
        res.status(400).send("Query Error");
      } else if (results.length === 0) {
        res.status(404).send("ID not found");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

router.post("/timeline-one", jwtMiddleware, (req, res) => {
  const formData = req.body;
  connection.query(
    "INSERT INTO historia_guidismo_timeline_one SET ?",
    formData,
    (err, results) => {
      if (err) {
        res.status(500).json({ flash: err.message });
        console.log(err);
      } else {
        res.status(200).json({ flash: "Gravado com Sucesso" });
      }
    }
  );
});

router.put("/timeline-one/:id", jwtMiddleware, (req, res) => {
  // We get the ID from the url:
  const idTimelineOne = req.params.id;

  // We get the data from the req.body
  const newTimelineOne = req.body;

  // We send a UPDATE query to the DB
  connection.query(
    "UPDATE historia_guidismo_timeline_one SET ? WHERE id = ?",
    [newTimelineOne, idTimelineOne],
    (err, results) => {
      if (err) {
        res.status(500).json({ flash: err.message });
      } else {
        res.status(200).json({ flash: "Gravado com Sucesso" });
      }
    }
  );
});

router.delete("/timeline-one/:id", jwtMiddleware, (req, res) => {
  const idTimelineOne = req.params.id;
  connection.query(
    "DELETE FROM historia_guidismo_timeline_one WHERE id = ?",
    idTimelineOne,
    (err, results) => {
      if (err) {
        res.status(500).send("Error");
      } else {
        res.status(200).send("Data deleted!");
      }
    }
  );
});

router.get("/timeline-two", jwtMiddleware, (req, res) => {
  connection.query(
    "SELECT * FROM historia_guidismo_timeline_two WHERE publish = 1 ORDER BY position ASC;",
    (err, results) => {
      if (err) {
        res.status(500).send("Data not found");
      } else {
        res.json(results);
      }
    }
  );
});

router.get("/timeline-two-withunpublished", jwtMiddleware, (req, res) => {
  connection.query(
    "SELECT * FROM historia_guidismo_timeline_two ORDER BY position ASC;",
    (err, results) => {
      if (err) {
        res.status(500).send("Data not found");
      } else {
        res.json(results);
      }
    }
  );
});

router.get("/timeline-two/:id", jwtMiddleware, (req, res) => {
  connection.query(
    "SELECT * FROM historia_guidismo_timeline_two WHERE id=?",
    [req.params.id],
    (err, results) => {
      if (err) {
        res.status(400).send("Query Error");
      } else if (results.length === 0) {
        res.status(404).send("ID not found");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

router.post("/timeline-two", jwtMiddleware, (req, res) => {
  const formData = req.body;
  connection.query(
    "INSERT INTO historia_guidismo_timeline_two SET ?",
    formData,
    (err, results) => {
      if (err) {
        res.status(500).json({ flash: err.message });
        console.log(err);
      } else {
        res.status(200).json({ flash: "Gravado com Sucesso" });
      }
    }
  );
});

router.put("/timeline-two/:id", jwtMiddleware, (req, res) => {
  // We get the ID from the url:
  const idTimelineTwo = req.params.id;

  // We get the data from the req.body
  const newTimelineTwo = req.body;

  // We send a UPDATE query to the DB
  connection.query(
    "UPDATE historia_guidismo_timeline_two SET ? WHERE id = ?",
    [newTimelineTwo, idTimelineTwo],
    (err, results) => {
      if (err) {
        res.status(500).json({ flash: err.message });
      } else {
        res.status(200).json({ flash: "Gravado com Sucesso" });
      }
    }
  );
});

router.delete("/timeline-two/:id", jwtMiddleware, (req, res) => {
  const idTimelineTwo = req.params.id;
  connection.query(
    "DELETE FROM historia_guidismo_timeline_two WHERE id = ?",
    idTimelineTwo,
    (err, results) => {
      if (err) {
        res.status(500).send("Error");
      } else {
        res.status(200).send("Data deleted!");
      }
    }
  );
});

module.exports = router;
