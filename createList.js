var dairy = [];
var produce = [];
var general = [];
var deli = [];
var frozen = [];

function showList(){
  week = document.getElementById('week').value;
  switch(week){
    case "Week 1":
        document.getElementById('show').className = "hidden";
        document.getElementById('list1').className = "show";
        week1List();
        printList("Week 1");
        break;
    case "Week 2":
        document.getElementById('show').className = "hidden";
        document.getElementById('list1').className = "show";
        week2List();
        printList("Week 2");
        break;
    case "Week 3":
        document.getElementById('show').className = "hidden";
        document.getElementById('list1').className = "show";
        week3List();
        printList("Week 3");
        break;
    case "Week 4":
        document.getElementById('show').className = "hidden";
        document.getElementById('list1').className = "show";
        week4List();
        printList("Week 4");
        break;
    case "Week 5":
        document.getElementById('show').className = "hidden";
        document.getElementById('list1').className = "show";
        week5List();
        printList("Week 5");
        break;
    case "Week 6":
        document.getElementById('show').className = "hidden";
        document.getElementById('list1').className = "show";
        week6List();
        printList("Week 6");
        break;

    }
}

function printList(x){
  var inner = "<center><h1>" + x + " Shopping List</h1></center><p><h2>Produce</h2><ul>";
  for (i = 0; i < produce.length; i++){
    inner = inner + "<li>" + produce[i] + "</li>";
  }
  inner = inner + "</ul></p><p><h2>General</h2><ul>";
  for (i = 0; i < general.length; i++){
    inner = inner + "<li>" + general[i] + "</li>";
  }
  inner = inner + "</ul></p><p><h2>Frozen</h2><ul>";
  for (i = 0; i < frozen.length; i++){
    inner = inner + "<li>" + frozen[i] + "</li>";
  }
  inner = inner + "</ul></p><p><h2>Dairy</h2><ul>";
  for (i = 0; i < dairy.length; i++){
    inner = inner + "<li>" + dairy[i] + "</li>";
  }
  inner = inner + "</ul></p><p><h2>Deli</h2><ul>";
  for (i = 0; i < deli.length; i++){
    inner = inner + "<li>" + deli[i] + "</li>";
  }
  inner = inner + "</ul></p>";
  document.getElementById('list1').innerHTML = inner;
}

function week1List(){

}

function week2List(){

}

function week3List(){

}

function week4List(){

}

function week5List(){

}

function week6List(){

}

function myFunction(element) {
  /* Get the text field */
  var temp = ("<input>");
  ("body").append(temp);
  temp.val((element).text()).select();
  document.execCommand("copy");
  temp.remove();
}
