//console.log("Hello world");

var updateDate = document.lastModified;
document.querySelector('#updateDate').textContent = updateDate;

const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

