 // Get references to DOM elements
 //const openPopup = document.getElementById('CuredMeats');
 //const openPopup2 = document.getElementById('BakedGoods');
 const popupWindow = document.getElementById('popupWindow');
 const overlay = document.getElementById('overlay');
 const closePopup = document.getElementById('closePopup');
 
     // Clear any existing content in the popup window (if needed)
     popupWindow.innerHTML = '<span id="closePopup">&times;</span>';

     // Append the iframe to the pop-up window
     popupWindow.appendChild(iframe);

     // Show the pop-up and overlay
     overlay.style.display = 'block';
     popupWindow.style.display = 'block';

     // Add event listener to close button
     document.getElementById('closePopup').addEventListener('click', closePopupWindow);
 

 // Function to close the pop-up window
 function closePopupWindow() {
     popupWindow.style.display = 'none';
     overlay.style.display = 'none';
 }

 // Also close the popup if the overlay is clicked
 overlay.addEventListener('click', closePopupWindow);