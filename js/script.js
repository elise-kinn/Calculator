const btn = document.querySelectorAll(".button")
const input = document.querySelector("input")


const regexValid = /[^0-9/*\-+,]/ //Error if true

let operator
let calcArray = []

const btnArray = ["C", "/", "*", "-", 7, 8, 9, "+", 4, 5, 6, 1, 2, 3, "Enter", 0, ","]

const operation = (ope) => { //operation fuction
    if(input.value == ""){
        return;
    }
    
    calcArray.push(parseFloat(input.value));
    operator = ope
    input.value = "";
}

btn.forEach((el, i) => { 
    el.addEventListener('click', () => {
        if(input.value === "ERROR"){
            input.value = ""
        }

        if(regexValid.test(input.value)){
            input.value = "ERROR"
            return
        }

        switch(btnArray[i]){            
            case "C": //effacer
                calcArray = []
                input.value = "";
                console.log(calcArray);
                break
            
            case "+": //addition btn
                operation("add")
                
                console.log(calcArray, operator);
                break

            case "-"://différence btn
                operation("diff")
                
                console.log(calcArray, operator);
                break

            case "*": //multiplication btn
                operation("mul")
                
                console.log(calcArray, operator);
                break

            case "/": //multiplication btn
                operation("div")
                
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
                            if (calcArray[1] === 0) {
                                input.value = "ERROR";
                            } else {
                                input.value = calcArray[0] / calcArray[1];
                            }
                            break
                    }

                    calcArray = [parseFloat(input.value)]
                    console.log(calcArray);
                }                
                break    
            
            default: //number btn
                input.value += btnArray[i]
                break
        }
    })
})
