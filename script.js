let table = document.getElementById("sampleTable");

function insert_Row() {
    let newRow = document.createElement("tr");

    let newCell1 = document.createElement("td");
    newCell1.textContent = "New Cell1";
    
    let newCell2 = document.createElement("td");
    newCell2.textContent = "New Cell2";
    
    newRow.appendChild(newCell1);
    newRow.appendChild(newCell2);
    
    console.log("New row inserted:", newRow);

    table.insertBefore(newRow, table.firstChild);
}
