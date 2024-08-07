
let btn=document.querySelector("#btn");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    let num1 = document.querySelector("#firstnumber").value
    let num2 = document.querySelector("#secondnumber").value
    let add = document.querySelector("#add")
    let mutply = document.querySelector("#multiply")
    let sbtrct = document.querySelector("#minus")
    let dvsn = document.querySelector("#divide")
    let result = document.querySelector("#sum")

    if (num1 == "" || num2 == "") {
        alert("All fields are mandatory to fill")
        return false
    } else if (add.checked !== true && mutply.checked !== true && sbtrct.checked !== true && dvsn.checked !== true) {
        alert("Please select an operation");
        return false
    } else if (add.checked) {
        result.value = parseInt(num1) + parseInt(num2);
    } else if (mutply.checked) {
        result.value = parseInt(num1) * parseInt(num2);
    } else if (sbtrct.checked) {
        result.value = parseInt(num1) - parseInt(num2);
    } else if (dvsn.checked) {
        result.value = parseIntr(num1) / parseInt(num2);
    }
})