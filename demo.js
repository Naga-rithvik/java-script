//var items=document.getElementsByClassName("list-group-item");
//items[2].style.backgroundColor='green';
//for(var i=0;i<items.length;i++)
//{
   // items[i].style.fontWeight='bold';
//}
// in get elements by class name all the elements with the same class name are selected irrespective of the same element.
//GETELEMENTSBYTAGNAME this method is also a selector but it gives the elements based on their name but not class
//var items=document.getElementsByTagName("li");
//items[2].style.backgroundColor='green';
//for(var i=0;i<items.length;i++)
//{
   // items[i].style.fontWeight='bold';
//}
//GETELEMENTBYQUERYSELECTOR
//in this method the query selector function is used to select the top most element of the class or id of list of items. this method uses 
//same syntax as that of css.  
//var header=document.querySelector('#main-header');
//header.style.border='solid 5px #ccc';

//var input=document.querySelector('input');
//input.value='Naga rithvik';

//var secondinput=document.querySelector('input[type="submit"]');
//secondinput.value="send";

//var items=document.querySelector('.list-group-item')
//items.style.color="red";
//var seconditem=document.querySelector('.list-group-item:nth-child(2)');
//seconditem.style.backgroundColor='green';

//var thirditem=document.querySelector('.list-group-item:nth-child(3)');
//thirditem.style.visibility='hidden';
//var item=document.querySelectorAll('.list-group-item:nth-child(2)');
//item.style.color='green';
var seconditem = document.querySelectorAll('.list-group-item:nth-child(odd)');
for (var i = 0; i < seconditem.length; i++) {
  seconditem[i].style.backgroundColor = 'green';
}
var Item = document.querySelectorAll('li:nth-child(2)');
Item[0].style.color = 'green';
// here i used the item[0] because even though we mentionedd nthchild 2 query selector all gives us array list of which the first element 
//or 0th index element is required element

