//console.log("Hello world");

document.querySelector('#updateDate').textContent = document.lastModified;

const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

