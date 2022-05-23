
let player1 = "";
let player2 = "";
let player3 = "";
let player4 = "";

let turnoSeleccion = 1;

const selecciona = (seleccionado) => {

    
    switch(turnoSeleccion) {
        case 1:
            player1 = allplayers[seleccionado];
        break;

        case 2:
            player2 = allplayers[seleccionado];
        break;

        case 3:
            player3 = allplayers[seleccionado];
        break;

        case 4:
            player4 = allplayers[seleccionado];
        break;

        default:
            console.log("Ya están todos seleccionados....");
        break;
    }
    

    turnoSeleccion++;

    if(turnoSeleccion == 5){
        console.log("ya están los 4 seleccionados..");

        console.log(player1);
        console.log(player2);
        console.log(player3);
        console.log(player4);

        player1.despertar();

     

        player1.programar();
       

        console.log("Ahora Alicia...tiene estos skills de JS", player1.skillsJs);
        console.log(player2.nombre,player2.skillsJs);
    }
    
    

};