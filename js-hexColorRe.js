const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function randomHexGen () {
    let hexResult = "#";
    for (i=0; i<6; i++) {
        hexResult += hexArray[Math.floor(Math.random()*hexArray.length)]
    }
    document.querySelector(".hexCode").innerHTML = hexResult;
    document.querySelector("body").style.backgroundColor = hexResult;
}

function init() {
    randomHexGen();
}

init();






/* hexResult = [Math.floor(Math.random()*hexArray)] 로 썼을 경우
hexResult = [Math.floor(Math.random()*hexArray)]
hexResult = [Math.floor(Math.random()*hexArray)]
hexResult = [Math.floor(Math.random()*hexArray)]
hexResult = [Math.floor(Math.random()*hexArray)]
hexResult = [Math.floor(Math.random()*hexArray)]
hexResult = [Math.floor(Math.random()*hexArray)] 과 다를게 없음 

다만 hexResult += [Math.floor(Math.random()*hexArray)] 의 경우 
hexResult = hexResult + [Math.floor(Math.random()*hexArray)] 

배열의 값에 접근할때는 [] 

주석의 주석처리 //* //*/




//*/

