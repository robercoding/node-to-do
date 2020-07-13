const { demand } = require('yargs');

const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of the task to do'
}

const createOpts = {
    description: description
};

const updateOpts = {
    description: description,
    completed: {
        alias: 'c',
        default: true,
        desc: 'Mark the task as completed'
    }
};


const listOpts = {
    completed: {
        alias: 'c',
        desc: 'Return the completed tasks'
    }
}

const removeOpts = {
    description: {
        alias: 'd',
        desc: 'Description of the task to do'
    },
    all: {
        alias: 'a',
        desc: 'Removes all the tasks'
    }
}


const argv = require('yargs')
    .command('create', 'Create a task', createOpts)
    .command('update', 'Updates in terminal', updateOpts)
    .command('list', 'List the tasks', listOpts)
    .command('remove', 'Remove a task', removeOpts)
    .help()
    .argv;


module.exports = {
    argv
}