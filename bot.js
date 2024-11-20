const mineflayer = require('mineflayer');

// Buat bot baru
const bot = mineflayer.createBot({
  host: 'OpaL2.aternos.me',  // Ganti dengan alamat server Anda
  port: 58087,                // Port server
  username: 'Bob', // Username bot Anda
  password: 'YourPassword'    // Jika ada (opsional)
});

// Ketika bot sudah siap
bot.once('spawn', () => {
  console.log("Bot sudah siap!");

  // Fungsi untuk membuat bot loncat
  function makeBotJump() {
    if (bot.entity.onGround) {
      bot.setControlState('jump', true);  // Aktifkan loncat
      setTimeout(() => {
        bot.setControlState('jump', false); // Matikan loncat setelah 0.5 detik
      }, 500);
    }
  }

  // Loncat setiap 1 detik
  setInterval(makeBotJump, 1000);
});

// Tangani error
bot.on('error', err => console.log('Error:', err));
bot.on('end', () => console.log('Bot terputus'));
