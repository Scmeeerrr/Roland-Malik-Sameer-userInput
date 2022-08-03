// Sameer Roland Malik
// variable assignments
let submitButton = document.getElementById('submit_button');
let formContainer = document.querySelector(".form_container")

// title and title input
let title = document.getElementById("main_title"); 
let titleInput = document.getElementById("title_input");

// noun input
let nounInput = document.getElementById("noun");

// verb input
let verbInput = document.getElementById("verb");

// adj input
let adjInput = document.getElementById("adjective");
let storyResult = document.getElementById("story_result")

// whenever user types, title updates itself on the top of the screen
titleInput.onkeyup = function(){
    title.innerHTML = titleInput.value; // title text = user text
}

submitButton.onclick = function(event) {
    event.preventDefault(); // makes sure page does not refresh

    if (verbInput.value == "" || nounInput.value=="" || adjInput=="" || titleInput==""){
        alert("Input text into all fields before submitting!");
    }
    
    else {
    formContainer.style.display = "none"; // hides form when submitting

    // our attempt at fading the container out
    // formContainer.addEventListener("click", () => (formContainer.style.opacity = "0"));
    // formContainer.addEventListener("transitionend", () => formContainer.remove());

    storyResult.innerHTML = "Last night I ate a " + nounInput.value + 
    ", and today I just had to " + verbInput.value + ". What a " + adjInput.value + " day!";
    
    storyResult.style.fontSize="30px";
    }
}

