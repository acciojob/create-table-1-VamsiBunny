let table = document.getElementById("sampleTable");

function insert_Row() {
    // Create a new row <tr>
    let newRow = document.createElement("tr");

    // Create the first cell <td> with content "New Cell1"
    let newCell1 = document.createElement("td");
    newCell1.textContent = "New Cell1";
    
    // Create the second cell <td> with content "New Cell2"
    let newCell2 = document.createElement("td");
    newCell2.textContent = "New Cell2";

    // Append both cells to the row
    newRow.appendChild(newCell1);
    newRow.appendChild(newCell2);
    
    // Log the row creation for debugging purposes
    console.log("Row created:", newRow);

    // Prepend the new row to the table
    table.prepend(newRow);
}
