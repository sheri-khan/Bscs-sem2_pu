// Import the Supabase JavaScript client from CDN
const supabaseUrl = 'https://jbtnkaqzfknnyczrldtd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpidG5rYXF6ZmtubnljenJsZHRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5MzA0NzAsImV4cCI6MjA0MDUwNjQ3MH0.A-emTwQ5qWSZyjYcGXi2aZxMOlAp1rYVPmAD6UrNogY';

// Load the Supabase script and wait for it to load
function loadSupabaseScript() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@supabase/supabase-js@1.33.0/dist/supabase-js.umd.js';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// Create a Supabase client instance
loadSupabaseScript().then(() => {
  const { createClient } = window.supabase;
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Contact Us form submission handler
  document.getElementById('contact-form').addEventListener('submit', async (e) => {
    // ...
  });

  // Review form submission handler
  document.getElementById('review-form').addEventListener('submit', async (e) => {
    // ...
  });
}).catch((error) => {
  console.error('Error loading Supabase script:', error);
});