const Calsiusfield = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const ConvertBtn = document.querySelector("#Convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
    degree.value = "";
    Calsiusfield.innerHTML = "";
})
ConvertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    ConvertTocelsius();

    ConvertBtn.innerHTML = "<span> <i class='fa fa-spinner fa-spin'> </i> Converting ....  </span> ";
    setTimeout(() => {
        ConvertBtn.innerHTML = " <spin> Convert </spin>"
    }, 1000);

})

function ConvertTocelsius() {
    let inputValue = degree.value;
    setTimeout(() => {
        if (tempType.value === "fahrenheit") {
            const fahrenheitTocelsius = (inputValue - 32) * (5 / 9);
            Calsiusfield.innerHTML = `${fahrenheitTocelsius.toFixed()}&deg;
            c`;
        }
        else if (tempType.value === "kalvin") {
            const kelvinTocelsius = inputValue - 273.15;
            Calsiusfield.innerHTML = `${kelvinTocelsius.toFixed()} &deg;
            c`;


        }

    }, 1200);

}
