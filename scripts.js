const express = require('express');
const cors = require('cors'); // Import the cors package
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Initialize Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// Use CORS middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Route to handle form submissions
app.post('/submit-contact', async (req, res) => {
    const { name, email, message } = req.body;

    const { data, error } = await supabase
        .from('contacts')
        .insert([{ name, email, message }]);

    if (error) {
        return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ data });
});

app.post('/submit-review', async (req, res) => {
    const { name, review, rating } = req.body;

    const { data, error } = await supabase
        .from('reviews')
        .insert([{ name, review, rating }]);

    if (error) {
        return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ data });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
import axios from 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';

axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

