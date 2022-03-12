
function order(words) {
    if (words === '') return ''

    const wordsArray = words.split(' ');
    let resultArray = []
    wordsArray.forEach(function (elem) {
        let index = elem.match(/\d+/)[0]
        resultArray[index-1] = elem
    })

    return resultArray.join(' ')
}


console.log(order('is2 Thi1s T4est 3a'));
console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
console.log(order(' '));