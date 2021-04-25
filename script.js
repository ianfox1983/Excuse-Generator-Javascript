const who = ['El perro','Mi abuela','Mi tortuga','Mi canario', 'Mi gato'];
const action = [' se comió',' se meo', ' aplastó',' rompió',' robó'];
const what =[' mi tarea', ' mis llaves', ' el coche'];
const when = [' antes de clases',' justo a tiempo', ' cuando terminé',' mientras almorzaba',' mientras rezaba'];


function excuseGenerator(who, action, what, when){
    numWho = Math.floor(Math.random() * who.length);
    numAction = Math.floor(Math.random() * action.length);
    numWhat = Math.floor(Math.random() * what.length);
    numWhen = Math.floor(Math.random() * when.length);
    
    return who[numWho].concat(action[numAction], what[numWhat], when[numWhen]);
}
function onLoad(){
    excuse.innerHTML = excuseGenerator(who, action, what, when); // asigna el dato a div="excuse"
}
window.onload = function(){
document.querySelector("#changeExcuse").addEventListener("click", event =>{
    onLoad();
});
}
