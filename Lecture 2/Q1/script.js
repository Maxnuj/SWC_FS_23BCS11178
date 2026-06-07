const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        // Remove active class from all tabs
        tabs.forEach(item => {
            item.classList.remove("active");
        });

        // Hide all content sections
        contents.forEach(content => {
            content.classList.remove("active");
        });

        // Activate clicked tab
        tab.classList.add("active");

        // Show corresponding content
        const targetId = tab.getAttribute("data-tab");
        document.getElementById(targetId).classList.add("active");
    });
});
