document.addEventListener("DOMContentLoaded", function () {
    const distributeForm = document.getElementById("distributeForm");

    distributeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const nameInput = document.getElementById("Name").value;
        const placeInput = document.getElementById("placeDistributed").value;

        // Perform any further actions with the form data here
        // For now, let's just show an alert with the entered data
        alert(`Name: ${nameInput}\nPlace Distributed: ${placeInput}`);
    });
});