let table=document.getElementById("sampleTable");

function insert_Row() {
    table.innerHTML=`
	<tr><td>New Cell1</td>
	<td>New Cell2</td></tr>
	`  +table.innerHTML ;
}
