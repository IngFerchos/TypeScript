// function log<S, N>(a:S, b: N): N {
//     console.log(a, b)

import { type } from "os"

//     return b
// }

// log<string, number>('primero', 34)
// log<string, string>('segundo', 'segundo')
// log(1,2)
// log('saludo', 'hola mundo')

async function fetchData<T>(recurso:string): Promise<T> {
    const respuesta = await fetch(`${recurso}`)
    return respuesta.json()
}

type User = {
    id:string,
    name:string,
}

async function main() {
    const user = await fetchData<User>('/usuarios')
    
    // user.id
}

type Computador = {
    encender: () => void,
    apagar: () => void,
}

class Programador<T> {
    computador: T
    constructor(t: T) {
        this.computador = t
    }
}

const programadorOne = new Programador<Computador>({encender: () => {}, apagar: () => {}})
// programadorOne.computador.apagar

const programadorTwo = new Programador<string>('hello')

// programadorTwo.computador.charAt

interface keyValue<T, V> {
    key: T,
    value: V,
}

interface Product{
    id:string
}

function fetchProduct(): keyValue<string, Product> {
    return {
        key:'id de producto',
        value: {id: 'id de producto'}
    }
}

function fetchStock(): keyValue<string, number> {
    return {
        key: 'hello',
        value: 34
    }
}



// interface Usuario {
//     id: number
//     name: string
// }

class Usuario {
    constructor(public id:number, public name:string) {}
}

function print<T extends Usuario>(t:T): T {
    console.log(t)

    return t
}

print({id: 1, name: 'chanchito feliz'})


class Estado<T> {
    protected data:T[] = []

    agregar(t:T): void {
        this.data.push(t)
    }

    getEstado(): T[] {
        return this.data
    }
}

type ObjectId = {
    id:string
}

class EstadoEliminar<T extends ObjectId> extends Estado<T> {
    eliminar(id: string) {
        this.data.filter(x => x.id !== id)
    }
}

/** pasar generico */
/** pasar generico con restricciones */
class EstadoUsuarios extends Estado<Usuario> {
    reiniciarContrasenas() {
        //logica
    }
}

/** pasar generico Fijo */
const esatdoUsuario = new EstadoUsuarios()


/** keyof */
type Calendar = {
    id:number,
    fuente: string,
    dueno: string,
}

const calendar: Calendar = {id:1, fuente: 'Google', dueno: 'el'}

function getProp<T>(objeto: T, property: keyof T): unknown {
    return objeto[property]
}

getProp<Calendar>(calendar, 'id')
getProp<Calendar>(calendar, 'fuente')
// getProp<Calendar>(calendar, 'propiedadT')

/** Utility types */

type Punto = {
    x:number,
    y:number,
    desc?:string,
}

type puntoOpcional = Partial<Punto>

type puntoRequerido = Required<Punto>

/////////////////////////////////////////////////////
const keyValue: Record<string, number> = {
    'soy un string': 42
}

type kv = {[key: string]: number}
////////////////////////////////////////////////////

const p: Omit<Punto, 'desc' | 'y'> = {
    x:1,
    // y:2,
}


const p1: Pick<Punto, 'x' | 'y'> = {
    x:1,
    y:2,
}

const p2: Readonly<Punto> = {
    x:1,
    y:2,
    desc: 'soy una descripcion'
}

// p2.desc = 'no puedo asignar nada xq es solo lectura'
