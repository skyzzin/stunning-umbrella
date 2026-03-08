"use client"

import { useState } from "react"
import AlunoModal from "../components/alunoModal"
import ConfirmDelete from "../components/confirmDelete"

type Aluno = {
  id: number
  nomecompleto: string
  apelido: string
  celular: string
  email: string
  nascimento: string
}

export default function Home() {

  const [alunos, setAlunos] = useState<Aluno[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [editAluno, setEditAluno] = useState<Aluno | null>(null)
  const [deleteAluno, setDeleteAluno] = useState<Aluno | null>(null)

  function salvarAluno(aluno: Aluno){

    if(editAluno){
      setAlunos(alunos.map(a => a.id === aluno.id ? aluno : a))
      setEditAluno(null)
    }else{
      setAlunos([...alunos, { ...aluno, id: Date.now() }])
    }

    setModalOpen(false)
  }

  function excluirAluno(){
    if(deleteAluno){
      setAlunos(alunos.filter(a => a.id !== deleteAluno.id))
      setDeleteAluno(null)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">

      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-bold">Alunos</h1>

          <button
            onClick={()=> setModalOpen(true)}
            className="bg-cyan-500 px-4 py-2 rounded"
          >
            Cadastrar aluno
          </button>
        </div>

        <table className="w-full bg-slate-800 rounded">

          <thead className="text-left border-b border-white/10">
            <tr>
              <th className="p-3">ID</th>
              <th>Nome</th>
              <th>Apelido</th>
              <th>Celular</th>
              <th>Email</th>
              <th>Nascimento</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>

            {alunos.map(aluno => (

              <tr key={aluno.id} className="border-b border-white/5">

                <td className="p-3">{aluno.id}</td>
                <td>{aluno.nomecompleto}</td>
                <td>{aluno.apelido}</td>
                <td>{aluno.celular}</td>
                <td>{aluno.email}</td>
                <td>{aluno.nascimento}</td>

                <td className="flex gap-2 py-3">

                  <button
                    className="bg-yellow-500 px-2 py-1 rounded"
                    onClick={()=>{
                      setEditAluno(aluno)
                      setModalOpen(true)
                    }}
                  >
                    Editar
                  </button>

                  <button
                    className="bg-red-500 px-2 py-1 rounded"
                    onClick={()=> setDeleteAluno(aluno)}
                  >
                    Excluir
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {modalOpen &&
        <AlunoModal
          aluno={editAluno}
          onClose={()=> {
            setModalOpen(false)
            setEditAluno(null)
          }}
          onSave={salvarAluno}
        />
      }

      {deleteAluno &&
        <ConfirmDelete
          aluno={deleteAluno}
          onCancel={()=> setDeleteAluno(null)}
          onConfirm={excluirAluno}
        />
      }

    </div>
  )
}