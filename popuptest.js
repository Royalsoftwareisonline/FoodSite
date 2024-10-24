 // Get references to DOM elements
 const openPopup = document.querySelectorAll(".items > *");
 const popupWindow = document.getElementById('popupWindow');
 const overlay = document.getElementById('overlay');
 const closePopup = document.getElementById('closePopup');

 // Function to open the pop-up and create the iframe
 CuredMeats.addEventListener('click', function() {
     // Create iframe dynamically
     const iframe = document.createElement('iframe');
     iframe.src = 'https://example.com'; // Change this URL as needed
     iframe.width = '100%';
     iframe.height = '90%';
     iframe.style.border = 'none';

     // Clear any existing content in the popup window (if needed)
     popupWindow.innerHTML = '<span id="closePopup">&times;</span>';

     // Append the iframe to the pop-up window
     popupWindow.appendChild(iframe);

     // Show the pop-up and overlay
     overlay.style.display = 'block';
     popupWindow.style.display = 'block';

     // Add event listener to close button
     document.getElementById('closePopup').addEventListener('click', closePopupWindow);
 });

 // Function to close the pop-up window
 function closePopupWindow() {
     popupWindow.style.display = 'none';
     overlay.style.display = 'none';
 }

 // Also close the popup if the overlay is clicked
 overlay.addEventListener('click', closePopupWindow);