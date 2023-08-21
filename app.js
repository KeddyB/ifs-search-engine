
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

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

if(SpeechRecognition){
   console.log("support")
   const inputBox = document.querySelector(".input-box")
   inputBox.insertAdjacentHTML("beforeend",'<a class="mic"><i class="bx bx-microphone"></i></a>')
   const micBtn = inputBox.querySelector(".mic")
   const micIcon = micBtn.querySelector(".bx")

   const recognition = new SpeechRecognition()
   // recognition.continuous = true
   
   micBtn.addEventListener("click", micBtnClick)
   function micBtnClick(){
      if(micIcon.classList.contains("bx-microphone")){//speech recognition
         recognition.start()
      }else{//stop speech recognition
         recognition.stop()
      }
      recognition.addEventListener("start", startSpeechRecognition);
      function startSpeechRecognition(){
         micIcon.classList.remove("bx-microphone")
         micIcon.classList.add("bx-microphone-off")
         console.log("speech active")
      }
      recognition.addEventListener("end", endSpeechRecognition);
      function endSpeechRecognition(){
         micIcon.classList.remove("bx-microphone-off")
         micIcon.classList.add("bx-microphone")
         console.log("speech inactive")
      }
      recognition.addEventListener("result", resultSpeechRecognition);
      function resultSpeechRecognition(e){
         console.log(e)
         const transcript = e.results[0][0].transcript;
         text.value = transcript
      }
   }
}else{
   console.log("Your browser does not support speech recognition")
}