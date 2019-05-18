//ASSIGN ALL ELEMENTS
const demold = document.getElementById('demo');
const demoClass = document.getElementsByClassName('demo');
const demoTag = document.getElementsByTagName('article');
const demoQuery = document.querySelector('#demo-query');
const demoQueryAll = document.querySelectorAll('.demo-query-all');
//CHANGE BORDER OF ID demo TO PURPLE
demold.style.border = '1px solid purple';
//CHANGE BORDER OF CLASS demo TO ORANGE
for(let i=0 ;i<demoClass.length;i++){
	demoClass[i].style.border = '1px solid orange';
}
//CHANGE BORDER OF TAG demo TO BLUE
for (let i =0;i < demoTag.length; i++){
	demoTag[i].style.border = '1px solid blue';
	}
//CHANGE BORDER OF ID demo-query TO RED
demoQuery.style.border = '1px solid red';
//CHANGE BORDER OF demoQueryAll TO GREEN
for (let index = 0; index < demoQueryAll.length; index++) {
	demoQueryAll[index].style.border = '1px solid green';
}