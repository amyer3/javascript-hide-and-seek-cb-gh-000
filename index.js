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
  var l = document.getElementsByTagName(".ranked-list")
  for (var i = 0; i < l.children.length; i++) {
    for (var i = 0; i < k.children.length; i++) {
      l[i][k].innerHTML += n
    }
  }

}
