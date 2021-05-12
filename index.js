// document.getElementById("button").addEventListener("click", generarExcusa());
window.onload = function () {
    generateExcuse();
};

let generateExcuse = () => {
    var excuse = '';

    // excusas...
    let pronoun = ['Mi', 'El'];
    let noun = ['Perro', 'Auto', 'Jardinero', 'Guitarra', 'Iguana'];
    let action = ['se comio', 'vendio'];
    let possession = ['mi tarea', 'mi telefono', 'mi novio', 'mi comida'];
    let time = ['esta mañana.', 'esta tarde.', 'recien.', 'hace un rato.'];
    // indice
    let pronounIndex = Math.floor(Math.random() * pronoun.length);
    let nounIndex = Math.floor(Math.random() * noun.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let possessionIndex = Math.floor(Math.random() * possession.length);
    let timeIndex = Math.floor(Math.random() * time.length);
    excuse = pronoun[pronounIndex]
        .concat(' ', noun[nounIndex])
        .concat(' ', action[actionIndex])
        .concat(' ', possession[possessionIndex])
        .concat(' ', time[timeIndex]);

    return (document.querySelector('#excusa').innerHTML = excuse);
};
