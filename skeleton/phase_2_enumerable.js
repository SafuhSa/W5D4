Array.prototype.myEach = function (cb){
  var i = 0;
  while (i < this.length) {
    cb(this[i]);
    i++;
  }
};

Array.prototype.myMap = function(cb){
  var i = 0;
  var result = [];
  while (i < this.length) {
    result.push(cb(this[i]));
    i++;
  }
  return result;
};
 

Array.prototype.myReduce = function(cb, acc) {
  
  if (acc == undefined) {
    var i = 1; 
    result = this[0];      
  } else  {
      var i = 0;
      result = acc;
  }
    

  while (i < this.length) {
    acc = cb(acc, this[i]);
    i++;
  }
  return acc;
};

