const form = document.getElementById("myForm");
const tableBody = document.querySelector("#dataTable tbody");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.querySelector("input[name='gender']:checked").value;
    const foodOptions = document.querySelectorAll("input[name='food']:checked");
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    // Check if at least 2 food options are selected
    if (foodOptions.length < 2) {
        alert("Select at least 2 food options.");
        return;
    }

    // Create a new row in the table
    const newRow = tableBody.insertRow();
    const cells = [
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
    ];

    // Populate the new row with form values
    cells[0].textContent = firstName;
    cells[1].textContent = lastName;
    cells[2].textContent = address;
    cells[3].textContent = pincode;
    cells[4].textContent = gender;
    cells[5].textContent = Array.from(foodOptions).map((option) => option.value).join(", ");
    cells[6].textContent = state;
    cells[7].textContent = country;

    // Clear form fields
    form.reset();


    const myElement = document.getElementById('myElement');
        myElement.style.backgroundImage = "url('https://wallpapertag.com/wallpaper/full/6/a/4/151428-download-free-beautiful-desktop-wallpaper-1920x1200-for-pc.jpg')";
        myElement.style.backgroundSize = "cover";
        myElement.style.backgroundPosition = "center";


});
