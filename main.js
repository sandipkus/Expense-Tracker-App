let nameInputField = document.getElementById('nameInputField');
let dateInputField = document.getElementById('dateInputField');
let amountInputField = document.getElementById('amountInputField');
let statement = document.getElementById('statement');
let btn = document.getElementById('btn');
let table = document.getElementById('myTable');

btn.addEventListener('click', function () {
    let name = nameInputField.value;
    let date = dateInputField.value;
    let amount = amountInputField.value;
    statement.style.display = "none";
    let template = `
                <tr>
                    <td>${name}</td>
                    <td>${date}</td>
                    <td>${amount}</td>
                </tr>`;         
    table.innerHTML += template;
    nameInputField.value = "";
    dateInputField.value = "";
    amountInputField.value = "";
})
