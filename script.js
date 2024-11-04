//your JS code here. If required.
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
    
    // Create delete button
    const td4 = document.createElement('td');
    const deleteButton = document.createElement('button'); // Create a button for deletion
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete'); // Add a class for styling or querying
    deleteButton.onclick = () => {
        tr.remove(); // Remove the entire row when the delete button is clicked
    };

    td4.appendChild(deleteButton); // Append the delete button to the td
    tr.append(td1, td2, td3, td4); // Append all cells to the row

    book_list.append(tr); // Append the row to the book list
});