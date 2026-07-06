// NOTE: This JS file is for the page: Credits page.

// AOS
    if (typeof AOS !== "undefined") {
        AOS.init({
            once: true,
            offset: 100,
            duration: 800
        });
    }

// 

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".credit-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            button.classList.toggle("active");

            const content = button.nextElementSibling;

            if(content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }

        });

    });

});