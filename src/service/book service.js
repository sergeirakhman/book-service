import * as bookRepository from '../repositories/book.repository.js'
import * as authorRepository from '../repositories/author.repository.js'
import * as publisherRepository from '../repositories/publisher.repository.js'

export const addBook = async (book) => {
    console.log(book);
    const {isbn, title} = book;
    if (await bookRepository.findBookById(isbn)) {
        throw new Error('Book with the same isbn already exists');
    }
    // Create or find the publisher
    let publisher = await publisherRepository.findPublisherById(book.publisher);
    if (!publisher) {
        await publisherRepository.addPublisher(book.publisher);
    }
    // Process the authors
    const authors = [];
    for (const a of book.authors){
        let author = await authorRepository.findAuthorById(a.name);
        if (!author) {
            author = await authorRepository.addAuthor(a);
        }
        authors.push(author);
    }
    // Create a new Book
    book = await bookRepository.addBook({isbn, title, publisher: book.publisher});
    await book.setAuthors(authors);
}

export const findBookByISBN = async (isbn) => await bookRepository.findBookById(isbn);

export const removeBook = async (isbn) => await bookRepository.removeBookById(isbn);

export const updateBookTitle = async (isbn, title) => {
    //TODO
}

export const findBooksByAuthor = async (author) => {
    //TODO
}

export const findBooksByPublisher = async (publisher) => {
    //TODO
}

export const findBookAuthors = async (isbn) => {
    //TODO
}

export const findPublishersByAuthor = async (author) => {
    //TODO
}

export const removeAuthor = async (author) => {
    //TODO
}