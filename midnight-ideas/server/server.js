const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const nodemailer = require('nodemailer');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/midnight-ideas';
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const emailTo = process.env.EMAIL_TO;
const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

app.use(cors());
app.use(bodyParser.json());

let db;

MongoClient.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB');
    db = client.db();
  })
  .catch(error => console.error(error));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message, token } = req.body;

  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${token}`;

  const response = await fetch(verificationURL, { method: 'POST' });
  const data = await response.json();

  if (!data.success || data.score < 0.5) {
    return res.status(400).json({ message: 'reCAPTCHA verification failed' });
  }

  if (!db) {
    res.status(500).json({ message: 'Database not connected' });
    return;
  }

  try {
    const collection = db.collection('messages');
    await collection.insertOne({ name, email, message, createdAt: new Date() });

    const mailOptions = {
      from: emailUser,
      to: emailTo,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Message sent!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending message' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
