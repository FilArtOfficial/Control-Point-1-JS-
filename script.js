let count = 0
const Table = (line = 5, column = 6) => {
var arr = []
for (i = 0; i < line * column; i++) {
arr.push(Math.floor(Math.random() * 100))
}
let table = '<table id="table">';
    for (let i = 0; i < line; i++) {
        table += "<tr>";
        for (let j = 0; j < column; j++) {
            if (arr[count] >= 50) {
                table += `<td style="background-color: orange;" id="${count}">` + arr[count] + "</td>";
            } else {
                table += `<td id="${count}">` + arr[count] + "</td>";
            }
            count++
        }
        table += "</tr>";
    }
    return table + "</table>";
}
document.body.innerHTML += Table();
