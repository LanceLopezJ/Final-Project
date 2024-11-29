
  const loginForm = document.querySelector('.login-form');
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username   
 = document.getElementById('username').value;
    const password = document.getElementById('password').value;   


    // Replace with your actual credentials
    const correctUsername = 'LanceLopez';
    const correctPassword = '123456789';

    if (username === correctUsername && password === correctPassword) {
      window.location.href = 'LanceHome.html';
    } else {
      alert('Invalid username or password.                                               Username:LanceLopez Password:123456789');
    }
  });
