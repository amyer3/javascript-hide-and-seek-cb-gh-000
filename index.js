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
  for (var j = 0; i < l.length; i++) {
    for (var k = 0; i < k.length; i++) {
      l[j][k].innerHTML += n
    }
  }

}
