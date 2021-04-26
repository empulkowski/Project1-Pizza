$(document).ready(function () {

    $("#tabs a").on("click", showTab);

});

// REMINDER This function is required by Bootstrap to show/hide the selected tab
function showTab(event) {
    event.preventDefault();
    $(this).tab("show");
}

let size =$('input[name="size"]:checked').value;






//deterimine pizzq size

//determine how many meats
//multiply meats by 1.50

//determine how many veggies
//multiply veggies by 1.00

//add together totals



