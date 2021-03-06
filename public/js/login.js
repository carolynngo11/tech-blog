const loginFormHandle = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      return document.location.replace('/api/recipes');
    } else {
      return console.error('Incorrect Username or Password!')
    }
  }
};

const signupFormHandle = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      return document.location.replace('/api/recipes');
    } else {
      return console.error('Invalid Username or Password!')
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandle);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandle);
