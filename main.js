const weightEl = document.getElementById("weight")
const heightEl = document.getElementById("height")
const btnEl = document.getElementById("btn")
const pop = document.getElementById("result")

btnEl.addEventListener("click", (e)=>{
    e.preventDefault()
    let w = parseFloat(weightEl.value)
    let h = parseFloat(heightEl.value)
    let bmi = w/(h**2)
    let classification = BMIclassList(bmi)
    console.log(classification)
    pop.innerHTML = `
    <h1>${classification}</h1><br><h2>Your BMI is:${bmi}</h2><br>
    <button><i class="fa-solid fa-rotate"></i></button>`
})

function BMIclassList(e){
    let message = "";
    if(e<18.5){
        message = "under weight"
    }else if(e>18.5 && e<24.9){
        message = "Normal"
    }else if(e>24.9 && e<29.9){
        message = "over weight"
    }else if(e>=30){
        message = "obese"
    }
    return message
}