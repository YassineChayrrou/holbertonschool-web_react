// Task 5
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
    workFromHome(): string {
        console.log("Working from home");
        return "Working from home";
    }

    getCoffeeBreak(): string {
        console.log("Getting a coffee break");
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        console.log("Getting to director tasks");
        return "Getting to director tasks";
    }
}

export class Teacher implements TeacherInterface {
    workFromHome(): string { return "Cannot work from home"; }
    getCoffeeBreak(): string { return "Cannot have a break"; }
    workTeacherTasks(): string { return "Getting to work"; }
}

export function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === "number" && salary < 500) return new Teacher();

    return new Director();
}
// console.log(createEmployee(400));

// Task 6
export function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
    let tasks;
    if (isDirector(employee)) {
        tasks = employee.workDirectorTasks()
    } else {
        tasks = employee.workTeacherTasks()
    }
    console.log(tasks);
    return tasks;
}

// executeWork(createEmployee(2000));

// Task 7
type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else if (todayClass === "History") {
        return "Teaching History";
    }
}