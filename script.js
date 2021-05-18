const responsiveNavbar = () => {
    const toggleBtn = document.getElementsByClassName("nav-toggle")[0]
    const mainNav = document.getElementsByClassName("main-nav")[0]

    toggleBtn.addEventListener("click", () => {
        mainNav.classList.toggle("active")
        toggleBtn.classList.toggle("toggle")
    })
}
responsiveNavbar()

const splitScroll = () => {
    if (window.innerWidth > 1000) {
        const controller = new ScrollMagic.Controller()
        new ScrollMagic.Scene({
            duration: "160%",
            triggerElement: ".about",
            triggerHook: 0,
        })
            .setPin(".about")
            .addTo(controller)
    }
}
splitScroll()

const tabNavigation = () => {
    const tabNav = document.querySelector(".tab-nav")
    const tabs = document.querySelectorAll(".tab")

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabNav.querySelector(".active").classList.remove("active")
            tab.classList.add("active")
        })
    })
}

// tabNavigation()
