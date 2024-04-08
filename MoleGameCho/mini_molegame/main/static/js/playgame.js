const { createElement } = require("react");

/* 두더지 초기배열 랜덤 섞기 */
function shuffle(molesArray) {
    for (let i = molesArray.length-1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i+1));
        [molesArray[i], molesArray[randomIndex]] = [molesArray[randomIndex], molesArray[i]];
    }
}

function updateScore(point) {
    user_score += point
}

/* 두더지 출몰 제어 */
function paintMole() {

}


window.onload = function(){
    /* 두더지 초기배열 생성 */
    let moles_set = Array(14).fill(1).concat(Array(3).fill(2), Array(3).fill(3));
    shuffle(moles_set)
    console.log(moles_set)

    /* 두더지 엘리먼트 생성 */
    $mole_normal = createElement('div').className('.mole-normal')
    $mole_gold = createElement('div').className('.mole-gold')
    $mole_bomb = createElement('div').className('.mole-bomb')

    /* 사용자 점수 초기화 */
    user_score = 0;

    /* 두더지 클릭 이벤트 */
    $mole_normal.addEventListner("click", ()=>updateScore(10))
    $mole_gold.addEventListner("click", ()=>updateScore(20))
    $mole_bomb.addEventListner("click", ()=>updateScore(-5))
};