module.exports = function reverse (n) {
  let digits=Array.from(n.toString().replace('-','').split(''),Number); 
  let reversedDigits=[];
  
  for (let i=0;i<digits.length;i++){
    reversedDigits[i]=digits[digits.length-1-i];
  }
  
  return Number(reversedDigits.join(''));
  
}
