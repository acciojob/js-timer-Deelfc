// write js code here if required
// timer.js

function updateTime() {
    const now = new Date();
    
    // Format date and time components
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Create the formatted date-time string
    const formattedDateTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
    
    // Display the formatted date-time string in the <p> tag
    document.getElementById('date-timer').textContent = formattedDateTime;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display the time immediately when the page loads
updateTime();
