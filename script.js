
const contents = [
    { title: "Blaugurt", combinations: ["1. ZK irgendwas KYUZ guyai-isui", "2. ZK irgendwatt Zyui-ak"], currentCombination: 0 },
    { title: "Grün", combinations: ["1. ZK irgeni", "2. ZK irgendwatt Zyui-ak"], currentCombination: 0 },
    { title: "Rot", combinations: ["1. ZK irgenidasdasd", "2. ZK irgendwatt Zyui-ak"], currentCombination: 0 },
]

const contents = [
    {
        "title": "5. Kyu (Blau I)",
        "combinations": [
            "1. ZK ->: Kizami-Zuki (YA) + vor Oi-Zuki (Kamae)",
            "2. ZK ->: Gyaku-Zuki (im Stand) + vor Gyaku-Zuki",
            "3. ZK <-: Age-Uke + Gyaku-Age-Empi",
            "4. ZK <-: Gedan-Barai + Gyaku-Mawashi-Empi",
            "5. KK <-: Morote-Uchi-Ude-Uke + ZK Gyaku-Zuki",
            "6. KK ->: Shuto-Uke + ZK Gyaku-Shuto-Uchi Jodan",
            "7. ZK ->: Mae-Ashi-Geri + vor Mawashi-Geri (Kamae)",
            "8. ZK <-: Ushiro-Geri im Rückswärtsgehen ohne Drehung"
        ],
        "currentCombination": 0
    },
    {
        "title": "3. Kyu (Braun I)",
        "combinations": [
            "1. ZK ->: Oi-Zuki + rückwärts Gedan-Barai + vor Oi-Zuki",
            "2. KK ->: Gyaku-Zuki + Kizami-Zuki (im Stand) + vor Gyaku-Zuki",
            "3. KK <-: Age-Uke + Mae-Ashi-Geri + ZK Gyaku-Zuki",
            "4. ZK ->: Uchi-Ude-Uke + Gyaku-Zuki + Kizami-Zuki",
            "5. ZK ->: Mae-Mawashi-Geri + Ushiro-Geri",
            "6. KB <->: Yoko-Geri-Keage (Beistellschritt) + Kekomi (2x l. + 2x r+.)",
            "7. ZK ->: Ura-Mawashi-Geri (alternativ Ashi-Barai, hinteres Bein) + Gyaku-Zuki"
        ],
        "currentCombination": 0
    },
    {
        "title": "2. Kyu (Braun II)",
        "combinations": [
            "1. ZK ->: Uraken-Uchi + Gyaku-Zuki",
            "2. NA <-: Shuto-Uke + Mae-Ashi-Geri + ZK Gyaku-Tate-Nukite",
            "3. ZK <-: Soto-Ude-Uke + KB Yoko-Empi + Yoko-Uraken-Uchi + ZK Gyaku-Zuki",
            "4. SD <-: Uchi-Ude-Uke + ZK Gyaku-Zuki",
            "5. ZK ->: Ashi-Barai (vorderes Bein) + Uraken-Uchi vor Mawashi-Geri + Gyaku-Zuki (Chudan Kamae)",
            "6. ZK ->: Kizami-Zuki (YA) + Gyaku-Zuki + vor Ura-Mawashi (alternativ Ashi-Barai + Gyaku-Zuki) (Chudan Kamae)",
            "7. ZK ->: Kizami-Zuki (YA) + Ushiro-Geri + Gyaku-Zuki (Chudan Kamae)"
        ],
        "currentCombination": 0
    }
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
