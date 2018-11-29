// Dependencies
const express = require('express')
const app = express()

// Port
// Allow use of Heroku's port or your own local port, depending on your environment
const PORT = process.env.PORT || 3000

// use public folder for static assets, like css
app.use(express.static('dist'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

// Listen
app.listen(PORT, ()=>{
  console.log('Listening on port: ', PORT  );
})
// console.log('hello')
// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const morgan = require('morgan')
// const { sequelize } = require('./models')
// const config = require('./config/config')
//
// const app = express()
// app.use(morgan('combined'))
// app.use(bodyParser.json())
// app.use(cors())
//
// require('./routes')(app)
//
// sequelize.sync()
//   .then(() => {
//     app.listen(config.port)
//     console.log(`server started on port ${config.port}`)
//   })
