type Aluno = {
  id: number
  nomecompleto: string
}

type Props = {
  aluno: Aluno
  onCancel: () => void
  onConfirm: () => void
}

export default function ConfirmDelete({ aluno, onCancel, onConfirm }: Props){

  return(

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white p-6 rounded-lg shadow-lg w-[350px]">

        <h2 className="text-lg font-semibold mb-2">
          Confirmar exclusão
        </h2>

        <p className="text-gray-600 mb-6">
          Deseja realmente excluir o aluno
          <span className="font-semibold text-gray-900"> {aluno.nomecompleto}</span>?
        </p>

        <div className="flex justify-end gap-3">

          <button
            onClick={onCancel}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Excluir
          </button>

        </div>

      </div>

    </div>

  )
}