const etchASketchContainer = document.querySelector("#container");
const resetButtoon = document.querySelector(".reset")
const documentBody = document.querySelector("body")
const popupLeftSideInput = document.querySelector("#leftsideInput")
const popuptopSideInput = document.querySelector("#topsideInput")
const popup = document.querySelector(".popup")
const popupSubmit = document.querySelector('.popupSubmit')
const popupHolder = document.querySelector(".PopupHolder")

resetButtoon.addEventListener("click", () => {popupHolder.style.display = "flex"})
popupSubmit.addEventListener("click", popupvaule)


let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
let side1 = 16;
let side2 = 16


function popupvaule(event) {
event.stopPropagation()
side1 = popupLeftSideInput.value    
side2 = popuptopSideInput.value
etchASketchContainer.innerHTML = ""
for (let i = 0; i < side1 ; i++) {
const innerEtchASketchdiv = document.createElement("div")
etchASketchContainer.appendChild(innerEtchASketchdiv)
innerEtchASketchdiv.style.border = "2px solid black"
innerEtchASketchdiv.style.height = 
innerEtchASketchdiv.style.width = "100%"
innerEtchASketchdiv.style.flex = `1 1 0`
innerEtchASketchdiv.style.display = "flex" 
for (let j = 0; j < side2 ; j++) {
    const innerinnerdiv = document.createElement("div")
    innerEtchASketchdiv.appendChild(innerinnerdiv)
    innerinnerdiv.style.border = "2px solid black"
    innerinnerdiv.style.flex = "1"
    innerinnerdiv.style.height = "100%"
}
etchASketchContainer.addEventListener("mousemove", (e) => {if (e.target !== "innerinnerdiv") {
e.target.style.backgroundColor = "black";
etchASketchContainer.style.backgroundColor = "white"
innerEtchASketchdiv.style.backgroundColor = "white"    
} else { 
e.target.style.backgroundColor = "white";
etchASketchContainer.style.backgroundColor = "white"
innerEtchASketchdiv.style.backgroundColor = "white"    
} }

)}

popupHolder.style.display = "none"

}

for (let i = 0; i < side1 ; i++) {
const innerEtchASketchdiv = document.createElement("div")
etchASketchContainer.appendChild(innerEtchASketchdiv)
innerEtchASketchdiv.style.border = "2px solid black"
innerEtchASketchdiv.style.height = 
innerEtchASketchdiv.style.width = "100%"
innerEtchASketchdiv.style.flex = `1 1 0`
innerEtchASketchdiv.style.display = "flex" 
for (let j = 0; j < side2 ; j++) {
    const innerinnerdiv = document.createElement("div")
    innerEtchASketchdiv.appendChild(innerinnerdiv)
    innerinnerdiv.style.border = "2px solid black"
    innerinnerdiv.style.flex = "1"
    innerinnerdiv.style.height = "100%"
}
etchASketchContainer.addEventListener("mousemove", (e) => {if (e.target !== "innerinnerdiv") {
randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
e.target.style.backgroundColor = randomColor;
etchASketchContainer.style.backgroundColor = "white"
innerEtchASketchdiv.style.backgroundColor = "white"    
} else { 
e.target.style.backgroundColor = "white";
etchASketchContainer.style.backgroundColor = "white"
innerEtchASketchdiv.style.backgroundColor = "white"    
} }

)}


