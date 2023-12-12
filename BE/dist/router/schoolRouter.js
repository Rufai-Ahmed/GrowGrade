"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schoolController_1 = require("../controller/schoolController");
const router = (0, express_1.Router)();
router.route("/createAccount").post(schoolController_1.createSchool);
router.route("/verifyAccount").patch(schoolController_1.verifySchool);
router.route("/loginAccount").post(schoolController_1.signInSchool);
exports.default = router;
