"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const auth_1 = require("../middleware/auth");
const userRouter = express_1.default.Router();
userRouter.post("/registration", user_controller_1.registrationUser);
userRouter.post("/activate-user", user_controller_1.activateUser);
userRouter.post("/login", user_controller_1.loginUser);
userRouter.get("/logout", auth_1.isAuthenticated, user_controller_1.logoutUser);
userRouter.get("/refresh", user_controller_1.updateAccessToken);
userRouter.get("/me", user_controller_1.updateAccessToken, auth_1.isAuthenticated, user_controller_1.getUserInfo);
userRouter.post("/social-auth", user_controller_1.socialAuth);
userRouter.put("/update-user-info", user_controller_1.updateAccessToken, auth_1.isAuthenticated, user_controller_1.updateUserInfo);
userRouter.put("/update-user-password", user_controller_1.updateAccessToken, auth_1.isAuthenticated, user_controller_1.updateUserPassword);
userRouter.put("/update-user-avatar", user_controller_1.updateAccessToken, auth_1.isAuthenticated, user_controller_1.updateUserPicture);
userRouter.get("/all-users", user_controller_1.updateAccessToken, auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), user_controller_1.getAllUsers);
userRouter.put("/update-user-role", user_controller_1.updateAccessToken, auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), user_controller_1.UpdateUserRole);
userRouter.delete("/delete-user/:id", user_controller_1.updateAccessToken, auth_1.isAuthenticated, (0, auth_1.authorizeRoles)("admin"), user_controller_1.deleteUser);
exports.default = userRouter;
