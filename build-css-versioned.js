const { exec } = require('child_process')
const { version } = require('./package.json')

const outputFileName = `static/versions/${version}/obelisco.css`
const command = `sass src/styles/main.scss ${outputFileName}`

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(`F en el chat: ${stderr}`)
    process.exit(1)
  } else {
    console.log(`Ta listo che 🤓👍: ${outputFileName}`)
    console.log(stdout)
  }
})
