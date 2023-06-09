const express = require('express')
const app = express()
const rootRouter = require('./routes/index')
const checklistRouter = require('./routes/checklist')
const taskRouter = require('./routes/task')
const methodOverride = require('method-override')
const path = require('path')
require('../db/db')


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../public')))
app.use (methodOverride('_method', {methods: ['POST', 'GET']}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', rootRouter)
app.use('/checklists', checklistRouter)
app.use('/checklists', taskRouter.checklistDependentRoute)
app.use('/tasks', taskRouter.simpleRoute)

app.listen(3000, () => console.log('servidor ativo'))