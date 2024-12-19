// script.js

// Initialize EmailJS
emailjs.init('bfAjV2kCaICKQXsrG'); // Replace with your actual EmailJS public key

// Handle feedback form submission
document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    emailjs.send('service_kix818g', 'template_vre3rus', {
        from_name: name,
        from_email: email,
        message: feedback,
    }).then(() => {
        alert('Feedback sent successfully!');
        document.getElementById('feedbackForm').reset(); // Clear the form
    }).catch((error) => {
        console.error('Failed to send feedback:', error);
        alert('Failed to send feedback. Please try again later.');
    });
});

// Toggle terms content
function toggleContent(section, button) {
    const content = document.getElementById(section);
    if (content.style.display === "block") {
        content.style.display = "none";
        button.textContent = "Read More";
    } else {
        content.style.display = "block";
        button.textContent = "Read Less";
    }
}
