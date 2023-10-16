document.addEventListener("DOMContentLoaded", function() {
    // Get all accordions in the page
    var accordions = document.querySelectorAll(".accordion");

    accordions.forEach(function(accordion) {
        // For each accordion, get all header buttons
        var buttons = accordion.querySelectorAll(".card-header button.panel-title");
        
        buttons.forEach(function(button) {
            button.addEventListener("click", function() {
                // Get the current card's panel body
                var currentCardBody = button.closest(".card").querySelector(".panel-body");
                
                // Toggle the current card's panel body based on max-height
                if (currentCardBody.style.maxHeight && currentCardBody.style.maxHeight !== '0px') {
                    currentCardBody.style.maxHeight = '0';
                } else {
                    currentCardBody.style.maxHeight = '5000px';  // Large value to ensure content is shown; adjust if necessary
                }

                // Hide other card's panel bodies
                var otherCardBodies = accordion.querySelectorAll(".card .panel-body");
                otherCardBodies.forEach(function(cardBody) {
                    if (cardBody !== currentCardBody) {
                        cardBody.style.maxHeight = '0';
                    }
                });
            });
        });
    });
});
