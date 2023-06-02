// /*
// * unknown
// * never
// * arrays
// * tuplas
// * enums
// *
// * TIPOS INFERIDOS
// */

// import { log } from "console"
// import { type } from "os"

// let extincionDinosaurios = 76_000_000
// let dinosaurioFavorito = "T-Rex"
// let isExtinto = true

// function chanchitoFeliz(config:any) {
//     return config
// }

// /* ARRAY */
// let animales:string[] = ['chanchito', 'feliz', 'felipe']
// let nums: number[] = [1, 2, 3]
// let checks: boolean[] = []
// let noms2: Array<number> = []

// /* el autocopletado sugiere métodos del tipo de dato */
// // animales.map(x => x.charAt)
// // nums.map(x => x.toExponential)


// /* TUPLAS =>  nos permite agregar datos que solo estan declarados */

// let tupla: [number, string[]] = [1, ['chanchito feliz', 'chanchito felipe']]

// //no lansa error
// tupla.push(12)


// /* ENUMS */

// const chica ='s'
// const mediana = 'm'
// const grande = 'l'
// const extraGrande = 'xl'

// //PascalCase
// enum Talla {chica = 's', mediana= 'm', grande='l', extraGrande='xl'}

// const variableOne = Talla.grande

// console.log(variableOne)


// const enum LoadingState{Idle, Loading, Success, Error}

// const estado = LoadingState.Success

// /** OBJETOS */

// type Direccion = {
//     numero: number,
//     calle: string,
//     pais: string
// }

// type Persona = {
//     readonly id: number, //solo lectura
//     nombre?: string,//opcional
//     talla: Talla,
//     direccion: Direccion
// }

// const objeto: Persona = {
//     id: 1,
//     nombre: '',
//     talla: Talla.chica,
//     direccion: {
//         numero: 7362,
//         calle: 'bella vita',
//         pais: 'Ecuador',
//     }
// }

// objeto.nombre = 'Hola Mundo'

// //objeto.id = 42 //SOLOLECTURA no es reinscribible

// //arreglo que contendra datos con el typo de dato persona creado anteriormente
// const arr: Persona[] = []

// /** Funciones */

// //declarar funcion 
// function fn1() {}

// // otra forma de declarar
// const fn: () => number = () => {
//     let x =  2
//     if (x > 5) {
//         return 7
//     } else {
//         return 4
//     }
// }


// const func: (a:number) => string = (edad: number) => {
//     if (edad > 17)
//         return 'puedes ingresar'
//     return 'no puedes pasar'
// }

// function validaEdad(edad: number, msg: string = 'Chanchito feliz'): string {
//     if (edad > 17)
//         return `puedes ingresar ${msg}`
//     return 'no puedes pasar'
// }

// validaEdad(18)

// /** NEVER */

// //seutiliza solo en funciones de errores (excepciones)
// function ErrorUsuario (): never {
//     throw new Error('error de usuario')
// }

// /** UNION TYPE */

// let puntaje: number | string = 98

// puntaje = 'hola mundo'

// type Animal = {
//     id: number,
//     estado: string,
// }

// type Usuario = {
//     id: number,
//     name:  string,
// }

// let animal: Usuario | Animal = {id:1, estado:'', name: ''}

// function sumaDos(n: number|string): number {
//     if (typeof n === 'number') {
//         return n+2
//     }
//     return parseInt(n) + 2
// }

// sumaDos('2')

// console.log('suma de 2+2', '2' + 2)


// /** INTERSECTION TYPE */

// let chanchito: number | string = 'feliz'

// type Audit = {
//     created_at: string,
//     modified_at: string,
// }

// type Product = {
//     name: string,
//     description: string,
// }

// const product: Audit & Product = {
//     created_at: '',
//     modified_at: '',
//     name: '',
//     description: '',
// }

// /** LITERAL TYPES */

// const nDeFibo: 0 | 1 | 2 | 3 | 5 = 3

// type Fibo = 0 | 1 | 2 | 3 | 5

// const fibo = 5

// /** NULLABLE TYPES */

// function toNumber(s: string | null | undefined) {
//     if (!s) {
//         return 0
//     }
//     return parseInt(s)
// }

// const c = toNumber(null)
// const n = toNumber(undefined)

// /** OPTIONAL CHAINING */

// function getUser(id: number) {
//     if (id < 0) {
//         return null
//     }
//     return {
//         id: 1,
//         nombre: 'felipe',
//         created_at : new Date(),
//     }
// }

// const user = getUser(-1)

// //console.log(user.created_at) error 
// //solucion vieja
// if (user && user.created_at) {
//     console.log(user.created_at)    
// }
// //solucion Nueva
// console.log('Usuario', user?.created_at)

// const userTwo = getUser(10)

// console.log('UsuarioTwo', userTwo?.created_at)


// //con arreglos

// const arrOne = null
// arrOne?.[0]
// console.log('arreglo', arrOne?.[0])

// // con funciones

// const fn5:any = null
// fn5?.()
// console.log('funcion', fn5?.())

// /** NULLISH COALESCING OPERATOR */

// //const difficulty: number | null = null
// const difficulty: number | null = 0

// const userthree = {
//     username: 'fercho',
//     //difficulty: difficulty || 1 no valida el 0
//     difficulty: difficulty ?? 1 // NULLISH COALESCING OPERATOR para validar el 0
// }

// console.log(userthree)

// /** TYPE ASSERTING */

// const elemento: any = null

// // costante elementoOne va hacer igual del typo elemento
// const elementoOne = elemento

// // type asserting como typo number obligatorio
// const elementoTwo = elemento as number

// //ejemplo 
// // comento por error => const input = document.getElementById('username') as HTMLInputElement
// //type assertion es peligroso y se puede forasr a tener otro typo dando que me muestre tipos que no son del tipo de esa constante.
// // comento por error =>input.onchange
// // Otra forma de hacer type assertion
// // comento por error => const inputoNE = <HTMLInputElement> document.getElementById('username')
// // comento por error =>input.value


// /** TYPE NARROWING */

// function Lala(x: string | number) {
//     //type narrowing
//     if (typeof x === 'number') {
//         //metodos por el tipo number
//         x.toExponential
//     }

//     if (typeof x === 'string') {
//         //metodos por el tipo string
//         x.charAt
//     }
// }

// /** TYPE UNKNOWN */

// function procesa(algo: unknown) {
//     if (typeof algo === 'string') {
//         //metodos texto
//     }

//     if (typeof algo === 'number') {
//         //metodos numericos
//     }

//     if (algo instanceof String) {
//         //algo.haceCosas()
//     //algo.otrasCosas()
//     //algo.genkiDama()
//     }
// //si es de typo any te permite sacar cuaqluier metodo de su typo sea numerico o texto
//     //algo.haceCosas()
//     //algo.otrasCosas()
//     //algo.genkiDama()
// }

// /**  PROGRAMACION ORIENTADA A OBJETOS. */

/** clases */

class Personaje {

    profesion?: string
    private static equipo: number = 0

    constructor(
        public readonly id:number,
        public name:string,
        public level:number,
        private _hp:number
    ) {
    }

    upLevel(): number {
        this.level =this.level +1
        return this.level
    }

    static agregatePersonaje(): void {
        Personaje.equipo ++
    }

    changeHp(cantidad: number): number {
        this._hp = this._hp + cantidad
        //no pasarse del maximo
        return this._hp
    }

    // getHp ():number {
    //     return this._hp
    // }

    get hp(): number {
        return this._hp
    }

    set hp(cantidad: number) {
        this._hp = this._hp + cantidad
    }

    static getEquipo(): number {
        return Personaje.equipo
    }
}

const personaje = new Personaje(1, 'Fecho', 1, 100)

Personaje.agregatePersonaje()

personaje.changeHp(-10)

personaje.hp = 20

const personaje2 = new Personaje(2, 'Kevin', 1, 120)

// Personaje.equipo = 1

Personaje.agregatePersonaje()

if (personaje instanceof Personaje) {
    console.log(personaje, personaje2, Personaje.getEquipo())    
}



