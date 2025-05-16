import { useState } from "react"


export const Pendientes = () => {

    const [nuevaTarea,setnuevaTarea]=useState('')
    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div>
                <input type="text" 
                value={nuevaTarea}
                onChange={(e)=>setnuevaTarea(e.target.value)}
                placeholder="Nueva Tarea"/>
            </div>
            <h1>Hola mundoooo</h1>
        </div>
    )
}
