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

// const tl = gsap.timeline({ defaults: { ease: "power2.easeInOut" } })
const pageAnimation = () => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } })

    tl.fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 0.5, stagger: 0.20, delay: 0.25 })
    tl.fromTo(".intro", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 })

}
pageAnimation()
