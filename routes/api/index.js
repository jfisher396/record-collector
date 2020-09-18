const router = require("express").Router();
const albumRoutes = require("./albums");

// Record routes
router.use("/albums", albumRoutes);

module.exports = router;
