
function TodoCounter({total, completed}){
    return(
      completed==total 
      ? <h1> Felicidades!! completaste tus {total} TODOs!!</h1>
      : <h1> Has completado {completed} de {total} TODOs </h1>
    )
  }

export {TodoCounter};