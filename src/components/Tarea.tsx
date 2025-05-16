
interface TArea {
    tarea:string
    borrarTArea:()=>void
}

export const Tarea = ({tarea,borrarTArea}: TArea) => {
    return (
        <div>
            <span>{tarea}</span>
            <button onClick={borrarTArea}>borrar</button>
        </div>
    )
}
