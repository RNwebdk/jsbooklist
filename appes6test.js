class Book{
	constructor(title, author, isbn){
		this.title = title; 
		this.author = author;
		this.isbn = isbn;
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
}

class UI{
	addBookToListEvent(e){
		// Get form values
		const title = document.getElementById('title').value,
			  author = document.getElementById('author').value,
			  isbn = document.getElementById('isbn').value;

		const book = new Book(title, author, isbn);

		// Instantiate UI
		// const ui = new UI();

		// Validation
		if (title === '' || author === '' || isbn === '') {
			//Error alert
			ui.showAlert('Please fill in all fields', 'error');
		}else{
			//Add book to list
			book.addBookToList(book);

			// Show success
			ui.showAlert('Book Added!', 'success');

			// Clear fields
			ui.clearFields();
		}

		e.preventDefault();
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

// Instantiate UI
const ui = new UI();

//Event Listener for add book
document.getElementById('book-form').addEventListener('submit', ui.addBookToListEvent);

// Event Listener for delete book
document.getElementById('book-list').addEventListener('click', ui.deleteBookEvent);