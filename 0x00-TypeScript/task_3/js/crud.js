export const insertRow = (row) => {
    console.log("Insert row", row);
    return Math.floor(Math.random() * Math.floor(1000));
}

export const deleteRow = (rowId) => {
    console.log("Delete row id", rowId);
    return;
}

export const updateRow = (rowId, row) => {
    console.log(`Update row ${rowId}`, row);

    return rowId;
}