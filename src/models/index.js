import Book from "./book.model.js";
import Author from "./author.model.js";
import Publisher from "./publisher.model.js";
import {sequelize} from "../config/db.js";
import {DataTypes} from "sequelize";

// Book and Publisher. One-To-Many relationship
Book.belongsTo(Publisher, {
    foreignKey: "publisher",
    targetKey: "publisher_name",
    as: "publisherDetails"
});

Publisher.hasMany(Book, {
    foreignKey: "publisher",
    targetKey: "publisher_name",
    as: "books"
});

// Book and Author, Many-To-Many
// Define the junction table
const BooksAuthors = sequelize.define('BooksAuthors', {
    isbn: {
        type: DataTypes.STRING,
        references: {
            model: Book,
            key: "isbn"
        }
    },
    author_name: {
        type: DataTypes.STRING,
        references: {
            model: Author,
            key: "name"
        }
    }
}, {
    tableName: 'books_authors'
})

Book.belongsToMany(Author, {
    through: BooksAuthors,
    foreignKey: "isbn",
    otherKey: "author_name",
    as: "authors"
})

Author.belongsToMany(Book, {
    through: BooksAuthors,
    foreignKey: "author_name",
    otherKey: "isbn",
    as: "books"
})

const syncModels = async () => {
    try {
        await sequelize.sync();
        console.log('Models synced successfully')
    } catch (e) {
        console.log('Error syncing models', e)
    }
}

// Book.prototype.toJSON = function () {
//     const values = Object.assign({}, this.get());
//     delete values.createdAt;
//     delete values.updatedAt;
//     return values;
// };
//
// Author.prototype.toJSON = function () {
//     const values = Object.assign({}, this.get());
//     delete values.createdAt;
//     delete values.updatedAt;
//     delete values.BooksAuthors; // Удаляет промежуточную таблицу из объекта автора
//     return values;
// };

export {syncModels, Book, Author, Publisher}