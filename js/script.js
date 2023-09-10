(function () {
    'use strict';

    // Array to store available date and time options
    var availableDates = ["2023-09-10", "2023-09-11", "2023-09-12"],
        availableTimes = ["09:00 AM", "10:00 AM", "11:00 AM"];

    // Function to populate date options
    function populateDateOptions() {
        var dateSelect = document.getElementById("date");
        availableDates.forEach(function (date) {
            var option = document.createElement("option");
            option.value = date;
            option.textContent = date;
            dateSelect.appendChild(option);
        });
    }

    // Function to populate time options
    function populateTimeOptions() {
        var timeSelect = document.getElementById("time");
        availableTimes.forEach(function (time) {
            var option = document.createElement("option");
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        });
    }

    // Initialize the form with available options
    populateDateOptions();
    populateTimeOptions();

    // Event listener for form submission
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        var selectedDate = document.getElementById("date").value,
            selectedTime = document.getElementById("time").value;

        // Remove the selected date and time from available options
        availableDates = availableDates.filter(function (date) {
            return date !== selectedDate;
        });
        availableTimes = availableTimes.filter(function (time) {
            return time !== selectedTime;
        });

        // Reset the form (you can handle this part differently)
        this.reset();
    });
})();
