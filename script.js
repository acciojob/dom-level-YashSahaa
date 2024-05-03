//your JS code here. If required.
let chi = document.getElementById("level")

let level = 0

while(chi.parentNode){
	level++
	chi=chi.parentNode
}
alert("The level of the element is: "+level)