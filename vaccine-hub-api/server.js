const express = require('express')
const cors = require('cors')
const morgan = require('morgan')


const {NotFoundError} = require('./utils/errors')

const app = express()
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

app.use((req,res,next) => {
    return next(new NotFoundError())
})

app.use((req,res,err,next) => {
    const status = err.status || 500
    const message = err.message

    return res.status(status).json({
        error : {message,status}
    })
})


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
