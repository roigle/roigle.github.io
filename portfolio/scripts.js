document.addEventListener('DOMContentLoaded', () => {
    
    // Get the "go-up" button:
    let upbutton = document.getElementById("go-up");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            upbutton.style.display = "block";
        } else {
            upbutton.style.display = "none";
        }
    };

    // When the user clicks on the button, scroll to the top of the document
    upbutton.onclick = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
    
}); 