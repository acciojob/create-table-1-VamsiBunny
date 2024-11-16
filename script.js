let table = document.getElementById("sampleTable");

function insert_Row() {
    // Create a new row (tr)
    let newRow = document.createElement("tr");

    // Create the first cell (td) with content "New Cell1"
    let newCell1 = document.createElement("td");
    newCell1.textContent = "New Cell1";

    // Create the second cell (td) with content "New Cell2"
    let newCell2 = document.createElement("td");
    newCell2.textContent = "New Cell2";

    // Append the cells to the new row
    newRow.appendChild(newCell1);
    newRow.appendChild(newCell2);

    // Prepend the new row at the top of the table
    table.prepend(newRow);  // Prepend adds the new row at the beginning of the table
}
