do {
    var numberOfStairs = prompt('vvedite skolko simvolov doljno bit')
} while (numberOfStairs == ' ' || numberOfStairs <= 0) {

}

if(isNaN(numberOfStairs)){
    numberOfStairs=5
}

do {
    var firstSymbol = prompt('vvedite pervy simvol')
} while (firstSymbol == ' ' || firstSymbol <= 0) {

}

do {
    var lastSymbol = prompt('vvedite simvol v konse')
} while (lastSymbol == ' ' || lastSymbol <= 0) {

}

for (var i = 0; i < numberOfStairs; i++) {
    lastSymbol
    console.log(lastSymbol);
    lastSymbol = firstSymbol + lastSymbol


}
