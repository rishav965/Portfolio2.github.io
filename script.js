//  toggle icon bar

// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
// menuIcon.classList.toggle('bx-x');
// navbar.classList.toggle('active');


// };


  


// let sections = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec=>{

//         let top =window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id= sec.getAttribute ('id');
        
//         if (top >=offset &&  top < offset + height) {

//             navlinks.forEach(links=> {
//                 navlinks.classList.remove('active');

//                 document.querySelector('header nav a[href*='+id + ']').classList.add('active'); 

//             });

//         };

    // });


    // sticky navbar

//     let header= document.querySelector('header');
//     header.classList.toggle ('sticky', window.scrollY>100);

// };

// remove toggle icon and navbar when click navbar link 


// menuIcon.classList.remove('bx-x');
// navbar.classList.remove('active');

// document.getElementById('contact').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent form submission

//     // Get user input values
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Now you have the user's data (name, email, message)
//     // You can proceed to store it or process it further.
// });
// document.getElementById('contact').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent form submission

//     // Get user input values
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Create a CSV string
//     const csvData = `${name},${email},${message}\n`;

//     // Now you can use this csvData to save it to a file or send it to a server.
//     // For simplicity, let's open a new window with the CSV data:
//     window.open(`data:text/csv;charset=utf-8,${encodeURIComponent(csvData)}`);
// });

// document.getElementById('contactForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent form submission

//     // Get user input values
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Create a CSV string
//     const csvData = `${name},${email},${message}\n`;

//     // Now you can use this csvData to save it to a file or send it to a server.
//     // For simplicity, let's open a new window with the CSV data:
//     window.open(`data:text/csv;charset=utf-8,${encodeURIComponent(csvData)}`);
// });




var typed = new Typed(".multiple-text", {
    strings: ["Tech Enthusiast", "Tech Enthusiast", "Front-End Developer", "Python Coder"],
    typeSpeed: 100,
    backSpeed: 100, 
    backdelay: 1000, 
    loop: true
})
