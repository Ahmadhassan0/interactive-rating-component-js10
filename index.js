const ratings = document.querySelectorAll('.rating__f-box li');
const submitBtn = document.querySelector('.rating__submit__btn');
const rateAgainBtn = document.querySelector('.thanks__rate__again__btn');
const ratingSection = document.querySelector('.rating-container');
const thanksSection = document.querySelector('.thanks-component');
const ratePoint = document.querySelector('.rate'); 

// Add a click event listener to each rating element
ratings.forEach((rating) => {
    rating.addEventListener('click', (e) => {
        // Step 1: Clear any existing selected rating
        removeColor();

        // Step 2: Highlight the clicked rating with the 'orange' class
        rating.classList.add('orange');

        // Step 3: Update the displayed rating value
        ratePoint.innerText = e.currentTarget.innerText;
    });
});

// Add a click event listener to the submit button
submitBtn.addEventListener('click', () => {
    // Check if a rating has been selected (a rating value exists)
    if (ratePoint.innerText) {
        // Step 4: Show the thanks section and hide the rating section
        thanksSection.classList.remove('hidden');
        ratingSection.classList.add('rate-hidden');
    } 
});

// Add a click event listener to the "Rate Again" button
rateAgainBtn.addEventListener('click', () => {
    // Step 5: Hide the thanks section and show the rating section again
    thanksSection.classList.add('hidden');
    ratingSection.classList.remove('rate-hidden');

    // Step 6: Clear any existing selected rating
    removeColor();
});

// Function to clear the 'orange' class from all ratings
function removeColor() {
    ratings.forEach((rating) => {
        rating.classList.remove('orange');
    });
}
