import { Router } from "express";
import {
  createSchool,
  signInSchool,
  verifySchool,
} from "../controller/schoolController";

const router: Router = Router();

router.route("/createAccount").post(createSchool);
router.route("/verifyAccount").patch(verifySchool);
router.route("/loginAccount").post(signInSchool);

export default router;
