/**
 * 思路：遍历左右括号之间
 */

function isLegal(str) {

    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '(' && str[i] !== ')') return false;

        if (str[i] === '(') {
            arr.push('(');
        } else if (arr.length) {
            arr.pop()
        } else {
            return false
        }
    }
    if (arr.length === 0) {
        return true
    } else {
        return false
    }
}

function getResult(str) {
    let maxLen = 0,
        resultArr = [],
        legalStr = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = str.length - 1; j > 0; j--) {
            if (str[i] === '(' && str[j] === ')') {
                legalStr = str.slice(i, j+1);
                if (isLegal(legalStr)) {
                    resultArr.push(legalStr)
                }
            }
        }
    }
    // console.log(resultArr)
    resultArr = resultArr.map((item => item.length))
    // console.log(resultArr)
    return Math.max.apply(null, resultArr)

}
console.log(getResult('(()))'))