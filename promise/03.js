/**
 * 最长的重复dna序列
 */
// var arr = readline.split('');
var arr = '23433344343'.split('')
var len = arr.length;
var result = '';
var maxlen = 0;
for(let i=0;i<len;i++){
    for(let j = i+3;j<len;j++){
        let tmp = arr.slice(i,j+1);
        let left = arr.slice(0,i).join('');
        let right = arr.slice(j+1).join('');
        let center = tmp.join('');
        if(left.indexOf(center)!==-1||right.indexOf(center)!==-1){
            let subLen = center.length;
            if(subLen>maxlen){
                maxlen = subLen;
                result = center;
            }
        }
    }
}

console.log(NumberOf1(2))

function NumberOf1(n)
{
    // write code here
    var count =0;
    var num = parseInt(n).toString(2);
    for(let i =0;i<num.length;i++){
        if(num[i]===1){
            count++
        }
    }
    return count
}
