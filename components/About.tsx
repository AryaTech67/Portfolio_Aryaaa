export default function About() {
  return (
    <section id="tentang" className="scroll-mt-24 space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Tentang Saya
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          Latar belakang, pola pikir, dan cara saya mengeksekusi rekayasa kode.
        </p>
      </div>

      <div className="card-craft p-6 sm:p-8 rounded-2xl space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
        <p>
          Bagi saya, masuk jurusan Rekayasa Perangkat Lunak (RPL) bukan karena ikut-ikutan tren. Yang membuat saya bersemangat adalah kepuasan saat merancang struktur data dari tabel kosong, menyusun logika backend yang aman, dan membangun antarmuka web interaktif yang langsung menyelesaikan kendala operasional orang lain.
        </p>
        <p>
          Saya <strong className="text-white font-semibold">menghindari jalan pintas no-code atau WordPress</strong>. Seluruh aplikasi yang saya buat ditulis dengan sintaks murni—menggunakan <strong className="text-white font-semibold">Next.js &amp; TypeScript</strong> untuk frontend reaktif modern, serta <strong className="text-white font-semibold">Laravel &amp; PHP PDO</strong> untuk manajemen database relasional MySQL yang terproteksi SQL Injection.
        </p>
        <p>
          Fokus utama saya terarah: <span className="text-emerald-400 font-medium">Rekayasa Web (Web Engineering)</span>—memahami siklus penuh aplikasi dari HTTP request, validasi input, integritas database, hingga rendering antarmuka pengguna yang cepat.
        </p>
      </div>
    </section>
  );
}
