import { Tarea } from "./Tarea"
interface Props {
    ListaTAreas:string[],
    borrarTarea:(index:number)=>void
}

export const Listatarea = ({ListaTAreas,borrarTarea}: Props) => {
    return (
        <div className="taskList">
      {
        ListaTAreas.map((tarea,index)=>
            <Tarea key={index} tarea={tarea} borrarTArea={()=>borrarTarea(index)}></Tarea>
        )
      }
        </div>
    )
}
