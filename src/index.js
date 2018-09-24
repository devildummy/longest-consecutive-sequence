module.exports = function longestConsecutiveLength(array) {
  let max=1;current=1;
  if(array.length==0){
    return 0;
  }
  array.sort(function(a,b){return a-b;});
  for(let i=1;i<array.length;i++){
    if(array[i]-array[i-1]==1){
      current++;
    }else if(array[i]==array[i-1]){
      current=current;
    }else{
      current=1;
    }

    if(current>max){
      max=current;
    }
  }
  return max;
};
