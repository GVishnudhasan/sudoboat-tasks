const users = {};

function signUp(event) {
  event.preventDefault();

  const username = document.getElementById('signupUsername').value;
  const password = document.getElementById('signupPassword').value;

  if (users.hasOwnProperty(username)) {
    alert('Username already exists! Please choose a different username.');
    return;
  }

  users[username] = password;

  alert('Signup successful! Please login.');
  document.getElementById('signupForm').reset();
}

function login(event) {
  event.preventDefault();

  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  if (users.hasOwnProperty(username) && users[username] === password) {
    alert('Login successful!');
    document.getElementById('loginForm').reset();
  } else {
    alert('Invalid username or password. Please try again.');
  }
}

function toggleForm(event) {
  const signupForm = document.getElementById('signup');
  const loginForm = document.getElementById('login');

  if (event.target.id === 'toggleLogin') {
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
  } else if (event.target.id === 'toggleSignup') {
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
  }
}

document.getElementById('signupForm').addEventListener('submit', signUp);
document.getElementById('loginForm').addEventListener('submit', login);

document.getElementById('toggleLogin').addEventListener('click', toggleForm);
document.getElementById('toggleSignup').addEventListener('click', toggleForm);
