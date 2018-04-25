function theBeatlesPlay(musicians, instruments) {
  var list = [];
  for (var i=0; i<musicians.length; i++) {
    list.push(musicians[i] +" plays "+instruments[i]);
  }//end loop
return list;
}//end function

function johnLennonFacts (facts) {
  var i=0
  var factsWithExc = []
  while (i<facts.length) {
    factsWithExc[i] = facts[i] + "!!!"
    i++
  }//end loop
  return factsWithExc
}//end function

function iLoveTheBeatles (number) {
  do console.log("I love the Beatles!")
  while 
}