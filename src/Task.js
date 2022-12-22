
class Task {
    constructor(title, date, notes) {
        this.title = title;
        this.date = date;
        this.notes = notes;
        this.isImportant = false;
        this.completed = false;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getDate() {
        return this.date;
    }

    setDate(date) {
        this.date = date;
    }

    getNotes() {
        return this.notes;
    }

    setNotes(notes) {
        this.notes = notes;
    }

    getImportantStatus() {
        return this.isImportant;
    }

    changeImportantStatus() {
        if (this.isImportant) {
            this.isImportant = false;
        }
        else {
            this.isImportant = true;
        }
    }

    getCompleteStatus() {
        return this.completed;
    }

    changeCompleteStatus() {
        if (this.completed) {
            this.completed = false;
        }
        else {
            this.completed = true;
        }
    }

}

export {Task};