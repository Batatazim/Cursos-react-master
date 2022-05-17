import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import DisciplinaService from '../../services/academico/DisciplinaService'

const DisciplinasLista = () => {

    const[disciplinas, setDisciplinas] = useState ([])

    useEffect(()=> {
        setDisciplinas(DisciplinaService.getAll())
    }, [])

    console.log(disciplinas);
    
  return (
    <div>
        <Container>
        <h1>Disciplinas</h1>
        <Table striped bordered hover>
         <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Curso</th>
        </tr>
        </thead>
        <tbody>
            {disciplinas.map((item, i) => (
                <tr key={i}>
                <td>{i}</td>
                <td>{item.nome}</td>
                <td>{item.curso}</td>
              </tr>
            ))}
        </tbody>
        </Table>
        </Container>
    </div>
  )
}

export default DisciplinasLista