function showMessage() {
    window.location.href = "register.html";
}

function registerUser() {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let budget = document.getElementById("budget").value;
    let cleanliness = document.getElementById("cleanliness").value;
    let schedule = document.getElementById("schedule").value;
    let username = document.getElementById("newUsername").value;
    let password = document.getElementById("newPassword").value;

    if (name === "" || email === "" || budget === "" || cleanliness === "" || schedule === "") {
        alert("Please complete all fields.");
        return false;
    }

    localStorage.setItem("roomSyncName", name);
    localStorage.setItem("roomSyncEmail", email);
    localStorage.setItem("roomSyncBudget", budget);
    localStorage.setItem("roomSyncCleanliness", cleanliness);
    localStorage.setItem("roomSyncSchedule", schedule);
    localStorage.setItem("roomSyncLoggedIn", "true");

    alert("Account created successfully! You will now go to your dashboard.");
    window.location.href = "dashboard.html";

    return false;
}

function loginUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter your login information.");
        return false;
    }

    localStorage.setItem("roomSyncLoggedIn", "true");

    alert("Login successful! Welcome back to RoomSync.");
    window.location.href = "dashboard.html";

    return false;
}

function checkLogin() {
    let loggedIn = localStorage.getItem("roomSyncLoggedIn");

    if (loggedIn !== "true") {
        alert("Please log in or register before accessing the dashboard.");
        window.location.href = "login.html";
    }
}

function saveQuiz() {
    let name = document.getElementById("quizName").value;
    let cleanliness = document.getElementById("quizCleanliness").value;
    let schedule = document.getElementById("quizSchedule").value;
    let guests = document.getElementById("quizGuests").value;

    localStorage.setItem("quizName", name);
    localStorage.setItem("quizCleanliness", cleanliness);
    localStorage.setItem("quizSchedule", schedule);
    localStorage.setItem("quizGuests", guests);

    document.getElementById("quizResult").innerHTML =
        "<h3>Preferences Saved!</h3>" +
        "<p><strong>Name:</strong> " + name + "</p>" +
        "<p><strong>Cleanliness:</strong> " + cleanliness + "</p>" +
        "<p><strong>Schedule:</strong> " + schedule + "</p>" +
        "<p><strong>Guests:</strong> " + guests + "</p>";

    return false;
}

function logoutUser() {
    localStorage.setItem("roomSyncLoggedIn", "false");
    alert("You have been logged out.");
    window.location.href = "index.html";
}

function filterRoommates() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toLowerCase();
    let cards = document.getElementsByClassName("roommate-card");

    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].innerText.toLowerCase();

        let keywords = cards[i].getAttribute("data-keywords").toLowerCase();

        if (text.includes(filter) || keywords.includes(filter)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
