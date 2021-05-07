/* Removes all items with the class 'dev' */
var devItems = document.querySelectorAll(".dev");
//console.log(devItems);
for (i = 0; i < devItems.length; i++)
{
    //console.log(devItems[i]);
    devItems[i].remove()
}

document.querySelector('#updateDate').textContent = document.lastModified;

const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();