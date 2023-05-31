// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('#login-form').addEventListener('submit', function(event) {
//       event.preventDefault();
      
//       var username = document.querySelector('#username').value;
//       var password = document.querySelector('#password').value;
      
//       fetch('users.json')
//         .then(response => response.json())
//         .then(users => {
//           var user = users.find(u => u.username === username && u.password === password);
          
//           if (user) {
//             // Redirect to another page on successful login
//             window.location.href = 'dashboard.html'; // Replace 'dashboard.html' with your desired page
//           } else {
//             alert('Invalid username or password!');
//           }
//         })
//         .catch(error => console.error('Error:', error));
//     });
//   });
  