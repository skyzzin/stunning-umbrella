"use client"

import { useState, useEffect } from "react"
import { supabase } from "../lib/supabase"
import AlunoModal from "../components/alunoModal"
import ConfirmDelete, { AlunoProps } from "../components/confirmDelete"

type Aluno = {
  id?: number
  nomecompleto: string
  apelido: string
  celular: string
  email: string
  nascimento: string
}

export default function Home(){

  const [alunos, setAlunos] = useState<Aluno[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [editAluno, setEditAluno] = useState<Aluno | null>(null)
  const [deleteAluno, setDeleteAluno] = useState<AlunoProps | null>(null)

  async function carregarAlunos(){

    const { data } = await supabase
      .from("alunos")
      .select("*")
    

    if(data) setAlunos(data)

      console.log(data)

  }

  useEffect(()=>{
    carregarAlunos()
  },[])

  async function salvarAluno(aluno: Aluno){

    const {id, ...novoAluno} = aluno

    if(editAluno){

      await supabase
        .from("alunos")
        .update(novoAluno)
        .eq("id", id)

    }else{

      await supabase
        .from("alunos")
        .insert([novoAluno])

    }

    setModalOpen(false)
    setEditAluno(null)

    carregarAlunos()
  }

  async function excluirAluno(){

    if(deleteAluno){

      await supabase
        .from("alunos")
        .delete()
        .eq("id", deleteAluno.id)

      setDeleteAluno(null)
      carregarAlunos()

    }

  }

  return (
     <div className="min-h-screen bg-gray-50 text-gray-800 p-10">

      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-2xl font-bold">
            Gestão de Alunos
          </h1>

          <button
            onClick={()=> setModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Cadastrar aluno
          </button>

        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">

          <table className="w-full">

            <thead className="bg-gray-100 text-left">

              <tr>

                <th className="p-3">ID</th>
                <th className="p-3">Nome</th>
                <th className="p-3">Apelido</th>
                <th className="p-3">Celular</th>
                <th className="p-3">Email</th>
                <th className="p-3">Nascimento</th>
                <th className="p-3">Ações</th>

              </tr>

            </thead>

            <tbody>

              {alunos.map(aluno => (

                <tr key={aluno.id} className="border-t">

                  <td className="p-3">{aluno.id}</td>
                  <td className="p-3">{aluno.nomecompleto}</td>
                  <td className="p-3">{aluno.apelido}</td>
                  <td className="p-3">{aluno.celular}</td>
                  <td className="p-3">{aluno.email}</td>
                  <td className="p-3">{aluno.nascimento}</td>

                  <td className="p-3 flex gap-2">

                    <button
                      className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
                      onClick={()=>{

                        setEditAluno(aluno)
                        setModalOpen(true)

                      }}
                    >
                      Editar
                    </button>

                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={()=> setDeleteAluno(aluno as AlunoProps)}
                    >
                      Excluir
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {modalOpen &&

        <AlunoModal
          aluno={editAluno}
          onClose={()=>{
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