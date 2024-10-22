
// const things = []
// const entities = []

const spriteList = []; // things that can move on screen 
function position(x, y) {
    return { x: x, y: y };  // Define position function
}


// let  p = position (10,5)
// console.log(p)

function Sprite(nameParameter, kindParameter, posParameter){
    return {
        health: 100,
        name: nameParameter,
        kind: kindParameter,
        position: posParameter,
    };
}
spriteList.push(Sprite("Capt. Lee", "wizard", position(10, 5)));
spriteList.push(Sprite("Capt. paul", "wizard", position(10, 5)));

spriteList.push(Sprite("venom", "parasite", position(20, 10)));
spriteList.push(Sprite("venom", "parasite", position(30, 15)));
spriteList.push(Sprite("venom", "parasite", position(40, 20)));

function printlist(list){
    for (let i = 0; i < list.length; i++){
        console.log(list[i]);
    }
}


function getHeroList(){
    const list = [];
    for (let i = 0; i < spriteList.length; i++){
        if(spriteList[i].kind === "wizard"){
           list.push(spriteList[i]);
        }
    }
    return list;
}
printlist(getHeroList());


function printHero(){
    for (let i = 0; i < spriteList.length; i++){
        if(spriteList[i].kind === "wizard"){
            console.log(i, spriteList[i].kind)
        }
    }
}
printHero()

function printParasite(){
    for (let i = 0; i < spriteList.length; i++){
        if(spriteList[i].kind === "parasite"){
            console.log(i, spriteList[i].kind)
        }
    }
}
printParasite()
// console.log(spriteList[1])
// let s = sprite("Capt. Lee", "wizard", position(10, 5));
// console.log (s.position)

