const btn = document.querySelectorAll(".button")
const input = document.querySelector("input")


const regexValid = /[^0-9/*\-+,]/ //Error if true

let operator
let calcArray = []

const btnArray = ["C", "/", "*", "-", 7, 8, 9, "+", 4, 5, 6, 1, 2, 3, "Enter", 0, ","]

btn.forEach((el, i) => { 
    el.addEventListener('click', () => {
        if(input.value === "ERROR"){
            input.value = ""
        }

        switch(btnArray[i]){            
            case "C": //effacer
                input.value = "";
                console.log(calcArray);
                break
            
            case "+": //addition btn
                if(input.value != ""){
                    calcArray.push(parseFloat(input.value));
                    operator = "add"
                    input.value = "";
                }
                
                console.log(calcArray, operator);
                break

            case "-"://différence btn
                if(input.value != ""){
                    calcArray.push(parseFloat(input.value));
                    operator = "diff"
                    input.value = "";
                }
                
                console.log(calcArray, operator);
                break

            case "*": //multiplication btn
                if(input.value != ""){
                    calcArray.push(parseFloat(input.value));
                    operator = "mul"
                    input.value = "";
                }
                
                console.log(calcArray, operator);
                break

            case "/": //multiplication btn
                if(input.value != ""){
                    calcArray.push(parseFloat(input.value));
                    operator = "div"
                    input.value = "";
                }
                
                console.log(calcArray, operator);
                break


            case "Enter": //enter btn
                if(input.value != ""){
                    calcArray.push(parseFloat(input.value));

                    switch(operator){
                        case "add":
                            input.value = calcArray[0] + calcArray[1];
                            break

                        case "diff":
                            input.value = calcArray[0] - calcArray[1];
                            break

                        case "mul":
                            input.value = calcArray[0] * calcArray[1];
                            break

                        case "div":
                            input.value = calcArray[0] / calcArray[1];
                            break
                    }
                    console.log(calcArray);
                    calcArray = []
                }                
                break    
            
            default: //number btn
                input.value += btnArray[i]
                break
        }
    })
})

const regexValidator = () => { //Erreur si regex return false
    if(regexValid.test(inputValue)){
        input.value = "ERROR"
        return
    }
}


