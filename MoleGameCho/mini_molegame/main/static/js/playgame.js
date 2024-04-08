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
function paintMole(moleType, $normal, $gold, $bomb) {
    let $targetMole; // 두더지 종류
    let targetLocation = Math.floor(Math.random() * 9) + 1 // 두더지 위치
    const $target_hole = document.querySelector(`#playground > div:nth-child(${targetLocation})`)


    switch(moleType) {
        case 1:
            $targetMole = $normal;
            break;
        case 2:
            $targetMole = $gold;
            break;
        case 3:
            $targetMole = $bomb;
            break;
    }

    // console.log(targetLocation, '--홀 위치')
    // console.log(targetMole, '--두더지 종류')
    console.log($target_hole, '--홀 엘리먼트')

    $target_hole.appendChild($targetMole);
    


}


window.onload = function(){
    /* 두더지 초기배열 생성 */
    let moles_set = Array(14).fill(1).concat(Array(3).fill(2), Array(3).fill(3));
    shuffle(moles_set)
    console.log(moles_set)

    /* 두더지 엘리먼트 생성 */
    const $mole_normal = document.createElement('div')
    $mole_normal.className = 'mole-normal';
    const $mole_gold = document.createElement('div')
    $mole_gold.className = 'mole-gold';
    const $mole_bomb = document.createElement('div')
    $mole_bomb.className = 'mole-bomb';

    /* 사용자 점수 초기화 */
    user_score = 0;

    /* 두더지 클릭 이벤트 */
    $mole_normal.addEventListener("click", ()=>updateScore(10))
    $mole_gold.addEventListener("click", ()=>updateScore(20))
    $mole_bomb.addEventListener("click", ()=>updateScore(-5))
    $ground = document.querySelector("#playground");

    paintMole(3, $mole_normal, $mole_gold, $mole_bomb);
};