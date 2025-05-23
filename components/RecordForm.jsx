import React, { useState } from "react";
import { useRouter } from "next/router";

const RecordForm = ({ data, onSubmit }) => {
  const router = useRouter();
  const [entry, setEntry] = useState(data);

  const updateEntry = (type, value) => {
    setEntry({ ...entry, [type]: value });
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div className="flex justify-center p-4">
      <div className="border p-4 rounded-md shadow-sm flex flex-col gap-4 w-full max-w-md bg-white dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-center text-gray-800 dark:text-white">
          {entry._id ? "Actualizează programarea" : "Creează o programare"}
        </h2>

        <div>
          <label className="block mb-1 text-sm text-gray-700 dark:text-white">
            Nume Proprietar
          </label>
          <input
            type="text"
            value={entry.numeProprietar}
            onChange={(e) => updateEntry("numeProprietar", e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="Ex: Ion Popescu"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700 dark:text-white">
            Autovehicul
          </label>
          <input
            type="text"
            value={entry.autovehicul}
            onChange={(e) => updateEntry("autovehicul", e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="Ex: Dacia Logan"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700 dark:text-white">
            Problema semnalată
          </label>
          <textarea
            value={entry.problema}
            onChange={(e) => updateEntry("problema", e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="Ex: Schimb plăcuțe frână"
            rows="3"
            required
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700 dark:text-white">
            Preț Estimat (lei)
          </label>
          <input
            type="number"
            value={entry.pretEstimat}
            onChange={(e) => updateEntry("pretEstimat", parseFloat(e.target.value))}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            min="0"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700 dark:text-white">
            Data și ora programării
          </label>
          <input
            type="datetime-local"
            value={entry.dataProgramare?.slice(0, 16) || ""}
            onChange={(e) => updateEntry("dataProgramare", e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700 dark:text-white">
            Status
          </label>
          <select
            value={entry.status}
            onChange={(e) => updateEntry("status", e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          >
            <option value="Programat">Programat</option>
            <option value="Finalizat">Finalizat</option>
            <option value="Anulat">Anulat</option>
          </select>
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Anulează
          </button>
          <button
            type="button"
            onClick={() => onSubmit(entry)}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            {entry._id ? "Salvează" : "Creează"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordForm;
