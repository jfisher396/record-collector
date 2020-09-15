const router = require("express").Router();
const recordRoutes = require("./records");

// Record routes
router.use("/records", recordRoutes);

module.exports = router;
