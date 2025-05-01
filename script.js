function generatePassword(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }
  // comment
  document.getElementById('generateBtn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('lengthInput').value, 10);
    if (!length || length <= 0) {
      alert('Please enter a valid password length.');
      return;
    }
    const pwd = generatePassword(length);
    document.getElementById('passwordDisplay').textContent = pwd;
  });
  