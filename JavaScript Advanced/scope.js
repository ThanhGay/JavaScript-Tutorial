logger = (first, last) => console.log(first, last)

logger('Son', 'Dang')
logger('Duc', 'Thanh')


function makeCounter () {
    let count = 0

    function counter() {
        return count++
    }

    return counter
}

const count1 = makeCounter()
console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());