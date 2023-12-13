import { Router } from "express";
import {
	changeUserPassword,
	createSchool,
	getCookieUser,
	getUseInfo,
	logOutUser,
	resetUserPassword,
	signInSchool,
	verifySchool,
} from "../controller/schoolController";

const router: Router = Router();

router.route("/register-account").post(createSchool);
router.route("/verify-account").patch(verifySchool);
router.route("/login-account").post(signInSchool);

router.route("/reset-password").patch(resetUserPassword);
router.route("/change-password/:userID").patch(changeUserPassword);

router.route("/get-user/:userID").get(getUseInfo);

router.route("/get-user-cookie/").get(getCookieUser);
router.route("/logout").delete(logOutUser);

export default router;
