interface Student {
    firstName: String;
    lastName: String;
    age: Number;
    location: String;
}

const studentOne: Student = {
    firstName: "Yassine",
    lastName: "Chayrrou",
    age: 25,
    location: "Tunis",
}


const studentTwo: Student = {
    firstName: "Kayden",
    lastName: "Break",
    age: 32,
    location: "South Korea",
}

const studentList: Student[] = [studentOne, studentTwo];

const table: HTMLTableElement = document.createElement("table");
const tableHeadLabels: string[] = ['firstName', 'location'];

document.body.appendChild(table);

function renderTableHead(table: HTMLTableElement, headLabels: string[]) {
    let thead: HTMLTableSectionElement = table.createTHead();
    let row: HTMLTableRowElement = thead.insertRow();
    for (const label of headLabels) {
        let th: HTMLTableHeaderCellElement = document.createElement("th")
        th.innerText = label;
        row.appendChild(th);
    }
}


function renderTable(table: HTMLTableElement, data: Student[]) {
    for (let obj of data) {
        let row: HTMLTableRowElement = table.insertRow();
        
    }
}

renderTableHead(table, tableHeadLabels);
renderTable(table, studentList);