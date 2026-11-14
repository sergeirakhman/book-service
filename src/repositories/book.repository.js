import {Book} from '../models/index.js';

export const addBook = async (book) => Book.create(book);

export const findBookById = async (isbn) => Book.findByPk(isbn, {include: 'authors'});

export const removeBookById = async (isbn) => {
    const book = await findBookById(isbn);
    if (book) book.destroy();
};
