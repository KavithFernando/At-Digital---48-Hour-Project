//making sure the document body is loaded before the javascript
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}

function ready() {

    // Getting all the faq-title elements---------------------------------------
    const faqTitles = document.querySelectorAll('.faq-title');

    // Adding click event listeners to each faq-title---------------------------
    faqTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            
            let answerId = this.getAttribute('id').replace('q', 'a');
            let showButtonId = this.getAttribute('id').replace('q', 'showButton');
            let answer = document.getElementById(answerId);
            let showButton = document.getElementById(showButtonId);
            
            // Switching display between 'none' and 'initial'
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'initial';
                showButton.textContent = '-';
                title.style.color = '#6B3CC9';
            } else {
                answer.style.display = 'none';
                showButton.textContent = '+';
                title.style.color = 'black';
            }
        });
    });
    //--------------------------------------------------------------------------

    // Opening and closing the Hamburger Menu-----------------------------------
    const showMenuButton = document.getElementById("menu-icon");
    const closeMenuButton = document.getElementById("menu-close-icon");
    const hamburgerMenu = document.getElementById("list-container");

    showMenuButton.addEventListener('click', function() {
        // Showing hamburger menu when show button is clicked
        hamburgerMenu.style.display = 'flex';
    })

    closeMenuButton.addEventListener('click', function() {
        // Closing hamburger menu when close button is clicked
        hamburgerMenu.style.display = 'none';
        window.addEventListener('resize', function() {
            const screenWidth = window.innerWidth;
    
            if(screenWidth >= 768) {
                // Showing normal menu when screen width >= 786
                hamburgerMenu.style.display = 'initial';
            } else {
                // Closing normal menu when screen width < 768
                hamburgerMenu.style.display = 'none';
            }
        })
    });
    //--------------------------------------------------------------------------

}