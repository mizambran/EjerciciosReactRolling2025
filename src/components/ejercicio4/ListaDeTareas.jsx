import ListGroup from 'react-bootstrap/ListGroup';
import ItemTareas from './ItemTareas';



const ListaDeTareas = ({tareas}) => {



    return (
    <div className='mb-5'>
      <ListGroup>
        {tareas.map((tarea, index) => (<ItemTareas key={index} tarea={tarea} ></ItemTareas>))}
    </ListGroup>
    </div>
  )
}

export default ListaDeTareas
