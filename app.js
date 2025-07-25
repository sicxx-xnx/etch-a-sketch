const etchASketchContainer = document.querySelector("#container")
let side = 100

for (let i = 0; i < (16); i++) {
const innerEtchASketchdiv = document.createElement("div")
etchASketchContainer.appendChild(innerEtchASketchdiv)
innerEtchASketchdiv.style.border = "2px solid black"
innerEtchASketchdiv.style.height = 
innerEtchASketchdiv.style.width = "100%"
innerEtchASketchdiv.style.flex = `1 1 0`
innerEtchASketchdiv.style.display = "flex" 
for (let j = 0; j < 16; j++) {
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


