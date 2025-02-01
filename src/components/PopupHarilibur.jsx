import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HolidayPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [holiday, setHoliday] = useState(null);

  useEffect(() => {
    // Memeriksa apakah popup sudah pernah dibuka sebelumnya
    const popupShown = localStorage.getItem("holidayPopupShown");

    if (!popupShown) {
      const fetchHolidays = async () => {
        try {
          const year = new Date().getFullYear();
          const response = await fetch(`https://dayoffapi.vercel.app/api?year=${year}`);

          if (!response.ok) {
            throw new Error(`Gagal mengambil data: ${response.statusText}`);
          }

          const data = await response.json();
          //   console.log("Data hari libur:", data); // Debugging log

          const today = new Date().toISOString().split("T")[0]; // Mendapatkan tanggal hari ini dalam format YYYY-MM-DD
          //   console.log("Tanggal hari ini:", today);

          // Cari hari libur yang sesuai dengan tanggal yang diformat
          const todayHoliday = data.find((item) => item.tanggal === today);
          //   console.log("Hari libur hari ini:", todayHoliday);

          if (todayHoliday) {
            // Ambil hanya tanggal, keterangan, dan is_cuti
            const { tanggal, keterangan, is_cuti } = todayHoliday;

            // Mengubah format tanggal menjadi format manusiawi
            const formattedDate = new Date(tanggal).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            });

            setHoliday({ tanggal: formattedDate, keterangan, is_cuti });
            setIsOpen(true); // Menampilkan popup jika ada hari libur yang sesuai dengan tanggal hari ini
          }
        } catch (error) {
          console.error("Gagal mengambil data hari libur:", error.message);
        }
      };

      fetchHolidays();
    }
  }, []);

  const handleClose = () => {
    // Simpan status popup sudah ditutup di localStorage
    localStorage.setItem("holidayPopupShown", "true");
    setIsOpen(false);
  };

  return (
    // Hanya tampilkan popup jika isOpen true dan holiday ada
    isOpen &&
    holiday && (
      <motion.div className="fixed inset-0 backdrop-blur-lg bg-opacity-50 flex justify-center items-center p-4 z-50">
        <motion.div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative text-center" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
          <h2 className="text-lg font-bold mb-2">Hari Libur Hari Ini</h2>
          <div className="flex justify-center items-center">
            {/* Menampilkan gambar animasi GIF */}
            <img
              src="/cute-pink-calendar-icon-lfh58cki11mcvbhm.gif" // Ganti URL dengan file GIF Anda
              alt="Icon Animasi"
              className="w-16 h-16 mb-4" // Sesuaikan ukuran sesuai kebutuhan
            />
          </div>
          <p className="text-black">
            {holiday?.tanggal} - {holiday?.keterangan}
          </p>
          <div className="flex justify-center mt-4">
            <button className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-red-600 transition" onClick={handleClose}>
              Tutup
            </button>
          </div>
        </motion.div>
      </motion.div>
    )
  );
}
