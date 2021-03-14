module.exports = function check(str, brack){
  a = str.split("");
  for (let i = 0; i< brack[0].length; i++){

  if(brack[0][i].includes(a[i]) == true){
  return true;}
  else return false;
  }
  }
