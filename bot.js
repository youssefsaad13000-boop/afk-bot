const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'yyycraft.falixsrv.me',
    port: ,
    username: 'Blocky',
    version: '1.21.11'
  })

  bot.on('spawn', () => {
    console.log('Bot joined the server!')

    // Anti-AFK حركة بسيطة كل دقيقة
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 300)
    }, 60000)
  })

  bot.on('death', () => {
    console.log('Bot died, respawning...')
    setTimeout(() => bot.respawn(), 3000)
  })

  bot.on('end', () => {
    console.log('Bot disconnected, reconnecting...')
    setTimeout(createBot, 5000)
  })

  bot.on('error', (err) => {
    console.log('Error:', err)
  })
}

createBot()
