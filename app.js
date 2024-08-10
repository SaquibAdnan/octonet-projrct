document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate form inputs (e.g., ensure all fields are filled)
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let guests = document.getElementById('guests').value;

    if(name && email && date && time && guests) {
        alert("Reservation submitted successfully!");
        // Normally, here you would send data to the server using AJAX
        // Example: 
        // fetch('your-server-endpoint', {
        //     method: 'POST',
         //     body: JSON.stringify({ name, email, date, time, guests }),
        //     headers: { 'Content-Type': 'application/json' }
        // });
    } else {
        alert("Please fill in all fields.");
    }
});