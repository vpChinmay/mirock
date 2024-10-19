alert("Hello! This is your pet rock ")

function touchRock ()  {
    var userName = prompt ("Wht is your name?",
                           "Enter your name here.");
    if (userName)  {
        alert ("It's good to meet you, " + userName + ".");
        document.getElementById ("rockImg").src = "rock_happy.png";
    }
}   