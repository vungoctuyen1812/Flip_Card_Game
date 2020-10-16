const express = require('express')
const ejs = require('ejs')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
app.use(express.static("public"))
app.use(cors())
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
	res.render("index")
})
let data = []

app.post('/submit', (req, res) =>{
	const {name, score} = req.body
	data.push({name: name, score: score})
	data.sort((a,b)=>{
		return a - b > 0
	})
	if(data.length >= 6){
		data = data.slice(0, 5)
	}
	res.send(data)
})


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
  
})