"use strict";

const listEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${listEl.length}`);

const ulEl = document.querySelectorAll('#categories>li');
console.log(ulEl);

 ulEl.forEach(a => {

  console.log(
    `Category: ${a.firstElementChild.textContent}, 
    Elements: ${a.lastElementChild.children.length}`,
  );
});
