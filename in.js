const notes=[{
    title:"my next trip",
    body:"I would like to go to spain"
},{
    title:"Habbiits to work on",
    body:"Exercising, Eating a bit better"
}, {
    title:"Office notification",
    body:"Get a new seat"
}]

document.querySelector("#create").addEventListener("click", function(e){
    e.target.textContent="This button was clicked"
})

document.querySelector("#remove").addEventListener("click", function(e){
   DocumentFragment.querySelectorAll(".note").forEach(function(note){
       note.remove()
   })
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    console.log(e);
})