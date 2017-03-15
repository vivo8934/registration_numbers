var textArea = document.querySelector('.myText');
var button = document.querySelector('.myButton')
var Cbtn = document.querySelector('.Button')



button.addEventListener('click', () => {
  if(textArea.value.length > 0){
  var node = document.createElement('li');
  var t = document.createTextNode(textArea.value.substr(0, 2).toUpperCase() + ' ' + textArea.value.substr(2).toLowerCase());
  node.appendChild(t);
  document.getElementById("myList").appendChild(node);
}
else{
  alert('Please enter registration_number or KINDLY CLOSE THE PRGRAM😂😂😂😂😂😂');
}
});
Cbtn.addEventListener('click', () =>{
  textArea.value = '';})
