const apiKey = "0135c0a7a5199009d87f7fcf4cd208b9";

let btn = document.getElementById('btn')

btn.addEventListener('click',
    async function sharuk(){
    let input = document.getElementById('input').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;
    let result = await fetch(url);
    let result1 = await result.json();
    // console.log(result1)
    try{
    let div = document.getElementById('div');
    console.log(div)
    if((result1.cod == 200)){
    div.innerHTML = `
    <h1>${result1.clouds.all}</h1>
    <h1>${result1.main.feels_like}</h1>
    <h1>${result1.main.grnd_level}</h1>
    <h1>${result1.main.humidity}</h1>
    <h1>${result1.main.pressure}</h1>
    <h1>${result1.main.feels_like}</h1>
    `;
}
else{
    alert('Enter the correct city name')
}} catch (error) {
        console.log(error)
}
})
