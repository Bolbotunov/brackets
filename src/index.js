module.exports = function check(str, bracketsConfig) {
    let arr = [];
    str = str.split('');
    let open = [];
    let close = [];
        for(let i = 0; i < bracketsConfig.length ; i += 1) {
            open.push(bracketsConfig[i][0]);
            close.push(bracketsConfig[i][1]);
        }
        for(let i = 0; i < str.length; i += 1) {
    
           if(open.includes(str[i])) {
            if(close.includes(str[i]) && arr[arr.length - 1] === str[i]) {
                arr.pop();
            } else {
                arr.push(str[i]);
            }

           } else {
            let pair = open[close.indexOf(str[i])]
            if(arr.length === 0 || pair !== arr.pop()) return false;
           }
        }
        return arr.length === 0;
    }
