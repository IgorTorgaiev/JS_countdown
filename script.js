function countDown() {
    var theVal = document.getElementById("countDown").innerHTML;
    var otherVal = 0;
    if (theVal > 0) {
        otherVal = theVal - 1;
    }
    document.getElementById("countDown").innerHTML = otherVal;
}