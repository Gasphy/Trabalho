const taskService = require('../service/taskService');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'falha ao buscar a task' });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: 'Task nao encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Falha ao buscar a task' });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao criar a task' });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await taskService.updateTask(req.params.id, req.body);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: 'Task nao encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Falha ao atualizar a task' });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await taskService.deleteTask(req.params.id);
    if (task) {
      res.status(200).json({ message: 'Task deletada com sucesso' });
    } else {
      res.status(404).json({ error: 'Task nao encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Falha ao deletar a task' });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
