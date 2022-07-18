const weightEl = document.getElementById("weight")
const heightEl = document.getElementById("height")
const btnEl = document.getElementById("btn")

btnEl.addEventListener("click", ()=>{
    let w = parseFloat(weightEl.value)
    let h = parseFloat(heightEl.value)
    let bmi = w/(h**2)
    console.log(bmi)
})