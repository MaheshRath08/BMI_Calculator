const weightEl = document.getElementById("weight")
const heightEl = document.getElementById("height")
const btnEl = document.getElementById("btn")

btnEl.addEventListener("click", ()=>{
    let w = parseFloat(weightEl.value)
    let h = parseFloat(heightEl.value)
    let bmi = w/(h**2)
    console.log(bmi)
})

function BMIclassList(e){
    let message;
    if(e<18.5){
        message = "underweight"
        return message
    }else if(e>18.5 && e<24.9){
        message = "Nornal"
        return message
    }else if(e>25 && e<29.9){
        message = "over weight"
        return message
    }else if(e>=30){
        message = "obese"
        return message
    }
}