import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HolidayPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [holiday, setHoliday] = useState(null);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        // const year = new Date().getFullYear();
        const response = await fetch(`https://kalenderindonesia.com/api/c14c8e4c4e75abed/libur/masehi/2025`);

        if (!response.ok) {
          throw new Error(`Gagal mengambil data: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Data hari libur:", data); // Debugging log

        const today = new Date().toISOString().split("T")[0];
        const todayHoliday = data.data?.find((item) => item.tanggal === today);

        if (todayHoliday) {
          setHoliday(todayHoliday);
          setIsOpen(true);
        }
      } catch (error) {
        console.error("Gagal mengambil data hari libur:", error.message);
      }
    };

    fetchHolidays();
  }, []);

  return (
    isOpen && (
      <motion.div className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-50 flex justify-center items-center p-4 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
          <h2 className="text-lg font-bold mb-2">Hari Libur Hari Ini</h2>
          <p className="text-gray-700">
            📅 {holiday?.tanggal} - {holiday?.keterangan}
          </p>
          <div className="flex justify-center mt-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-red-600 transition" onClick={() => setIsOpen(false)}>
              Tutup
            </button>
          </div>
        </motion.div>
      </motion.div>
    )
  );
}
