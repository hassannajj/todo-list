class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getTasks() {
        return this.tasks;
    }

    addTask(title, date, notes) {
        let task = new Task(title, date, notes);
        this.tasks.push(task);
    }
}

export {Project};