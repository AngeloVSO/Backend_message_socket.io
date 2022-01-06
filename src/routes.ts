import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLastThreeMessageController } from "./controllers/GetLastThreeMessageController";
import { UserProfileController } from "./controllers/UserProfileController";
import { IsUserAuthenticated } from "./middleware/IsUserAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", IsUserAuthenticated, new CreateMessageController().handle)

router.get("/messages/last3", new GetLastThreeMessageController().handle)

router.get("/profile", IsUserAuthenticated, new UserProfileController().handle)

export { router };