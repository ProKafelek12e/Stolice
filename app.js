var jsonc = []
var points = 0
var hearts = 3
var wylosowane
const regg = [{n:"Africa",o:1},{n:"Americas",o:1},{n:"Asia",o:1},{n:"Europe",o:1},{n:"Oceania",o:1},]
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
    wylosowane = jsonc[random()]
    che()
    document.getElementById("game").innerHTML = ""
    if(wylosowane.capital== undefined){

        countries()
    }
    else{
        console.log(wylosowane.region)
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
}
function check(){
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
            h1.innerHTML = "Game Over"
            h1.classList.add("go")
            document.getElementById("body").appendChild(h1)
            const p = document.createElement("p")
            p.innerHTML = "Points: "+points
            p.classList.add("p")
            document.getElementById("body").appendChild(p)

            const bt = document.createElement("button")
            bt.setAttribute("onclick","window.location.reload()")
            bt.innerHTML = "Play again"
            bt.classList.add("p")
            document.getElementById("body").appendChild(bt)
        }
    }
}
function reg(){
    document.getElementById("regs").innerHTML = ""
    for(var i=0;i<=regg.length-1;i++){
        const bt =document.createElement("button")
        bt.innerHTML = regg[i].n
        bt.classList.add("br")
        bt.classList.add(`b${regg[i].o}`)
        bt.setAttribute("onclick",`cot(${i})`)
        document.getElementById("regs").appendChild(bt)
    }
}
reg()
function cot(i){
    if(regg[i].o==0){
        regg[i].o = 1
    }
    else{ 
        regg[i].o = 0
    }
    reg()
}
function che(){
    for(var i =0;i<=regg.length-1;i++){
        if(wylosowane.region == regg[i].n){
            if(regg[i].o==0){
                countries()
            }
        }
    }
}
function start(){
    document.getElementById("game").classList.remove("st")
    document.getElementById("playBT").remove()
    countries()
}
