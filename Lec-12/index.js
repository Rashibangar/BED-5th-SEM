let box=document.querySelector("#box");
let btn = document.querySelector("#btn")
let colours=["red","black","green","pink","purple","brown","orange","blue","yellow","grey"]
let id = null;
function generateRandomColour(){
let index=Math.floor(Math.random()*10);
console.log(index);

let randomcolour= colours[index];
console.log(randomcolour);
box.computedStyleMap.background = randomcolour
}
btn.addEventListener("click",function(){
    setInterval(()=>{
        generateRandomColour();
    },500)
})
stop.addEventListener("click",function(){
    if(id){
        clearInterval(id)
    }
})
//generateRandomColour();