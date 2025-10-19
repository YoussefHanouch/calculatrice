function egale() {
    let N1 = parseFloat(document.getElementById("nb1").value);
    let N2 = parseFloat(document.getElementById("nb2").value);
    let res = document.getElementById("ress");

    let addition = document.getElementById("add");
    let soustr = document.getElementById("sous");
    let multiplication = document.getElementById("mul");
    let division = document.getElementById("div");
    let modulo = document.getElementById("mod");
    let power = document.getElementById("pow");

    if (addition.checked) {
        res.innerHTML = "Result: " + (N1 + N2);
    } else if (soustr.checked) {
        res.innerHTML = "Result: " + (N1 - N2);
    } else if (multiplication.checked) {
        res.innerHTML = "Result: " + (N1 * N2);
    } else if (division.checked) {
        if (N2 !== 0) {
            res.innerHTML = "Result: " + (N1 / N2);
        } else {
            alert("Division by zero is not allowed!");
        }
    } else if (modulo.checked) {
        if (N2 !== 0) {
            res.innerHTML = "Result: " + (N1 % N2);
        } else {
            alert("Modulo by zero is not allowed!");
        }
    } else if (power.checked) {
        res.innerHTML = "Result: " + Math.pow(N1, N2);
    } else {
        alert("Please select an operation!");
    }
}
