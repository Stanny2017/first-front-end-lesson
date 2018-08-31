

//var n = readline();
var n = 10;
var b = ['0','5 3 0','8 4 0','9 0','9 0','3 0','0','7 9 0','0','9 7 0']
var arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = b[i].replace('0', '').split(' ');
    arr[i].push(i + 1)
}
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].filter(item => item !== '')
    arr[i] = arr[i].map(item => parseInt(item))
}

var fenzu = [arr[0]];
for(let i  = 1;i<arr.length;i++){
    let flag = false;
    for(let j =0;j<fenzu.length;j++){
        
        for(let k =0;k<arr[i].length;k++){
            if(fenzu[j].indexOf(arr[i][k])!==-1){
                fenzu[j] = fenzu[j].concat(arr[i]);
                flag = true;
                break;
            }else continue;
        }
        if(flag){
            break;
        }else{
            
            continue;
        }
    }
    if(!flag){
        fenzu.push(arr[i])
            console.log('after push')
            console.log(fenzu)
    }
}
// print(fenzu.length)