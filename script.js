const links = document.querySelectorAll(".navbar-1 a");
const slider = document.querySelector(".navbar-1 .slider");

links.forEach(link => {

    link.addEventListener("mouseenter", () => {

        slider.style.width = link.offsetWidth + 40 + "px";

        slider.style.left =
        (link.offsetLeft - 20) + "px";
    });

});

const tabs = document.querySelectorAll(".navbar-1 a");
const pages = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

    tab.addEventListener("click", function(e){

        e.preventDefault();

        pages.forEach(page => {
            page.classList.remove("active");
        });
        tabs.forEach(item => item.classList.remove("active"));

        const pageId = this.dataset.tab;

        document
        .getElementById(pageId)
        .classList.add("active");

        this.classList.add("active");

    });

});

const firstTab = document.querySelector(".navbar-1 a[data-tab='page1']");
if (firstTab) {
    firstTab.classList.add("active");
}

document
.getElementById("page1")
.classList.add("active");