function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector(".target")
}

function deepestChild() {
  var x = document.getElementById("grand-node")
  console.log(x);
  return x

}

function increaseRankBy(n) {
  var l = document.getElementsByClassName("ranked-list")
  for (var j = 0; j < l.length; j++) {
    for (var k = 0; k < k.length; k++) {
      l[j][k].innerHTML = parseInt(l[j][k]) + n
    }
  }

}
