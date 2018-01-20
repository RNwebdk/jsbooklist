class Book{
	constructor(title, author, isbn){
		this.title = title; 
		this.author = author;
		this.isbn = isbn;
	}
}

class UI{
	addBookToListEvent(e){
		// Get form values
		const title = document.getElementById('title').value,
			  author = document.getElementById('author').value,
			  isbn = document.getElementById('isbn').value;

		const book = new Book(title, author, isbn);

		// Instantiate UI
		const ui = new UI();

		// Validation
		if (title === '' || author === '' || isbn === '') {
			//Error alert
			ui.showAlert('Please fill in all fields', 'error');
		}else{
			//Add book to list
			ui.addBookToList(book);

			//Add to localstorage
			Store.addBook(book);

			// Show success
			ui.showAlert('Book Added!', 'success');

			// Clear fields
			ui.clearFields();
		}

		e.preventDefault();
	}
	addBookToList(book){
		const list = document.getElementById('book-list');
		// Create tr element
		const row = document.createElement('tr');
		// Insert cols
		row.innerHTML = `
			<td>${book.title}</td>
			<td>${book.author}</td>
			<td>${book.isbn}</td>
			<td><a href="#" class="delete">X</a></td>
		`;
		list.appendChild(row);
	}

	showAlert(message, className){
		// Create div
		const div = document.createElement('div');
		// Add classes
		div.className = `alert ${className}`;
		// Add text
		div.appendChild(document.createTextNode(message));
		// Get parent
		const container = document.querySelector('.container');
		//Get form
		const form = document.querySelector('#book-form');
		// Insert alert
		container.insertBefore(div, form);

		// Timeout after 3 sec
		setTimeout(function(){
			document.querySelector('.alert').remove();
		}, 3000);
	}

	deleteBookEvent(e){
		// Delete Book
		ui.deleteBook(e.target);

		// Delete from LocalStorage
		//get the ISBN to remove the item
		Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

		// Show message when deleted
		ui.showAlert('Book Removed !', 'success');

		e.preventDefault();
	}

	deleteBook(target){
		if (target.className === 'delete') {
			target.parentElement.parentElement.remove();
		}
	}

	clearFields(){
		document.getElementById('title').value = "";
		document.getElementById('author').value = "";
		document.getElementById('isbn').value = "";
	}
}

class Store{
	static getBook(){
		let Books;
		if (localStorage.getItem('books') === null) {
			books = [];
		}else{
			books = JSON.parse(localStorage.getItem('books'));
		}

		return books;
	}


	static displayBook(){
		const books = Store.getBook();

		books.forEach(function(book){
			const ui = new UI();

			//Add book to UI
			ui.addBookToList(book);
		});
	}

	static addBook(book){
		const books = Store.getBook();

		books.push(book);

		localStorage.setItem('books', JSON.stringify(books));
	}

	static removeBook(isbn){
		const books = Store.getBook();

		books.forEach(function(book){
			if (book.isbn === isbn) {
				books.splice(index, 1);
			}
		});

		localStorage.setItem('books', JSON.stringify(books));
	}
}

// Instantiate UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', Store.displayBooks);

//Event Listener for add book
document.getElementById('book-form').addEventListener('submit', ui.addBookToListEvent);

// Event Listener for delete book
document.getElementById('book-list').addEventListener('click', ui.deleteBookEvent);