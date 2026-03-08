export default function ConfirmDelete({ aluno, onCancel, onConfirm }: any){

  return(

    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">

      <div className="bg-slate-800 p-6 rounded w-[350px] text-center">

        <h2 className="text-lg mb-4">
          Deseja excluir o aluno
        </h2>

        <p className="font-bold mb-6">
          {aluno.nomecompleto} ?
        </p>

        <div className="flex justify-center gap-3">

          <button
            onClick={onCancel}
            className="bg-gray-500 px-4 py-2 rounded"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-500 px-4 py-2 rounded"
          >
            Excluir
          </button>

        </div>

      </div>

    </div>
  )
}