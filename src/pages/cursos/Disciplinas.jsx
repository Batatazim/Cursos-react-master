import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import {FaCheck} from 'react-icons/fa'
import disciplinaValidator from '../../validators/disciplinaValidator'
import DisciplinaService from '../../services/academico/DisciplinaService'


const Disciplinas = () => {

  const {register, handleSubmit, formState: {errors} } = useForm();

  function salvar(dados) {
    DisciplinaService.create(dados)
  }

  return (
    <div>
        <Container>
        <h1>Disciplinas</h1>
        <Form>
         <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register("nome", disciplinaValidator.nome)} />
           {errors.nome && <span>{errors.nome.message}</span>}
         </Form.Group>
         <Form.Group className="mb-3" controlId="curso">
           <Form.Label>Curso: </Form.Label>
           <Form.Control type="text"{...register("curso", disciplinaValidator.curso)}  />
           {errors.curso && <span style={{color: "red"}}>Campo Obrigatorio</span>}
         </Form.Group>
         <div className="text-center">
             <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck/> Salvar</Button>
         </div>
        </Form>
        </Container>
    </div>
  )
}

export default Disciplinas