const weightEl = document.getElementById("weight")
const heightEl = document.getElementById("height")
const btnEl = document.getElementById("btn")
const pop = document.getElementById("result")
const container = document.querySelector(".container")

btnEl.addEventListener("click", (e)=>{
    e.preventDefault()
    let w = parseFloat(weightEl.value)
    let h = parseFloat(heightEl.value)
    let bmi = w/(h**2)
    let classification = BMIclassList(bmi)
    console.log(classification)
    pop.style.transform = "scale(1)"
    pop.innerHTML = `
    <h1>${classification}</h1><br><h2>Your BMI is: ${bmi}</h2><br>
    <button onclick="location.reload()"><i class="fa-solid fa-rotate"></i></button>`
    container.style.transform = "scale(0)"
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

