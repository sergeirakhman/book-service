import * as bookService from '../service/book service.js'

export const addBook = async (req, res, next) => {
    try {
        await bookService.addBook(req.body);
        return res.sendStatus(201);
    } catch (err) {
        return next(err);
    }
}

export const findBookByISBN = async (req, res, next) => {
    try {
        const book = await bookService.findBookByISBN(req.params.isbn);
        return res.json(book);
    } catch (err) {
        return next(err);
    }
}

export const removeBook = async (req, res, next) => {
    try {
        console.log(req.params.isbn)
        const book = await bookService.removeBook(req.params.isbn);
        return res.json(book);
    } catch (err) {
        return next(err);
    }
}

export const updateBookTitle = async (req, res) => {
    const book = await bookService.updateBookTitle(req.params.ISBN, req.params.title);
    book ? res.status(200).send(book) : res.status(404).send();
}

export const findBooksByAuthor = async (req, res) => {
    const books = await bookService.findBooksByAuthor(req.params.author);
    books && books.length > 0 ? res.status(200).send(books) : res.status(404).send();
}

export const findBooksByPublisher = async (req, res) => {
    const books = await bookService.findBooksByPublisher(req.params.publisher);
    books && books.length > 0 ? res.status(200).send(books) : res.status(404).send();
}

export const findBookAuthors = async (req, res) => {
    const authors = await bookService.findBookAuthors(req.params.ISBN);
    authors && authors.length > 0 ? res.status(200).send(authors) : res.status(404).send();
}

export const findPublishersByAuthor = async (req, res) => {
    const publishers = await bookService.findPublishersByAuthor(req.params.author);
    publishers && publishers.length > 0 ? res.status(200).send(publishers) : res.status(404).send();
}

export const removeAuthor = async (req, res) => {
    const author = await bookService.removeAuthor(req.params.author);
    author ? res.status(200).send(author) : res.status(404).send();
}