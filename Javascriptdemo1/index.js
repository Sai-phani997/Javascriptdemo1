document.getElementById('addPersonForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;

    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = firstName;
    row.appendChild(firstNameCell);
    
    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = lastName;
    row.appendChild(lastNameCell);
    
    const ageCell = document.createElement('td');
    ageCell.textContent = age;
    row.appendChild(ageCell);
    
    document.querySelector('#peopleTable tbody').appendChild(row);

    document.getElementById('addPersonForm').reset();
});
