const { Project } = require('../models')

const getAllProjects = (req, res) => {
  return Project.findAll()
    .then((e) => res.status(200).json(e))
}

module.exports = {
  getAllProjects
}