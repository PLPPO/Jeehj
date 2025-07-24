const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/midnight-ideas';

app.use(cors());
app.use(bodyParser.json());

let db;

MongoClient.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB');
    db = client.db();
  })
  .catch(error => console.error(error));

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!db) {
    res.status(500).json({ message: 'Database not connected' });
    return;
  }

  try {
    const collection = db.collection('messages');
    await collection.insertOne({ name, email, message, createdAt: new Date() });
    res.status(200).json({ message: 'Message saved!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving message' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
