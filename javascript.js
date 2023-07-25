let valueDisplay = document. querySelectorAll(".count");
let interval=4000;
valueDisplay.forEach((valueDisplay)=>{
   let startValue=0;
   let endValue = parseInt(valueDisplay.getAttribute("data-val"));
   let duration = Math.floor(interval / endValue)
   let counter = setInterval(function(){
    startValue+=1;
    valueDisplay.textContent = startValue;
    if(startValue==endValue){
      clearInterval(counter)
    }
   },duration);
});


mybutton = document.getElementById("myBtn");
window.onscroll = function(){scrollFunction()}
function scrollFunction(){
  if(document.body.scrollTop >20|| document.documentElement.scrollTop >20){
    mybutton.style.display= "block";
  }else{
    mybutton.style.display="none";
  }
}

function topFunction(){
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}
const form = document.querySelector("form")
form.addEventListener('submit', e=>{
  if(!form.checkValidity()){
    e.preventDefault()
  }
  form.classList.add('was-validated')
})
