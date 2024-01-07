const $searchButton = document.querySelector("[data-element-id='search-button']");
const $elementsToHide = document.querySelectorAll("[data-hidde-on-search]");
const $elementsToShow = document.querySelectorAll("[data-show-on-search]");

$searchButton.addEventListener("click", () => {
    if($searchButton.hasAttribute("search-opened")) {
        $searchButton.setAttribute("src", "assets/images/icons/search.svg");
    } else {
        $searchButton.setAttribute("src", "assets/images/icons/close.svg");
    }
    
    $searchButton.classList.toggle("header__search-button--active");
    $searchButton.toggleAttribute("search-opened");

    $elementsToHide.forEach($elementToHide => $elementToHide.classList.toggle("display-none"));

    $elementsToShow.forEach($elementToShow => $elementToShow.classList.toggle("display-initial"));
});


const $header = document.querySelector("[data-element-id='header']");
const $headerMenu = document.querySelector("[data-element-id='header-menu']");
const $menuButton = document.querySelector("[data-element-id='menu-button']");
const $grayScreen = document.querySelector("[data-element-id='gray-screen']");

$menuButton.addEventListener("click", () => {
    if($menuButton.hasAttribute("menu-opened")) {
        $menuButton.setAttribute("src", "assets/images/icons/menu.svg");
    } else {
        $menuButton.setAttribute("src", "assets/images/icons/close.svg");
    }

    $menuButton.toggleAttribute("menu-opened");

    $grayScreen.classList.toggle("gray-screen");

    $headerMenu.classList.toggle("header__menu--active");
});

function setTopOfMenu() {
    const y = $header.getBoundingClientRect().y;
    const height = $header.getBoundingClientRect().height;

    $headerMenu.style.top = `${y + height + 24}px`;
}
setTopOfMenu();