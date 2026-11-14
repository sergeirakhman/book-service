import {Router} from "express";
import {findBookAuthors} from "../service/book service.js";
import {removeAuthor} from "../controller/book.controller.js";

const router = Router();
router.get('/authors/book/:ISBN', findBookAuthors);
router.delete('/author/:author', removeAuthor);

export default router;