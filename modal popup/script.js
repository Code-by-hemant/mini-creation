// Select all buttons inside the .btns container
let btns = document.querySelectorAll('.btns button');

// Loop through each button
btns.forEach((btn) => {
    // Add click event listener to each button
    btn.addEventListener('click', () => {
        // Hide the modal container
     
        // If the clicked button has the 'accept-btn' class
        if (btn.classList.contains('accept-btn')) {
            // Add thumbs up icon class
            document.querySelector('.fa-regular').classList.add('fa-thumbs-up');
               document.querySelector('.modal-container').classList.add('hidden');
        }  if (btn.classList.contains('reject-btn')) {
            // Add thumbs down icon class
            document.querySelector('.fa-regular').classList.add('fa-thumbs-down');
               document.querySelector('.modal-container').classList.add('hidden');
        }
    });
});

