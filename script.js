// Function to update the display value
function updateDisplay(value) {
    document.querySelector(".display input[name='display']").value = value;
}

// Function to handle button clicks
function buttonClick(input) {
    var displayValue = document.querySelector(".display input[name='display']").value;

    if (input === 'AC') {
        updateDisplay('');
    } else if (input === 'DE') {
        updateDisplay(displayValue.slice(0, -1));
    } else if (input === '=') {
        updateDisplay(addbits(displayValue));
    } else {
        updateDisplay(displayValue + input);
    }
}

let numbers = document.querySelectorAll('.operator,.operator1')

numbers.forEach(function(number){
    number.addEventListener('click',function(){
        
        buttonClick(number.value);
        
    })
})


function addbits(displayValue) {
    try {
        return math.evaluate(displayValue);
    } catch (error) {
        // Handle any potential evaluation errors
        alert('Error: ' + error.message);
        return 0;
    }
}