console.log("Hare krsna");
let bagItems;
onLoad();

function onLoad(){
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) :[];
    displayItemsOnHomePage();
    displayBagIcon();
}



function addToBag(itemId){

 bagItems.push(itemId);
 localStorage.setItem('bagItems',JSON.stringify(bagItems));
 console.log('added thanks');
 displayBagIcon();
}



function displayBagIcon(){


let bagItemsCountElement = document.querySelector('.bag-item-count');
 

  if(bagItems.length>0)
    {
    bagItemsCountElement.style.visibility='visible';
    bagItemsCountElement.innerText = bagItems.length;
  }
  else{
    bagItemsCountElement.style.visibility='hidden';
  }
}





function displayItemsOnHomePage(){
let itemsContainerElement = document.querySelector('.items_container');
if (!itemsContainerElement){
  return;
} 
let innerHTML='';
  items.forEach(item =>{
   innerHTML += 
   
`<div class="items_container">
<div class="items">

<img class="item1" src=${item.image} alt="A2 milk image">
<h1 class="item-name">${item.name}</h1>
<button class="add-to-bag" onclick="addToBag(${item.id});">Add to Bag</button>

</div>`;
});
itemsContainerElement.innerHTML= innerHTML;



}