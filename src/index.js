module.exports = function check(str, bracketsConfig) {
    if (str.length %2 !==0){
    return false
    }
      bracketsConfig.forEach((num) => {
        const connect = num.join('');
        if(str.includes(connect)){
          str = str.replace(connect, '')
          return connect
        }
    });
if (str.length !== 0){
  return false
} else{
  return true
}
}

