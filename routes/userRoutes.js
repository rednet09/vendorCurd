const express = require("express");
const venderController = require("../controllers/venderController");
const router = express.Router();

router.get("/getVendorUsers/:prId/:custOrgId", venderController.getUsers);
