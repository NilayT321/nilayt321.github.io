var accordions = document.getElementsByClassName("accordion-menu-title");

for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        // Toggle open accordion 
        this.classList.toggle("open-accordion");

        // Get the content of the accordion, which is the next element in the HTML 
        var content = this.nextElementSibling;

        // Toggle the content panel's open class. The open class is used when the panel is open.
        content.classList.toggle("open");

        // If the content is open, display a rightward pointing arrow (Unicode 0x25B6) before the title 
        // Else, display a downward pointing arrow (Unicode 0x25BC).
        var arrowElement = this.querySelector(".accordion-title-arrow");
        if (content.classList.contains("open")) {
            // Open menu; display downward arrow 
            arrowElement.innerText = "\u25BC";
        } else {
            // Closed menu; display rightward arrow 
            arrowElement.innerText = "\u25B6";
        }
    });
}
