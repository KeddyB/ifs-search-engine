let text = document.querySelector(".text")
let btn = document.querySelector(".btn")

btn.onclick = function(){
   let url = 'https://www.google.com/search?q='+text.value
   window.open(url)
}
function searchQuery(){
   let url = 'https://www.google.com/search?q='+text.value
   window.open(url)
}

window.addEventListener("keydown", (e)=>{
  if(e.key == 'Enter' && text.value != ""){
      searchQuery()
  }
})