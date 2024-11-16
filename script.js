let table=document.getElementById("sampleTable")
function insert_Row() {
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>New Cell1</td>
        <td>New Cell2</td>
    `;
    table.prepend(newRow); 
}
