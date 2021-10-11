function yes(){
    alert("<3")
}
function no(){
    let a= Math.round(Math.random() * window.innerHeight )
    let b= Math.round(Math.random()* window.innerWidth)
    document.getElementById("no").style.left= a+ "px"
    document.getElementById("no").style.top= b+ "px"
}