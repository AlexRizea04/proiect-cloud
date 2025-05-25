import { useEffect, useState } from "react";
import { getRecords } from "../../utils/recordsFunctions";

export default function FinalizatePage() {
  const [records, setRecords] = useState([]);

  const fetchFinalizate = async () => {
    try {
      const allRecords = await getRecords();
      const finalizate = allRecords.filter(
        (record) => record.status === "Finalizat"
      );
      setRecords(finalizate);
    } catch (error) {
      console.error("Eroare la preluarea datelor:", error);
    }
  };

  useEffect(() => {
    fetchFinalizate();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black p-4">
      <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Programări Finalizate
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {records.length === 0 && (
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Nu există programări finalizate.
          </p>
        )}
        {records.map((record) => (
          <div
            key={record._id}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-2 text-xl font-bold text-white">
              {record.numeProprietar} – {record.autovehicul}
            </h5>
            <p className="text-sm text-gray-300 mb-1">Problema: {record.problema}</p>
            <p className="text-sm text-gray-300 mb-1">Preț: {record.pretEstimat} lei</p>
            <p className="text-sm text-gray-300 mb-1">
              Programare: {new Date(record.dataProgramare).toLocaleString()}
            </p>
            <p className="text-sm text-green-400 font-semibold italic">
              Status: {record.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
