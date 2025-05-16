import { useState } from "react"

import { Listatarea } from "./Listatarea"

export const Pendientes = () => {

    const [nuevaTarea,setnuevaTarea]=useState<string>('')
    const [ListaTArea,setListaTArea]=useState<string[]>([])
    const addTask=()=>{
  if(nuevaTarea.trim()==='')return
   setListaTArea(tareasAnteriores=>[...tareasAnteriores,nuevaTarea])
   setnuevaTarea('')
    }
    const handleborrarTArea=(index:number)=>{
        setListaTArea(tarea=>tarea.filter((_,i)=>index!==i))
    }
    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div>
                <input type="text" 
                value={nuevaTarea}
                onChange={(e)=>setnuevaTarea(e.target.value)}
                placeholder="Nueva Tarea"/>
            </div>
            <button onClick={addTask}>Agregar Tarea</button>

            <Listatarea ListaTAreas={ListaTArea} borrarTarea={handleborrarTArea} ></Listatarea>
        </div>
    )
}
