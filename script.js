const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")

document.addEventListener("keydown", function(e){
    jump()
})

function jump(){
  if(  dino.classList !="jump"){
    dino.classList.add("jump")
  }
  setTimeout(function(){
    dino.classList.remove("jump")
  },300)
}