import { Router } from "express";
import { createShortUrl, getoriginalUrl } from "../controllers/shortUrlController.js";
import { isLoggedIn } from "./middlewares/authMiddleware.js";


const shortURLRouter = Router();


shortURLRouter.post("/", isLoggedIn, createShortUrl)


// redirect router "/api/s/shortCode"
shortURLRouter.get("/:shortcode", getoriginalUrl)




export default shortURLRouter;