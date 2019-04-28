var mongoose = require('mongoose');

// Database Connection
mongoose.connect('mongodb://localhost/librarymgt', { useNewUrlParser: true })
    .then(()=>console.log('DB Connected...'))
    .catch(err => console.log('Error To Connect...',err));

//Creating Schema
const bookSchema = new mongoose.Schema({
    bookId:Number,
    bookName:String
});
//Create Model from Database Schema
const Book = mongoose.model('Book',bookSchema);


// Create New Book
async function createBook(){
    const mybook = new Book({
        bookId:2,
        bookName:"Book 2"
    });
    const result = await mybook.save();
    console.log(result);
}
createBook();




// Get All Books
async function getBooks(){
    const books = await Book.find();
    console.log("Get All Books"+books);
}
getBooks();