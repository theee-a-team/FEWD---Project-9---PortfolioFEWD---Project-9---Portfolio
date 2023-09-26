// Bootstrap popovers for software and skills icons

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

// Form submission function, posts to inbox

const form = document.getElementById("form");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("https://getform.io/f/8692c670-c3ea-492f-9e41-b0f5946130ff", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
        },
    })
    .then(response => {
        if (!response.ok) {
            document.getElementById("formAlertDiv").innerHTML = `<div class="alert alert-danger m-2" role="alert">Oops! An error occurred. Refresh the page and try again.</div>`;
            throw new Error(`An error occurred: ${response.statusText}`);   
        } else {
            document.getElementById("formAlertDiv").innerHTML = `<div class="alert alert-success m-2" role="alert">Thank you! Expect a response very soon.</div>`;
        }
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
}

// Easter egg function, changes profile image

const egg = document.getElementById('egg');
const profilePic = document.getElementById('profile-picture');

egg.addEventListener('click', () => {
    profilePic.src = 'img/rickroll.jpg';
});

// Reverses easter egg function on click profile pic

profilePic.addEventListener('click', () =>{
    profilePic.src = 'img/profile-pic.jpeg';
});