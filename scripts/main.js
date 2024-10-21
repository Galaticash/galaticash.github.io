/* Removes all items with the class 'dev' */
var devItems = document.querySelectorAll(".dev");
//console.log(devItems);
for (i = 0; i < devItems.length; i++)
{
    //console.log(devItems[i]);
    // would be easier to do this in CSS haha...
    // but I can comment this out easier so eh
    devItems[i].remove()
}

document.querySelector('#updateDate').textContent = document.lastModified;

const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

/*// when the page is loaded
window.addEventListener('load', () => {
    const devButton = document.querySelector("#dev");

    // add the items back to the page, could do a css class thing, is there a way to add css things like display: none in the .js or can you only add classes?
    devButton.addEventListener('click', () => {
       
    }, false);

    //window.onresize = () => {if(window.innerWidth > 760) mainnav.classList.remove('responsive')};
});*/