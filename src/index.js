module.exports = function longestConsecutiveLength(array) {
  let max=1,current=1,must={},last;
  if(array.length==0){
    return 0;
  }
  array.forEach(function(item,i){must[item]=i;});
  for(let i=0;i<array.length;i++){
    if(must[array[i]+1]>=0){
        if(current<=1){
          last=i;
        }
      current++;
      i=must[array[i]+1]-1;
    }else{
      if(current==1 && !array[i+1]){
        break;
      }else if(current!=1){
        i=last;
      }
      current=1;
    }

    if(current>max){
      max=current;
    }
  }
  return max;
};
