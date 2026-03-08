"use client"

import { useState } from "react"

export default function AlunoModal({ aluno, onClose, onSave }: any){

  const [form, setForm] = useState({
    id: aluno?.id || 0,
    nomecompleto: aluno?.nomecompleto || "",
    apelido: aluno?.apelido || "",
    celular: aluno?.celular || "",
    email: aluno?.email || "",
    nascimento: aluno?.nascimento || ""
  })

  function update(field: string, value: string){
    setForm({ ...form, [field]: value })
  }

  return(

    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">

      <div className="bg-slate-800 p-6 rounded w-[400px]">

        <h2 className="text-xl mb-4">
          {aluno ? "Editar aluno" : "Cadastrar aluno"}
        </h2>

        <input
          placeholder="Nome completo"
          className="input"
          value={form.nomecompleto}
          onChange={e => update("nomecompleto", e.target.value)}
        />

        <input
          placeholder="Apelido"
          className="input"
          value={form.apelido}
          onChange={e => update("apelido", e.target.value)}
        />

        <input
          placeholder="Celular"
          className="input"
          value={form.celular}
          onChange={e => update("celular", e.target.value)}
        />

        <input
          placeholder="Email"
          className="input"
          value={form.email}
          onChange={e => update("email", e.target.value)}
        />

        <input
          type="date"
          className="input"
          value={form.nascimento}
          onChange={e => update("nascimento", e.target.value)}
        />

        <div className="flex justify-end gap-2 mt-4">

          <button
            onClick={onClose}
            className="bg-gray-500 px-3 py-2 rounded"
          >
            Cancelar
          </button>

          <button
            onClick={()=> onSave(form)}
            className="bg-cyan-500 px-3 py-2 rounded"
          >
            Salvar
          </button>

        </div>

      </div>

    </div>
  )
}