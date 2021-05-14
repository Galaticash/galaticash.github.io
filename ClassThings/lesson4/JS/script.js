// When the window loads
window.addEventListener('load', () => {
    const hambutton = document.querySelector(".ham");
    const mainnav = document.querySelector("#navigation");

    // 'click' name of event, () => {} function
    // Adds/Removes the class 'responsive' to the mainnav's classList
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('responsive')
    }, false);

    //window.onresize = () => {if(window.innerWidth > 760) mainnav.classList.remove('responsive')};
});