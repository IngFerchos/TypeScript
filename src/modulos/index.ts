//export por defecto(Group) y name export dentro de las llaves { defaultGroups }
import  Group, { defaultGroups }  from './Group'
//name export
import { Point, PUNTITO } from './Point' 


const point = new Point(1,2)

const group = new Group(1, 'Chanchito feliz')

console.log(PUNTITO)
console.log(defaultGroups)

//Wildcard import
import * as G from './Group'
//Wildcard import y re-export
const gg = new G.default(9, 'chanchito infeliz')
console.log(G.defaultGroups)


import { Chanchitos } from "./Animales/Chanchitos"
import { Caballitos } from "./Animales/Caballitos"
import { Animales } from "./Animales/Animales"

console.log(Animales, Caballitos, Chanchitos)