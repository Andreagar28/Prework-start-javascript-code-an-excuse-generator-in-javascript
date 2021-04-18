// document.getElementById("button").addEventListener("click", generarExcusa());
window.onload = function () { generarExcusa(); }
    
    
    let generarExcusa =() => {
    var excusa = "";
    
    // excusas...
    let a = ["Mi", "El"];
    let b = ["Perro", "Auto", "Jardinero", "Guitarra", "Iguana"];
    let c = ["se comio", "vendio"];
    let d = ["mi tarea", "mi telefono", "mi novio", "mi comida" ];
    let e = ["esta mañana.", "esta tarde.", "recien.", "hace un rato."];
    // indice
    let aInd = Math.floor(Math.random() * a.length);
    let bInd = Math.floor(Math.random() * b.length);
    let cInd = Math.floor(Math.random() * c.length);
    let dInd = Math.floor(Math.random() * d.length);
    let eInd = Math.floor(Math.random() * e.length);
    var excusa = a[aInd] + ' ' + b[bInd] + ' ' + c[cInd] + ' ' + d[dInd] + ' ' + e[eInd];

    return document.querySelector('#excusa').innerHTML = excusa;
}
