import ListGroup from 'react-bootstrap/ListGroup';

const ItemTareas = ({tarea}) => {
  return (
    <div>
        <ListGroup.Item>
            {tarea}
        </ListGroup.Item>
    </div>
  )
}

export default ItemTareas
