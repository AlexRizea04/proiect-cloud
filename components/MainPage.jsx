// /components/MainPage.jsx

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteRecord, getRecords } from "../utils/recordsFunctions";

const MainPage = () => {
  const router = useRouter();
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const response = await getRecords();
      setRecords(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteRecord = async (id) => {
    try {
      const response = await deleteRecord(id);
      if (response.deletedCount === 1) {
        const newRecords = records.filter((record) => record._id !== id);
        setRecords(newRecords);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateRecord = (id) => {
    router.push(`/records/edit?id=${id}`);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="p-4 flex flex-wrap gap-4">
      {records.map((record) => (
        <div
          className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          key={record._id}
        >
          <h5 className="mb-2 text-xl font-bold text-white">
            {record.numeProprietar} – {record.autovehicul}
          </h5>
          <p className="text-sm text-gray-300 mb-1">Problema: {record.problema}</p>
          <p className="text-sm text-gray-300 mb-1">Preț estimat: {record.pretEstimat} lei</p>
          <p className="text-sm text-gray-300 mb-1">
            Programare: {new Date(record.dataProgramare).toLocaleString()}
          </p>
          <p className="text-sm text-gray-400 italic mb-4">Status: {record.status}</p>
          <div className="flex justify-center gap-2">
            <button
              type="button"
              className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-4 py-2"
              onClick={() => handleUpdateRecord(record._id)}
            >
              Update
            </button>
            <button
              type="button"
              className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2"
              onClick={() => handleDeleteRecord(record._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
