const btn = document.querySelectorAll(".button")
const input = document.querySelector("input")
let inputValue

const regex = /[0-9]\*-\.\//

const btnArray = ["C", "/", "*", "-", 7, 8, 9, "+", 4, 5, 6, 1, 2, 3, "Enter", 0, "."]

btn.forEach((el, i) => { 
    el.addEventListener('click', () => {
        if(btnArray[i] === "Enter"){
            inputValue = input.value;
            input.value = "";
            console.log(inputValue);
            regexValid() //regex validator call
        }else if(btnArray[i] === "C"){
            input.value = "";
        }else{
            input.value += btnArray[i]
        }
    })
})

const regexValid = () => { //Erreur si regex return false
    const isInputValid = regex.test(inputValue)

    if(!isInputValid){
        input.value = "ERROR"
        return
    }
}





