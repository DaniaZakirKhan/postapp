document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For demo purposes, we'll use a simple check. In a real application, you'd verify this on the server side.
    // if (username === ' username' && password === 'password') {

    loginForm.reset()
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Account created successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
        window.location.href = 'post.html';


    
    // }else {
    //     document.getElementById('error').textContent = 'Invalid username or password.';
    // }
});


// document.getElementById('postButton').addEventListener('click', function() {
//     const place = document.getElementById('place').value.trim();
//     const postDisplay = document.getElementById('postDisplay');

//     if (place === '') {
//         alert('The post area is empty. Please write something.');
//     } else {
//         postDisplay.innerHTML = `<p>${place}</p>`;
//         document.getElementById('place').value = ''; // Clear the textarea
//     }
// });


// const container=document.querySelector(".container")
// privacy=container.querySelector(".privacy")
// arrowBack=container.querySelector(".arrow-back");

// privacy.addEventListener("click" ,()  =>{
//   container.classList.add("active");

//   arrowBack.addEventListener("click" , () =>{
//     container.classList.remove("active");
//   })
// })


const container = document.querySelector(".container"),
privacy = container.querySelector(".post .privacy"),
arrowBack = container.querySelector(".audience .arrow-back");
privacy.addEventListener("click", () => {
  container.classList.add("active");
});
arrowBack.addEventListener("click", () => {
  container.classList.remove("active");
});



