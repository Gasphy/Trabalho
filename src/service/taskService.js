const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllTasks = async () => {
  return await prisma.task.findMany();
};

const getTaskById = async (id) => {
  return await prisma.task.findUnique({ where: { id: parseInt(id) } });
};

const createTask = async (data) => {
  return await prisma.task.create({ data });
};

const updateTask = async (id, data) => {
  return await prisma.task.update({
    where: { id: parseInt(id) },
    data,
  });
};

const deleteTask = async (id) => {
  return await prisma.task.delete({ where: { id: parseInt(id) } });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
