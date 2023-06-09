const express = require('express')
const checklistDependentRoute = express.Router() //é o router com outro nome, pq é dependente das checklists
const simpleRoute = express.Router()

const Checklist = require('../../db/models/checklist')
const Task = require('../../db/models/task')

checklistDependentRoute.get('/:id/tasks/new', async (request, response) => {
  try {
    let task = Task({});
    response.status(200).render('tasks/new', {checklistId: request.params.id, task})
  } catch (err) {
    response.status(422).render('pages/error', {err: 'Erro ao carregar o formulário'})
  }
})

checklistDependentRoute.post('/:id/tasks', async (request, response) => {
  let {name} = request.body.task
  let task = new Task({name, checklist: request.params.id})
  try {
    await task.save()
    let checklist = await Checklist.findById(request.params.id)
    await checklist.tasks.push(task)
    await checklist.save()
    response.redirect(`/checklists/${request.params.id}`)
  } catch (err) {
    response.status(422).render('tasks/new', {task: {...task, err}, checklistId: request.params.id})
  }
})

simpleRoute.delete('/:id', async (request, response) => {
  try {
    let task = await Task.findByIdAndDelete(request.params.id)
    let checklist = await Checklist.findById(task.checklist)
    let taskToRemove = checklist.tasks.indexOf(task._id)
    checklist.tasks.splice(taskToRemove, 1)
    checklist.save()
    response.redirect(`/checklists/${checklist._id}`)
  } catch (err) {
    response.status(422).render('pages/error', {err: 'Erro ao remover uma tarefa'})
  }
})

simpleRoute.put('/:id', async (request, response) => {
  try {
    await Task.findByIdAndUpdate(request.params.id, request.body.task)
    let task = await Task.findById(request.params.id)
    response.status(200).json({task})
  } catch (err) {
    console.log(err)
    response.status(422).json({task: {err}})
  }
})

module.exports = {checklistDependentRoute, simpleRoute};