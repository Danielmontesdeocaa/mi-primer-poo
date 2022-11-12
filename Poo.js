/*
 Programacion Orientada a Objetos (POO)

 Paradigma = Manera en la que se puede hacer algo especifico.
 Paradigma de programacion : Forma o manera en la que puedo programar algo.


 Otras formas de programar:
 Programacion funcional
 Programacion imperativa
 Programcion declarativa


 Pilares fundamentales de la programacion POO
    - Polimorfismo
    - Herencia
    - Encapsulamiento
    - Abstraccion
*/

//Propiedades = variables o constantes
const color = "Gris";
var tamanio = "Chiquito";
var edad = 5;
var cicatrices = true;
const raza = "Angora";
var caracter = "Agresivo"

//Metodos o funciones
function comer(){}
function treparArboles(){}
function maullar(){}
function grunir(){}
function dormir(){}
function corretearPerros(){}

//Precursor de los objetos Array
var gato = ['Cilantro', 'Agresivo', 5, 'Angora', true, 'Chiquito'];
console.log(typeof(gato));


//Evolucion de los arreglos
var Cilantro = {
    nombre: "Cilantro",
    edad: 5,
    caracter : "Agresivo",
    raza : "Angora",
}

var Perejil= {
    nombre: "Perejil",
    edad: 10,
    caracter : "Feliz",
    raza : "Siames",
}

var Cebollita= {
    nombre: "Cebollita",
    edad: 1,
    caracter : "Timida",
    raza : "Esfinge",
}

var Limon= {
    nombre: "Limon",
    edad: 2,
    caracter : "Agrio",
    raza : "Egipcio",
}


console.log(typeof(Cilantro));
console.log("El nombre de Cilantro es", Cilantro.nombre);
console.log("El caracter de Cilantro es",Cilantro.caracter);

/*
 clases gato agilizar este proceso (plantillas)
 */

 // 1. definir mi clase con la palabra reservada class
class gatitos{
    //2. definir mis propiedades o atributos como variables
    // para despues ponerle valores

    nombre = "";
    edad = ""; 
    raza = ""; 
    caracter = "";

    //3. agregar constructores 
    // necesito construir con los atributos que yo defini en la clase
    constructor(nombre, edad, raza, caracter){// funcion
        //especial para construir donde necesito esos parametros 
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.caracter = caracter;
    }

    



    // 4. definir los metodos que seran definidos como funciones
    // o acciones

    maullar(){
        console.log('miau');
    }
    dormir(){
        console.log('zzzz');
    }
    ronronear(){
        console.log('grrrrr');
    }
}

//  Para empezar a crear o intanciar objetos (gatos), vamos
// utilizqr la palabra reservada new 

var Gardfield = new gatitos("Gardfield", 5, "Naranja", "Dormilon");
var DonGato = new gatitos('DonGato', 4, 'Egipcio', "cariñoso");
var Peluchina = new gatitos("Peluchina", 7, "rusa", "gruñona");
var Gordo = new gatitos("Gordo", 4, "Egipcio", "Dormilomn");
var Pelusa = new gatitos("Pelusa", 1, "Ruso", "Corajudo");
console.log(Gardfield);
Gardfield.ronronear();
DonGato.dormir();
Peluchina.maullar();
Gordo.maullar();
Pelusa.ronronear();

///////////// Json (JavaScript Object Notation)

// Es un formato estandar (que ya alguien lo definio tiene ciertas reglas)
// que esta basado en texto y nos sirve para representar datos estructurados
// basado en la sintaxis 

var Cebollita= {
    nombre: "Cebollita",
    edad: 1,
    caracter: "Timida",
    raza: "Esfinge",
}

console.log(Cebollita);
console.log(typeof(Cebollita));


//Objeto en JSON


var CebollitaJSON = {
    "nombre": "Cebollita",
    "edad": 1,
    "caracter": "Timida",
    "raza": "Esfinge",
}
console.log(typeof(CebollitaJSON));
console.log(typeof(CebollitaJSON));

const objetoDeserealizado = {"nombre": "Cebollita", "edad": 5};
const objetoSerealizado = `{"nombre": "Cebollita", "edad": 5};`

console.log(typeof(objetoDeserealizado));
console.log(typeof(objeto))


var Perejil= {
    nombre: "Perejil",
    edad: 10,
    caracter: "Felix",
    raza: "Siames"
}

// JSON.stringify (objeto a string para que el servidor lo lea)
const PerejilSerializado = JSON.stringify(Perejil);

// JSON.parse (string a un objeto JSON)
const PerejilDeserealizado = JSON.stringify(Perejil);

console.log("Este es un Perejil como objeto", 
PerejilSerializado);
console.log("Este es perejil como cadena", PerejilDeserealizado);