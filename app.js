var jsonc = []
async function getData(){
    const datac = await fetch("https://restcountries.com/v2/all")
    jsonc = await datac.json()
}
getData()
function random(){
    max=jsonc.length-1
    return Math.floor(Math.random() * max)
}
function countries(){
    var i = random()
    console.log(jsonc[i].capital)
    //div
    const div = document.createElement("div")
    div.setAttribute("id","content")
    //flag
    const flag = document.createElement("img")
    flag.setAttribute("id","flag")
    flag.src = jsonc[i].flags.svg
    //name
    const name = document.createElement("h1")
    name.setAttribute("id","name")
    name.innerHTML = jsonc[i].name
    //input
    const input = document.createElement("input")
    input.setAttribute("id","inp")
    //button
    const button = document.createElement("button")
    button.innerHTML = "Check"
    button.setAttribute("id","check")

    div.appendChild(flag)
    div.appendChild(name)
    div.appendChild(input)
    div.appendChild(button)
    document.getElementById("game").appendChild(div)
}