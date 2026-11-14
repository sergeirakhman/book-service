import {findPublishersByAuthor} from "../controller/book.controller.js";
import {Router} from "express";


const router = new Router();
router.get('/publishers/author/:author', findPublishersByAuthor);

export default router;