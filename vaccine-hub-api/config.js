const { blue } = require('colors')

require('dotenv').config()
require('colors')

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001

function getDatabaseUri(){
    const dbUser = process.env.DB_USER || 'postgres'
    const dbPass = process.env.DB_PASSWORD ? encodeURI(process.env.DB_PASSWORD) : 'postgres'
    const dbHost = process.env.DB_HOST || 'localhost'
    const dbPort = process.env.DB_PORT || 5432
    const dbName = process.env.DB_NAME || 'vaccine_hub'


    return process.env.DB_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`

}

console.log('vaccine hub config'.green)
console.log("port: ".blue, PORT)
console.log('DB URI:'.bgCyan, getDatabaseUri())
console.log('----')

module.exports = {
    PORT,
    getDatabaseUri,
}