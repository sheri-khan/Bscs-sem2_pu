document.addEventListener('DOMContentLoaded', () => {
    // Array of updates/messages
    const updates = [
        "---------Checkout English complete syllabus notes in english section------",
        
        
        "--------- Check out islamiyat new notes for paper preparation ---------- ."
    
    ];

    // Get the modal
    const modal = document.getElementById("updates-modal");
    
    // Get the button that opens the modal
    const btn = document.getElementById("updates-button");
    
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
        displayUpdates();  // Populate updates when the modal is shown
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Function to display updates inside the modal
    function displayUpdates() {
        const updatesContent = document.getElementById('updates-content');
        updatesContent.innerHTML = ''; // Clear previous updates

        updates.forEach(update => {
            const updateElement = document.createElement('p');
            updateElement.textContent = update;
            updatesContent.appendChild(updateElement);
        });
    }
});
