let input_text = document.getElementById('input_box');
let add_btn = document.getElementById('add_btn');
let tbl_container = document.getElementById('tbl_container');
var tbl = document.createElement('table');
let clear_btn = document.getElementById('clear_btn');
let alert_box = document.getElementById('alert');
       
function add_to_tbl() {
    if (input_text.value == null || input_text.value == "") {
            alert_box.classList.add('expand');   
    }
    else {
        alert_box.classList.remove('expand'); 
        tbl.id = "todo_tbl";
        let tr = document.createElement('tr');
        var td_checks = document.createElement('td');
        var td_status = document.createElement('td');
        var td_input = document.createElement('td');

        td_checks.innerHTML = "<input type='checkbox' class='tbl_check' onchange='line_through(this)'/>";
        td_input.innerHTML = input_text.value;
        td_status.innerHTML = 'Incomplete';
        td_input.style.cssText = "width: " + (input_text.value).length + "px; font-size: 20px"
        td_status.style.cssText = "color:red;"
        tr.className = "tbl_rows";
        tr.appendChild(td_checks);
        tr.appendChild(td_input);
        tr.appendChild(td_status);
        tbl.appendChild(tr);
        tbl_container.appendChild(tbl);

        td_checks.querySelector('input').addEventListener('change', function () {
            line_through(this, td_input, td_status);
        });
        input_text.value = "";
        line_through(td_checks.querySelector('input'), td_input, td_status);
    }
}


function clear_tasks() {
    tbl.innerHTML = "";
    input_text.value = "";
}


function line_through(chk_box, td_input, td_status) {
    try {
        if (chk_box.checked) {
            td_input.style.cssText = "font-size: 20px;text-decoration: line-through;text-decoration-thickness: 20%; color: rgb(194, 194, 194);";
            td_status.innerText = "Completed";
            td_status.style.cssText = "color:green;";
        }
        else {
            td_input.style.cssText = "text-decoration: none;font-size: 20px"
            td_status.innerText = "Incomplete";
            td_status.style.cssText = "color:red;";
        }
    } catch (error) {
        console.error(error.message);
    } finally {
        //console.log("Execution completed.");
    }
}


add_btn.addEventListener('click', add_to_tbl);
clear_btn.addEventListener('click', clear_tasks);