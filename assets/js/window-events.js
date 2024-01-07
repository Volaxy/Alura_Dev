window.addEventListener("resize", () => {
    // Menu Logic
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