import { useEffect, useState } from 'react'
import { api } from './api/api'
import './App.module.css'

function App() {
  const [funcionarios, setFuncionarios] = useState([])
  const [funcionarios2, setFuncionarios2] = useState([])


  useEffect(() => {
    api.get('/funcionarios').then((res) => {
      setFuncionarios(res.data.item)
    })
  }, [])
  useEffect(() => {
    api.get('/imagem').then((res) => {
      setFuncionarios2(res.data.item)
    })
  }, [])

  return (
    <>
      {funcionarios2.map((item) => (
        <div key={item.id}>
          <h3>{item.nome}</h3>
          <img src={item.imagem} alt="imagem" />
        </div>
      ))}

      <br /><br /><br />

      {funcionarios.map((item) => (
        <div key={item.id}>
          <h3>{item.nome}</h3>
          <p>{item.cargo}</p>
          <p>{item.idade}</p>
          <p>{item.temLicenca ? "Habilitado 😁" : "Sem permissão 🤬"}</p>
        </div>
      ))}
    </>
  )
}

export default App
