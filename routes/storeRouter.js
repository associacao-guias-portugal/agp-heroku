const express = require("express");
const router = express.Router();
const connection = require("../config");

const jwtMiddleware = require("../services/jwtMiddleware");

router.get("/", (req, res) => {
  connection.query(" SELECT * FROM store ", (err, results) => {
    if (err) {
      res.status(500).send("Items not found");
    } else {
      res.json(results);
    }
  });
});

router.get("/id/:id", (req, res) => {
  connection.query(
    "SELECT * FROM store WHERE id=?",
    [req.params.id],
    (err, results) => {
      if (err) {
        res.status(400).send("Error reading store items");
      } else {
        if (results.length === 0) {
          res.status(400).send("No items found");
        } else {
          res.status(200).json(results);
        }
      }
    }
  );
});

router.get("/:itemCategory", (req, res) => {
  connection.query(
    "SELECT * FROM store WHERE category_pt =?",
    [req.params.itemCategory],
    (err, results) => {
      if (err) {
        res.status(500).send("Error reading store items");
      } else {
        if (results.length === 0) {
          res.status(400).send("No items found");
        } else {
          res.status(200).json(results);
        }
      }
    }
  );
});

router.post("/newItem", jwtMiddleware, (req, res) => {
  const { id, ...formData } = req.body;
  connection.query("INSERT INTO store SET ?",
    [formData],
    (err, results) => {
      if (err) {
        res.json({ flash: err.message });
      } else {
        res.json({ flash: "Gravado com sucesso" });
      }
    });
});

router.put("/editItem", jwtMiddleware, (req, res) => {
  connection.query(
    "UPDATE store SET ? WHERE id=?",
    [req.body, req.body.id],
    (err, results) => {
      if (err) {
        res.status(400);
      } else {
        res.status(200).json({ flash: "Alterado com sucesso" });
      }
    }
  );
});

router.delete("/deleteItem/:id", jwtMiddleware, (req, res) => {
  connection.query(
    "DELETE FROM store WHERE id=?",
    [req.params.id],
    (err, results) => {
      if (err) {
        res.status(400).send("Error deleting item");
      } else {
        if (results.length === 0) {
          res.status(400).send("Item nof found");
        } else {
          res.status(200).send("Item deleted");
        }
      }
    }
  );
});

router.get('/header/header', (req, res) => {
  connection.query('SELECT * FROM store_header',
    (err, results) => {
      if (err) {
        res.status(400).send('Error')
      } else {
        res.status(200).json(results)
      }
    }
  )
})

router.put('/header/header_edit', jwtMiddleware, (req, res) => {
  connection.query('UPDATE store_header SET ? ',
      [req.body],
      (err, results) => {
          if (err) {
              res.status(400).json({ flash: 'Ocorreu um erro' })
          } else {
              res.status(200).json({ flash: 'Alterado com sucesso' })
          }
      }
  )
})


module.exports = router;
