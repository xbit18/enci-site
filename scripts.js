// Function to show the pop-up when the button is clicked
function togglePopup() {
    var popup = document.getElementById('infoPopup');
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
    }
}

// Function to hide the pop-up when the close button is clicked
function closePopup() {
    document.getElementById('infoPopup').style.display = 'none';
}

// Event listener to trigger the showPopup function when the button is clicked
document.getElementById('infoButton').addEventListener('click', togglePopup);