'use strict';
const strawberry = document.getElementById('berry');
console.log(strawberry);
console.log(`I found the berry: ${strawberry.innerHTML}`);
strawberry.style.backgroundColor = "red";

const orange = document.querySelector('[data-foodtype=squishy]');
console.log(orange);
console.log(`I found the fruit: ${orange.innerHTML}`);
orange.style.backgroundColor = "orange";

console.log('Using the for loop here');
const collection = document.getElementsByTagName('li');
console.log(collection);
for (let i = 0; i<collection.length; i++){
    console.log(collection[i].innerHTML);
    collection[i].style.width = "100px";
    if(collection[i].innerHTML === 'Pear'){
        collection[i].style.backgroundColor = "green";
    }
}
document.getElementsByTagName('ul')[0].style.listStyleType = "none";

const nodeList = document.querySelectorAll('li');
console.log(nodeList);

console.log('Using for each here');
nodeList.forEach(li => {
   console.log(li.innerHTML);
   li.style.border = "solid 1px";
   //li.width = "50px";
});

