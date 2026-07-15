
const contents = [
    { title: "Blaugurt", combinations: ["1. ZK irgendwas KYUZ guyai-isui", "2. ZK irgendwatt Zyui-ak"], currentCombination: 0 },
    { title: "Grün", combinations: ["1. ZK irgeni", "2. ZK irgendwatt Zyui-ak"], currentCombination: 0 },
    { title: "Rot", combinations: ["1. ZK irgenidasdasd", "2. ZK irgendwatt Zyui-ak"], currentCombination: 0 },
]

let selectedIndex = -1  // all
let editBelts = false




function drawContents() {
    document.querySelector("main").innerHTML = ""
    for(let i = 0; i < contents.length; i++) {
        const div = document.createElement("div")
        const title = document.createElement("h2")
        title.innerText = contents[i].title
        const p = document.createElement("p")
        p.innerText = contents[i].combinations[contents[i].currentCombination]

        div.appendChild(title)
        div.appendChild(p)
        document.querySelector("main").appendChild(div)

        if(i !== selectedIndex && selectedIndex !== -1) {
            div.style.backgroundColor = "#fbfbfb28"
        }
    }
}


function arrow(e) {
    if(e.key === "ArrowDown") {
        selectedIndex++
        if(selectedIndex >= contents.length) selectedIndex = -1
    }
    if(e.key === "ArrowUp") {
        selectedIndex--
        if(selectedIndex < -1) selectedIndex = contents.length-1
    }
    if(e.key === "ArrowRight") {
        
        if(selectedIndex == -1) {
            contents.forEach(c => {
                if(c.combinations[c.currentCombination+1] != undefined)
                c.currentCombination++;
            })
        }
        else if(contents[selectedIndex].combinations[contents[selectedIndex].currentCombination+1] != undefined)
            contents[selectedIndex].currentCombination++
        
    }
    if(e.key === "ArrowLeft") {
        
        if(selectedIndex == -1) {
            
            contents.forEach(c => {
                if(c.combinations[c.currentCombination-1] == undefined) return
                c.currentCombination--;
            })
        }
        else if(contents[selectedIndex].combinations[contents[selectedIndex].currentCombination-1] != undefined)
            contents[selectedIndex].currentCombination--
        
    }



    drawContents()


}





drawContents()
document.addEventListener("keydown", arrow)
document.addEventListener("keydown", e => {
    if(e.key === "e") editBelts = !editBelts
})
