'use strict';
const Project = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    module: DataTypes.STRING
  });

  return Project;
};

module.exports = Project;