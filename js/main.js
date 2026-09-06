// ==============================
// SETUP AWAL
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const pesanEl = document.getElementById("pesan");

  // kosongin dulu biar gak muncul
  if (pesanEl) {
    pesanEl.innerText = "";
  }
});


// ==============================
// BUKA ENVELOPE
// ==============================
function bukaEnvelope() {
  const hal1 = document.getElementById("hal1");
  const hal2 = document.getElementById("hal2");
  const audio = document.getElementById("audio");
  const envelope = document.getElementById("envelope");
  const pesanEl = document.getElementById("pesan");

  // ✅ isi teks SETELAH klik
  if (pesanEl) {
    pesanEl.innerText = "Happy Birthday, sayangku ❤️🎉";
  }

  // animasi amplop
  if (envelope) {
    envelope.classList.add("open");
  }

  // audio
  if (audio) {
    audio.volume = 0.7;
    audio.play().catch(() => {});
  }

  // pindah ke game
  setTimeout(() => {
    if (hal1 && hal2) {
      hal1.classList.add("hidden");
      hal2.classList.remove("hidden");

      if (typeof startGame === "function") {
        startGame();
      }
    }
  }, 1200);
}


// ==============================
// HALAMAN AKHIR (EFEK KETIK)
// ==============================
function pindahKeHal3() {
  const hal2 = document.getElementById("hal2");
  const hal3 = document.getElementById("hal3");
  const teks = document.getElementById("teksCinta");

  if (hal2 && hal3) {
    hal2.classList.add("hidden");
    hal3.classList.remove("hidden");
  }

  if (teks) {
    teks.innerHTML = "";
  }

  new TypeIt("#teksCinta", {
    strings: [
      "Selamat ulang tahun, sayangku ❤️",
      "Semoga semua hal baik datang ke kamu 💖",
      "Aku selalu di sini buat kamu 🫶"
    ],
    speed: 40,
    breakLines: true
  }).go();
}