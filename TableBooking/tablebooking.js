// Get the modal for Table Images
var modal = document.getElementById("tbl");

// Get the button that opens the modal
var btn = document.getElementById("showModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "flex"; // Changed to flex to center the content
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the custom alert modal
var alertModal = document.getElementById("customAlert");

// Get the button that triggers the custom alert
var bookTableBtn = document.getElementById("bookTableBtn");

// Get the <button> element that closes the custom alert
var alertOkBtn = document.getElementById("alertOkBtn");

// Function to validate form
function validateForm() {
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var guestNumber = document.getElementById("guestNumber").value;
    var table = document.getElementById("table").value;

    if (!name || !date || !time || !guestNumber || !table) {
        // Display custom alert for missing information
        document.getElementById("alertMessage").innerText = "Please fill out all required fields.";
        alertModal.style.display = "flex";
        return false;
    }
    return true;
}

// When the user clicks the button, validate the form and show the custom alert if all is correct
bookTableBtn.onclick = function() {
    if (validateForm()) {
        // Reset the form
        document.querySelector(".booking-form").reset();

        // Show the booking confirmation message
        document.getElementById("alertMessage").innerText = "Your table has been booked successfully!";
        alertModal.style.display = "flex";
    }
}

// When the user clicks on <button> (OK), close the custom alert
alertOkBtn.onclick = function() {
    alertModal.style.display = "none";
}

// When the user clicks anywhere outside of the custom alert modal, close it
window.onclick = function(event) {
    if (event.target == alertModal) {
        alertModal.style.display = "none";
    }
}
