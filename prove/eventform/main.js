const form = document.getElementById('event-form');
const type = document.getElementById('ticket-type');
const date = document.getElementById('event-date');
const codeField = document.getElementById('code-field');
const codeLabel = codeField.querySelector('label');
const code = document.getElementById('code');
const submitBtn = document.getElementById('submit-button');
const output = document.getElementById('output');


// Update Code field when type is selected
type.addEventListener("change", e => {
    const input = e.target.value;
    console.log(codeLabel);
    console.log(codeField);
    if (input === "") {
        codeField.hidden = true;
        return;
    }
    codeLabel.textContent = (input === "student") ? "Student I#" : "Access Code";
    code.textContent = "";
    codeField.hidden = false;
});

// Big event listener when form is submitted
form.addEventListener("submit", e => {
    // Prevent default behaviors
    e.preventDefault();

    // Error message if the selected date is not after today
    if (!(isAfterToday(form.eventDate.value))) {
        output.innerHTML = `<p>You must select an event date that is after today.</p>`
        return;
    }
    
    const iNumRegex = /^[0-9]{9}$/;
    const value = form.code.value;
    // Error message if Student ID/Access Code is missing
    if (value === "") {
        output.innerHTML = `<p>${codeLabel.textContent} is a required field.</p>`
    }
    // Error meesage if student I# is not a valid format
    else if (type.value === "student" && !(iNumRegex.test(value))) {
        output.innerHTML = `<p>A student ID must be 9 digits long and contain only numbers.</p>`
        console.log(value);
        console.log(iNumRegex.test(value));

    }
    // Error message if the access code is invalid
    else if (type.value === "guest" && value != "EVENT131") {
        output.innerHTML = `<p>Invalid access code.</p>`
    }

    // Successful form submission
    else {
        output.innerHTML = `
            <h2>Ticket Created</h2>
            <p>${form.firstName.value} ${form.lastName.value}</p>
            <p>${form.ticketType.value}</p>
            <p>${form.eventDate.value}</p>
        `;
        form.reset();
    }
});

// Helper function for requiring a date that is later than the current date
function isAfterToday(date) {
    const selectedDate = new Date(date);
    const today = new Date();
    return selectedDate > today;
}