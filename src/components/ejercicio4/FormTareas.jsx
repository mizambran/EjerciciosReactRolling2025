import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import ListaDeTareas from "./ListaDeTareas";



const FormTareas = () => {

    const tareasLocalStorage = JSON.parse(localStorage.getItem("listaDeTareasKey")) || [];

    const [tareas, setTareas] = useState(tareasLocalStorage);


    const {register, handleSubmit, reset, formState:{errors}} = useForm() 

    const crearTarea = (data) => {
        setTareas([...tareas, data.tarea])

        reset()
        Swal.fire(
            {
                title:"Tarea guardada",
                text: `La tarea ${data.tarea} se guardó correctamente.`,
                icon:"success"
            }
        )
    }


    useEffect(() => {
        localStorage.setItem("listaDeTareasKey", JSON.stringify(tareas))
    }, [tareas])


    return (
    <div className="container">
      <Form onSubmit={handleSubmit(crearTarea)} className="my-4" >
      <Form.Group className="d-flex gap-2" >
        <Form.Control type="text" placeholder="Ingresar tarea" {...register("tarea", {
            required:"Este campo es obligatorio",
            minLength:{
                value:3,
                message:"Debes ingresar al menos tres caracteres"
            }
        })} />
        <Button variant="primary" type="submit"> ➕ </Button>
      </Form.Group>
      <Form.Text> {errors.tarea?.message} </Form.Text>
    </Form>
    <ListaDeTareas tareas={tareas} ></ListaDeTareas>
    </div>
  )
}

export default FormTareas
