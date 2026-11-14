import {Router} from "express";
import {
    addBook,
    findBookByISBN,
    removeBook,
    updateBookTitle,
    findBooksByAuthor,
    findBooksByPublisher,
    findBookAuthors,
    findPublishersByAuthor,
    removeAuthor
} from "../controller/book.controller.js";

const router = Router();

router.post('/book', addBook);
router.get('/book/:ISBN', findBookByISBN);
router.delete('/book/:ISBN', removeBook);
router.patch('/book/:ISBN/title/:title', updateBookTitle);
router.get('/books/author/:author', findBooksByAuthor);
router.get('/books/publisher/:publisher', findBooksByPublisher);




export default router;