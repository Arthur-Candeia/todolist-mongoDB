const express = require('express')
const router = express.Router()
const Checklist = require('../../db/models/checklist')

router.get('/', async (require, response) => {
  try {
    let checklists = await Checklist.find()
    response.status(200).render('checklists/checklist', {checklists})
  }
  catch (err) {
    response.status(404).render('pages/error', {err: 'Erro ao exibir as listas'})
  }
})

router.get('/new', async (request, response) => {
  try {
    let checklist = new Checklist();
    response.status(200).render('checklists/new', {checklist})
  } catch (err) {
    response.status(500).render('pages/error', {err: 'Erro ao carregar o formulário'})    
  }
})


router.get('/:id', async (request, response) => {
  try {
    let checklist = await Checklist.findById(request.params.id).populate('tasks')
    response.status(200).render(`checklists/showChecklist`, {checklist})
  }
  catch (err) {
    response.status(500).render('pages/error', {err: 'Erro ao carregar o formulário'})    
  }
})

router.get('/:id/edit', async (request, response) => {
  try {
    let checklist = await Checklist.findById(request.params.id)
    response.status(200).render(`checklists/edit`, {checklist})
  }
  catch (err) {
    response.status(500).render('pages/error', {err: 'Erro ao exibir a edição de listas'})    
  }
})


router.post('/', async (request, response) => {
  let {name} = request.body.checklist
  let checklist = new Checklist({name})

  try {
    await checklist.save()
    response.redirect('/checklists')
  }
  catch (err) {
    response.status(422).render('checklists/new', {checklists: {...checklist, err}}) 
  }
})

router.put('/:id', async (request, response) => {
  let {name} = request.body.checklist
  //let checklist = await Checklist.findById(request.params.id)

  try {
    await Checklist.findByIdAndUpdate(request.params.id, {name})
    response.redirect('/checklists')
  }
  catch (err) {
    let errors = err.errors;
    response.status(422).render(`checklists/edit`, {checklist: {errors}})
  }
})

router.delete('/:id', async (request, response) => {
  try {
    await Checklist.findByIdAndRemove(request.params.id)
    response.redirect('/checklists')
  }
  catch (err) {
    response.status(500).render('pages/error', {err: 'Erro ao deletar a listas de tarefas'})    
  }
})

module.exports = router;