var textArea = document.querySelector('.myText');
var button = document.querySelector('.myButton')
var doit = document.querySelector('#MyChoice')



button.addEventListener('click', () => {
  if (textArea.value.length > 0) {
    var node = document.createElement('li');
    var t = document.createTextNode(textArea.value.substr(0, 2).toUpperCase() + ' ' + textArea.value.substr(2).toLowerCase());
    node.appendChild(t);
    document.getElementById("myList").appendChild(node);
    textArea.value = '';
  } else {
    alert('Please enter registration_number or KINDLY CLOSE THE PRGRAM😂😂😂😂😂😂');
  }
});

doit.addEventListener('change', (e) => {

var Plist = document.querySelectorAll('li');
    //  document.getElementById("myDropdown").classList.toggle("show");
    //  var v = document.getElementsBy("#MyChoice").value;
    //  document.getElementById('ul');
    for (var i = 0; i < Plist.length; i++) {
if(e.target.value === "default"){
  Plist[i].style.display = "block";
}
else if (Plist[i].innerHTML.startsWith(e.target.value)) {
  Plist[i].style.display = 'block';
}
else {
  Plist[i].style.display = 'none';
}
}
});











    //} else if (ul.children[i].innerHTML.startsWith('CY')) {
    //  ul.children[i].style.display = "block";
    //} else if (ul.children[i].innerHTML.startsWith('CJ')) {
      //ul.children[i].style.display = "block";
    //} else if (ul.children[i].innerHTML.startsWith('CK')) {
      //ul.children[i].style.display = "block";
    //} else {
      //ul.children[i].style.display = "block";
    //}
