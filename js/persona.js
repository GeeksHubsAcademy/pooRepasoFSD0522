
//Descripción de la clase Persona

class Persona {

    constructor(nombre,edad,dni,genero,caracter,fechaNacimiento,skillsJs){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.genero = genero;
        this.caracter = caracter;
        this.fechaNacimiento = fechaNacimiento;
        this.skillsJs = skillsJs;

        this.sueño = true;
        this.hambre = true;
        this.dinero = 10000;
        this.motivacion = 1000;

    };

    dormir(){

        if(this.sueño == true){
            this.sueño == false;
            this.motivacion += 100;
        };

    };

    despertar(){

        
        this.sueño = false;
        
    }

    programar(){

        if(this.sueño != true){
            this.skillsJs = this.skillsJs + 100; 
        }else{
            console.log("Vete a dormir");
        }

    };

};

//Instanciar

let persona1 = new Persona("Oscar",24,"12345678A","M","Tranquilo","04/08/1997",2000);
let persona2 = new Persona("Jose Carlos",28,"12345678B","M","Alegre","07/02/1994",2100);
let persona3 = new Persona("Alica",47,"87654321C","F","Curiosa","22/08/1974",2200);
let persona4 = new Persona("Alejandro",36,"12345678F","M","Contrario","30/07/1986",1900);

//Diccionario de JS

let allplayers = {
    "1": persona1,
    "2": persona2,
    "3": persona3,
    "4": persona4
}
