// Import the Supabase JavaScript client from CDN
const supabaseUrl = 'https://jbtnkaqzfknnyczrldtd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpidG5rYXF6ZmtubnljenJsZHRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5MzA0NzAsImV4cCI6MjA0MDUwNjQ3MH0.A-emTwQ5qWSZyjYcGXi2aZxMOlAp1rYVPmAD6UrNogY';

// Create a Supabase client instance
const { createClient } = window.supabase;
const supabase = createClient(supabaseUrl, supabaseKey);

// Contact Us form submission handler
document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  try {
    const { data, error } = await supabase
      .from('inquries')
      .insert([{ name, email, message }]);

    if (error) {
      alert('Error submitting contact form: ' + error.message);
    } else {
      alert('Contact submission successful!');
    }
  } catch (error) {
    alert('Unexpected error: ' + error.message);
  }
});

// Review form submission handler
document.getElementById('review-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const review = document.getElementById('review').value;
  const rating = document.getElementById('rating').value;

  try {
    const { data, error } = await supabase
      .from('reviews')
      .insert([{ name, review, rating }]);

    if (error) {
      alert('Error submitting review: ' + error.message);
    } else {
      alert('Review submission successful!');
    }
  } catch (error) {
    alert('Unexpected error: ' + error.message);
  }
});
