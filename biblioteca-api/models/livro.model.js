// models/livro.model.js
module.exports = (sequelize, Sequelize) => {
    const Livro = sequelize.define("livro", {
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        autor: {
            type: Sequelize.STRING,
            allowNull: false
        },
        ano: {
            type: Sequelize.INTEGER
        },
        disponibilidade: { 
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    });

    return Livro;
};