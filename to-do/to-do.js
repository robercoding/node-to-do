const fs = require('fs');

let toDoList = [];

const saveDB = () => {
    let data = JSON.stringify(toDoList);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error(err);
        console.log('data.json has been saved');
    })
}

const loadDB = () => {

    try {
        toDoList = require('../db/data.json');
    } catch (error) {
        toDoList = [];
    }
}

const create = (description) => {

    loadDB();

    let toDo = {
        description,
        completed: false
    };

    let findReapetedTask = toDoList.findIndex(task => task.description == description);

    if (findReapetedTask >= 0) {
        return false
    } else {
        toDoList.push(toDo);
        saveDB();

        return true;
    }
}

const update = (description, completed = true) => {
    loadDB();

    let index = toDoList.findIndex(task => {
        console.log('Task description', task.description);
        console.log('description', description);
        return task.description === description
    });
    console.log('index', index);
    if (index === -1) {
        return false;
    } else {
        toDoList[index].completed = completed
        saveDB();
        return true;
    }
}

const remove = (description, all) => {
    loadDB();

    if (all) {
        toDoList = [];
        saveDB();
        return true;
    }

    let newList = toDoList.filter(tarea => tarea.description !== description);

    if (toDoList.length === newList.length) {
        return false;
    } else {
        toDoList = newList;
        saveDB();
        return true;
    }
}


const getList = (completed) => {
    loadDB();

    if (completed) {
        return completedList = toDoList.filter(task => task.completed);
    }

    return toDoList;
}

module.exports = {
    create,
    getList,
    update,
    remove
}