
interface TArea {
    tarea:string
    borrarTArea:()=>void
}

export const Tarea = ({tarea,borrarTArea}: TArea) => {
    return (
        <div className="task">
            <span>{tarea}</span>
            <button onClick={borrarTArea}>borrar</button>
        </div>
    )
}
