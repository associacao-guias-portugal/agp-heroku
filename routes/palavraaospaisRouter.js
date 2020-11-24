const express = require("express");
const router = express.Router();
const connection = require("../config");
const jwtMiddleware = require("../services/jwtMiddleware");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM palavraaospais;", (err, results) => {
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
    "UPDATE palavraaospais SET ? ",
    [newData],
    (err, results) => {
      if (err) {
        res.status(500).send("Error updating palavra aos pais data");
      } else {
        res.sendStatus(200);
      }
    }
  );
});

router.get("/palavraaospais2", (req, res) => {
  connection.query(
    "SELECT * FROM palavraaospais2 WHERE publish = 1 ORDER BY position ASC;",
    (err, results) => {
      if (err) {
        res.status(500).send("Files not found");
      } else {
        res.json(results);
      }
    }
  );
});

router.get("/palavraaospais2-withunpublish", (req, res) => {
  connection.query(
    "SELECT * FROM palavraaospais2 ORDER BY position ASC;",
    (err, results) => {
      if (err) {
        res.status(500).send("Files not found");
      } else {
        res.json(results);
      }
    }
  );
});

router.get("/palavraaospais2/:id", (req, res) => {
  connection.query(
    "SELECT * FROM palavraaospais2 WHERE id=?",
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

router.post("/palavraaospais2", jwtMiddleware, (req, res) => {
  const formData = req.body;
  connection.query(
    "INSERT INTO palavraaospais2 SET ?",
    formData,
    (err, results) => {
      if (err) {
        res.status(500).json({ flash: err.message });
      } else {
        res.status(200).json({ flash: "Gravado com Sucesso" });
      }
    }
  );
});

router.put("/palavraaospais2/:id", jwtMiddleware, (req, res) => {
  // We get the ID from the url:
  const idPalavraaospais2 = req.params.id;

  // We get the data from the req.body
  const newPalavraaospais2 = req.body;

  // We send a UPDATE query to the DB
  connection.query(
    "UPDATE palavraaospais2 SET ? WHERE id = ?",
    [newPalavraaospais2, idPalavraaospais2],
    (err, results) => {
      if (err) {
        res.status(500).json({ flash: err.message });
      } else {
        res.status(200).json({ flash: "Gravado com Sucesso" });
      }
    }
  );
});

router.delete("/palavraaospais2/:id", jwtMiddleware, (req, res) => {
  const idPalavraaospais2 = req.params.id;
  connection.query(
    "DELETE FROM palavraaospais2 WHERE id = ?",
    idPalavraaospais2,
    (err, results) => {
      if (err) {
        res.status(500).send("Error");
      } else {
        res.status(200).send("Data deleted!");
      }
    }
  );
});

router.get("/palavraaospaiscards", (req, res) => {
  connection.query(
    "SELECT * FROM palavraaospaiscards WHERE publish = 1 ORDER BY id ASC;",
    (err, results) => {
      if (err) {
        res.status(500).send("Files not found");
      } else {
        res.json(results);
      }
    }
  );
});

router.get("/palavraaospaiscards-withunpublish", (req, res) => {
  connection.query(
    "SELECT * FROM palavraaospaiscards ORDER BY id ASC;",
    (err, results) => {
      if (err) {
        res.status(500).send("Files not found");
      } else {
        res.json(results);
      }
    }
  );
});

router.get("/palavraaospaiscards/:id", (req, res) => {
  connection.query(
    "SELECT * FROM palavraaospaiscards WHERE id=?",
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

router.put("/palavraaospaiscards/:id", jwtMiddleware, (req, res) => {
  // We get the ID from the url:
  const idCard = req.params.id;

  // We get the data from the req.body
  const newCard = req.body;

  // We send a UPDATE query to the DB
  connection.query(
    "UPDATE palavraaospaiscards SET ? WHERE id = ?",
    [newCard, idCard],
    (err, results) => {
      if (err) {
        res.status(500).json({ flash: err.message });
      } else {
        res.status(200).json({ flash: "Gravado com Sucesso" });
      }
    }
  );
});

module.exports = router;
