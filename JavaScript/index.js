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

}