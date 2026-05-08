function showMessage() {
    window.location.href = "register.html";
}

function registerUser() {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("newUsername").value;
    let password = document.getElementById("newPassword").value;

    if (name === "" || email === "" || username === "" || password === "") {
        alert("Please complete all fields.");
        return false;
    }

    localStorage.setItem("roomSyncName", name);
    localStorage.setItem("roomSyncEmail", email);
    localStorage.setItem("roomSyncUsername", username);
    localStorage.setItem("roomSyncPassword", password);
    localStorage.setItem("roomSyncLoggedIn", "true");

    alert("Account created successfully! Please complete your roommate quiz.");
    window.location.href = "dashboard.html";

    return false;
}

    localStorage.setItem("roomSyncName", name);
    localStorage.setItem("roomSyncEmail", email);
    localStorage.setItem("roomSyncUsername", username);
    localStorage.setItem("roomSyncPassword", password);
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

    let savedUsername = localStorage.getItem("roomSyncUsername");

    let savedPassword = localStorage.getItem("roomSyncPassword");

    if (username === savedUsername && password === savedPassword) {

        localStorage.setItem("roomSyncLoggedIn", "true");

        alert("Login successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Incorrect username or password.");
    }

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

    if (name === "" || cleanliness === "" || schedule === "" || guests === "") {
        alert("Please complete all quiz questions.");
        return false;
    }

    localStorage.setItem("quizName", name);
    localStorage.setItem("quizCleanliness", cleanliness);
    localStorage.setItem("quizSchedule", schedule);
    localStorage.setItem("quizGuests", guests);
    localStorage.setItem("quizCompleted", "true");

    showQuizResult();

    alert("Your roommate preferences have been saved!");

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




function updateHomePage() {
    let loggedIn = localStorage.getItem("roomSyncLoggedIn");
    let name = localStorage.getItem("roomSyncName");

    if (loggedIn === "true") {
        document.getElementById("homeContent").innerHTML =
            "<h1>Welcome back, " + name + "!</h1>" +
            "<p>Your RoomSync profile is active. You can now explore matches, view notifications, and continue your compatibility quiz.</p>" +
            "<div class='home-actions'>" +
                "<button onclick=\"window.location.href='search.html'\">Search Roommates</button>" +
                "<button onclick=\"window.location.href='dashboard.html'\">Go to Dashboard</button>" +
            "</div>";

        document.getElementById("memberSection").style.display = "block";
    }
}



function showDemoMessage() {
    alert("Demo message area: In a future version, users could chat with matched roommates here.");
}



function saveMatch(name) {

    let savedMatches = document.getElementById("savedMatches");

    savedMatches.innerHTML +=

        "<div class='saved-card'>" +

            "<h3>" + name + "</h3>" +

            "<p>Added to your saved roommate matches.</p>" +

        "</div>";

    alert(name + " added to saved matches!");
}



function openProfile(name, details) {
    document.getElementById("modalName").innerText = name;
    document.getElementById("modalDetails").innerText = details;
    document.getElementById("profileModal").style.display = "flex";
}

function closeProfile() {
    document.getElementById("profileModal").style.display = "none";
}



function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("roomSyncDarkMode", "on");
    } else {
        localStorage.setItem("roomSyncDarkMode", "off");
    }
}

if (localStorage.getItem("roomSyncDarkMode") === "on") {
    document.body.classList.add("dark-mode");
}



let currentChatName = "";

function openChat(name) {
    currentChatName = name;

    document.getElementById("chatName").innerText = name;
    document.getElementById("chatInitial").innerText = name.charAt(0);

    document.getElementById("firstMessage").innerText =
        "Hey! This is " + name + ". I saw we had a strong roommate match.";

    document.getElementById("typingIndicator").style.display = "none";

    document.getElementById("chatModal").style.display = "flex";
}

function closeChat() {
    document.getElementById("chatModal").style.display = "none";
}

function sendMessage() {
    let input = document.getElementById("messageInput");
    let chatBox = document.getElementById("chatBox");
    let typingIndicator = document.getElementById("typingIndicator");

    let message = input.value.trim();

    if (message === "") {
        return;
    }

    chatBox.innerHTML +=
        "<div class='message sent'>" +
            message +
        "</div>";

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(function() {
        typingIndicator.style.display = "block";
        chatBox.appendChild(typingIndicator);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    setTimeout(function() {
        typingIndicator.style.display = "none";

        chatBox.innerHTML +=
            "<div class='message received'>" +
                currentChatName + ": Sounds good! I would love to talk more about housing preferences." +
            "</div>";

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1600);
}


window.onload = function () {

    if (localStorage.getItem("roomSyncDarkMode") === "on") {

        document.body.classList.add("dark-mode");
    }
};



function loadQuizData() {
    let savedName = localStorage.getItem("quizName");
    let savedCleanliness = localStorage.getItem("quizCleanliness");
    let savedSchedule = localStorage.getItem("quizSchedule");
    let savedGuests = localStorage.getItem("quizGuests");

    if (savedName) {
        document.getElementById("quizName").value = savedName;
    }

    if (savedCleanliness) {
        document.getElementById("quizCleanliness").value = savedCleanliness;
    }

    if (savedSchedule) {
        document.getElementById("quizSchedule").value = savedSchedule;
    }

    if (savedGuests) {
        document.getElementById("quizGuests").value = savedGuests;
    }

    if (localStorage.getItem("quizCompleted") === "true") {
        showQuizResult();
    }
}

function showQuizResult() {
    let name = localStorage.getItem("quizName");
    let cleanliness = localStorage.getItem("quizCleanliness");
    let schedule = localStorage.getItem("quizSchedule");
    let guests = localStorage.getItem("quizGuests");

    document.getElementById("quizResult").innerHTML =
        "<h3>Your Saved Roommate Profile</h3>" +
        "<p><strong>Name:</strong> " + name + "</p>" +
        "<p><strong>Cleanliness:</strong> " + cleanliness + "</p>" +
        "<p><strong>Schedule:</strong> " + schedule + "</p>" +
        "<p><strong>Guests:</strong> " + guests + "</p>" +
        "<p class='match-percent'>Quiz Completed</p>";
}
