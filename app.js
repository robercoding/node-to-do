const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');

//console.log(argv);

let command = argv._[0]

switch (command) {
    case 'create':
        let taskCreated = toDo.create(argv.description);

        if (taskCreated) console.log("Task has been created");
        else console.log("Sorry task couldn't be created, check if it already exists.");

        break;
    case 'list':
        let completed = argv.completed

        let list = toDo.getList(completed);

        for (let task of list) {
            if (completed) {
                console.log(`Task:\n \tDescription: ${task.description}\n\tCompleted: ${task.completed}`);
            } else {
                console.log(`Task:\n \tDescription: ${task.description}\n\tCompleted: ${task.completed}`);
            }
        }
        break;
    case 'update':
        let update = toDo.update(argv.description, argv.completed);

        if (update) console.log(`Tarea has been updated`);
        else console.log(`Task hasn't been updated`);

        break;
    case 'remove':
        let removed = toDo.remove(argv.description, argv.all)

        if (removed && argv.all) console.log(`All tasks have been removed.`.green);
        else if (removed) console.log(`Task has been removed.`.green);
        else console.log(`Task couldn't be removed.`.red);

        break;
    default:
        console.log(`Couldn't recognize the parameters`);
}