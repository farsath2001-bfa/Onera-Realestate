const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { email, password } = req.body;

  console.log('--- LOGIN DEBUG ---');
  console.log('Received email:', JSON.stringify(email));
  console.log('Expected email:', JSON.stringify(process.env.ADMIN_EMAIL));
  console.log('Emails match:', email === process.env.ADMIN_EMAIL);
  console.log('Hash exists:', !!process.env.ADMIN_PASSWORD_HASH);
  console.log('Hash length:', process.env.ADMIN_PASSWORD_HASH?.length);

  if (email !== process.env.ADMIN_EMAIL) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);
  console.log('Password match:', isMatch);

  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.json({ token });
};

module.exports = { login };