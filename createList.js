var list;

function init(){
  var queryString = decodeURIComponent(window.location.search);
  queryString = queryString.substring(1);
  var queries = queryString.split("=");
  document.getElementById('list1').innerHTML = "week is: " + queries[1];
;
  createList(queries[1])

}

function createList(week){
  switch(week){
    case "week1":
        document.getElementById('list1').innerHTML = "week is: " + week;
        document.getElementById('title1').innerHTML = "Week 1 Shopping List"
        break;
    case "week2":
        document.getElementById('list1').innerHTML = "week is: " + week;
        document.getElementById('title1').innerHTML = "Week 2 Shopping List"
        break;
    case "week3":
        document.getElementById('list1').innerHTML = "week is: " + week;
        document.getElementById('title1').innerHTML = "Week 3 Shopping List"
        break;
    case "week4":
        document.getElementById('list1').innerHTML = "week is: " + week;
        document.getElementById('title1').innerHTML = "Week 4 Shopping List"
        break;
    case "week5":
        document.getElementById('list1').innerHTML = "week is: " + week;
        document.getElementById('title1').innerHTML = "Week 5 Shopping List"
        break;
    case "week6":
        document.getElementById('list1').innerHTML = "week is: " + week;
        document.getElementById('title1').innerHTML = "Week 6 Shopping List"
        break;

    }
}
