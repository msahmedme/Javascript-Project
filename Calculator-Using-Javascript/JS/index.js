var resultField = $(".display");

function insertNumber(number){
    var existingNumber = resultField.val()
    $(".display").val(existingNumber + number);
}

function clearResult(){
    resultField.val('');
}

function del(){
    var currentValue = resultField.val();
    if(currentValue !=""){
        resultField.val(resultField.val().slice(0, -1));
    }
}

function calculate(){
    var result = eval(resultField.val())
    resultField.val('')
    resultField.val(result)

}

function percentage(){
    let number = resultField.val();

    resultField.val(eval(number/100))
}