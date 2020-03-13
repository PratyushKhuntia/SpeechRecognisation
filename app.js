//call window object speech recognition...
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();  // we constructing SpeechRecognition().


var p=document.createElement("p");//creating new html  element through js
var words=document.getElementById('words');
words.appendChild(p);
console.log(words);

recognition.addEventListener("result",(e)=>{      //results comming from SpeechRecognition objects.  e means event. it is just a parameter.it can be anything.
        // console.log(e.results);
        var transcript=[...e.results].map(result => result[0]).map(result=> result.transcript).join("");
        // console.log(transcript);
        
        // p.innerHTML=transcript;

        if(e.results[0].isFinal){
            p=document.createElement("p");
            words.appendChild(p);
            p.innerHTML=transcript;
        }
}) // this is dom method to listing events.

recognition.addEventListener('end',recognition.start);
recognition.start(); // start()starting SpeechRecognition