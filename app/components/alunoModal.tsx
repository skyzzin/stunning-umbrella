"use client"

import { useState } from "react"

type Aluno = {
  id: number
  nomecompleto: string
  apelido: string
  celular: string
  email: string
  nascimento: string
}

type Props = {
  aluno: Aluno | null
  onClose: () => void
  onSave: (aluno: Aluno) => void
}

export default function AlunoModal({ aluno, onClose, onSave }: Props){

  const [form, setForm] = useState<Aluno>({
    id: aluno?.id || 0,
    nomecompleto: aluno?.nomecompleto || "",
    apelido: aluno?.apelido || "",
    celular: aluno?.celular || "",
    email: aluno?.email || "",
    nascimento: aluno?.nascimento || ""
  })

  function update(field: keyof Aluno, value: string){
    setForm({ ...form, [field]: value })
  }

  return(

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white p-6 rounded-lg shadow-lg w-[420px]">

        <h2 className="text-xl font-semibold mb-6">
          {aluno ? "Editar aluno" : "Cadastrar aluno"}
        </h2>

        <div className="flex flex-col gap-4">

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Nome completo
            </label>

            <input
              className="border rounded p-2"
              value={form.nomecompleto}
              onChange={e => update("nomecompleto", e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Apelido
            </label>

            <input
              className="border rounded p-2"
              value={form.apelido}
              onChange={e => update("apelido", e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Celular
            </label>

            <input
              className="border rounded p-2"
              value={form.celular}
              onChange={e => update("celular", e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Email
            </label>

            <input
              type="email"
              className="border rounded p-2"
              value={form.email}
              onChange={e => update("email", e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Data de nascimento
            </label>

            <input
              type="date"
              className="border rounded p-2"
              value={form.nascimento}
              onChange={e => update("nascimento", e.target.value)}
            />
          </div>

        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Cancelar
          </button>

          <button
            onClick={()=> onSave(form)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Salvar
          </button>

        </div>

      </div>

    </div>
  )
}