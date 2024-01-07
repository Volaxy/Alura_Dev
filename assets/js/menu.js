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


window.addEventListener("resize", () => {
    if(document.body.clientWidth < 1024) {
        setTopOfMenu();
    } else {
        $grayScreen.classList.remove("gray-screen");

        $searchButton.setAttribute("src", "assets/images/icons/search.svg");
        $searchButton.classList.remove("header__search-button--active");
        $searchButton.removeAttribute("search-opened");
        
        $headerMenu.classList.remove("header__menu--active");
        
        $menuButton.setAttribute("src", "assets/images/icons/menu.svg");
        $menuButton.removeAttribute("menu-opened");


        $elementsToHide.forEach($elementToHide => $elementToHide.classList.remove("display-none"));
        $elementsToShow.forEach($elementToShow => $elementToShow.classList.remove("display-initial"));
    }
});

window.addEventListener("click", event => {
    if($menuButton.hasAttribute("menu-opened")) {
        if(!event.composedPath().includes($header)) {
            $grayScreen.classList.remove("gray-screen");

            $headerMenu.classList.remove("header__menu--active");
            
            $menuButton.setAttribute("src", "assets/images/icons/menu.svg");
            $menuButton.removeAttribute("menu-opened");
        }
    }
});