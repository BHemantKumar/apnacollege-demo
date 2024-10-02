// Get the form and table elements
const form = document.getElementById('create-form');
const tableBody = document.getElementById('table-body');

// Create an array to store data
let data = [];

// Function to create a new row in the table
function createRow(id, name, age) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${age}</td>
        <td>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </td>
    `;
    tableBody.appendChild(row);
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const id = data.length + 1;
    data.push({ id, name, age });
    createRow(id, name, age);
    form.reset();
}

// Function to handle edit button click
function handleEditClick(event) {
    const row = event.target.parentNode.parentNode;
    const id = row.cells[0].textContent;
    const name = row.cells[1].textContent;
    const age = row.cells[2].textContent;
    // Update the data array
    data = data.map(item => item.id === parseInt(id) ? { id, name, age } : item);
    // Update the table row
    row.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${age}</td>
        <td>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </td>
    `;
}

// Function to handle delete button click
function handleDeleteClick(event) {
    const row = event.target.parentNode.parentNode;
    const id = row.cells[0].textContent;
    // Remove the data from the array
    data = data.filter(item => item.id !== parseInt(id));
    // Remove the table row
    row.remove();
}

// Add event listeners to the form and table
form.addEventListener('submit', handleSubmit);
tableBody.addEventListener('click', event => {
    if (event.target.classList.contains('edit-btn')) {
        handleEditClick(event);
    } else if (event.target.classList.contains('delete-btn')) {
        handleDeleteClick(event);
    }
});