var jsonc = []
var points = 0
var hearts = 3
var wylosowane
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
    document.getElementById("game").innerHTML = ""

    wylosowane = jsonc[random()]
    console.log(wylosowane.capital)
    //div
    const div = document.createElement("div")
    div.setAttribute("id","content")
    //flag
    const flag = document.createElement("img")
    flag.setAttribute("id","flag")
    flag.src = wylosowane.flags.svg
    //name
    const name = document.createElement("h1")
    name.setAttribute("id","name")
    name.innerHTML = wylosowane.name
    //input
    const input = document.createElement("input")
    input.setAttribute("id","inp")
    //button
    const button = document.createElement("button")
    button.innerHTML = "Check"
    button.setAttribute("onclick",'check()')
    button.setAttribute("id","check")

    div.appendChild(flag)
    div.appendChild(name)
    div.appendChild(input)
    div.appendChild(button)
    document.getElementById("game").appendChild(div)
}
function check(i){
    if(document.getElementById("inp").value.toLowerCase()==wylosowane.capital.toLowerCase()){
        points++
        document.getElementById("points").innerHTML = points
        countries()
    }
    else{
        hearts--
        if(hearts==2){
            document.getElementById("hearts").innerHTML = "❤️ ❤️"
        }
        if(hearts==1){
            document.getElementById("hearts").innerHTML = "❤️"
        }
        if(hearts==0){
            document.getElementById("body").innerHTML=""
            document.getElementById("body").classList.remove("body")
            const h1 = document.createElement("h1")
            h1.innerHTML = "game over"
            h1.classList.add("go")
            document.getElementById("body").appendChild(h1)
        }
    }
}