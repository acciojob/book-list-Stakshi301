document.querySelector('.form-group').addEventListener('submit', (e) => {
    e.preventDefault();
    const book_list = document.getElementById('book-list');

    const form = document.querySelector('.form-group');
    const name = form.title.value;
    const author = form.author.value;
    const isbn = form.isbn.value;

    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.innerText = name;

    const td2 = document.createElement('td');
    td2.innerText = author;

    const td3 = document.createElement('td');
    td3.innerText = isbn;

    // Add the book details to the row
    tr.append(td1, td2, td3);

    // Create the delete cell immediately
    const td4 = document.createElement('td');
    td4.innerText = 'delete';
    td4.classList.add('delete');
    td4.style.cursor = 'pointer'; // Change cursor to indicate it's clickable
    td4.onclick = () => {
        tr.remove(); // Remove the entire row when delete cell is clicked
    };

    // Append the delete cell to the row
    tr.appendChild(td4);

    // Append the row to the book list table
    book_list.append(tr);

    // Optionally, reset the form after adding a book
    form.reset();
});
