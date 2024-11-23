// Listen for form submission
document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Correct syntax to prevent page refresh

    // Retrieve form values (optional example of further steps)
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const excerpt = document.getElementById('excerpt').value;
    const link = document.getElementById('link').value;

    // Log the values to the console
    console.log('Post Submitted:', { title, date, excerpt, link });
});