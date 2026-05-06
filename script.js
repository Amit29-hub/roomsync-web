function showMessage() {
    alert("Welcome to RoomSync! Start exploring compatible roommates.");
}


function loginMessage() {
    alert("Login feature is in progress. This form currently demonstrates front-end validation.");
    return false;
}



function registerMessage() {
    alert("Profile form submitted! This demo shows front-end form validation.");
    return false;
}



function filterRoommates() {

    let input = document.getElementById("searchInput");

    let filter = input.value.toLowerCase();

    let cards = document.getElementsByClassName("roommate-card");

    for (let i = 0; i < cards.length; i++) {

        let text = cards[i].innerText.toLowerCase();

        if (text.includes(filter)) {

            cards[i].style.display = "";

        } else {

            cards[i].style.display = "none";
        }
    }
}
