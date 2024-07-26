const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received contact form submission:', { name, email, message });
  res.json({ success: true, message: 'Contact form submitted successfully.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// // Create Express app
// const app = express();
// const PORT = process.env.PORT || 5001;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection string
// const dbURI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.log(err));

// // Define a schema and model for Contact
// const ContactSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   message: {
//     type: String,
//     required: true
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
// });

// const Contact = mongoose.model('Contact', ContactSchema);

// // API route to handle contact form submission
// app.post('/api/contact', (req, res) => {
//   const { name, email, message } = req.body;

//   const newContact = new Contact({
//     name,
//     email,
//     message
//   });

//   newContact.save()
//     .then(contact => {
//       console.log('Received contact form submission:', contact);
//       res.json({ success: true, message: 'Contact form submitted successfully.' });
//     })
//     .catch(err => {
//       console.error('Error saving contact form submission:', err);
//       res.status(500).json({ success: false, message: 'Failed to submit contact form.' });
//     });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
