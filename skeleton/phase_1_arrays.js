
  Array.prototype.uniq = function () {
    var result = [];
    
    for (var i = 0; i < this.length; i++) {
      var num = this[i];
      
      if (!result.includes(num)) {
        result.push(num);
      }
    }
    
    return result;
  };
  
  
  Array.prototype.twoSum = function () {
    let result = [];
    
    for (let i = 0; i < this.length -1; i++){
      var num = this[i];
      for(let j = i+1; j < this.length; j++){
        var num2 = this[j];
        if (num + num2 === 0){
          result.push(i,j);
        }
      }
    }
    return result;
  };
  
  Array.prototype.transpose = function () {
    result = [];
    for (var i = 0; i < this[0].length; i++) {
      result.push([]);
    }
    
    for(var j = 0; j < this.length; j++) {
      let sub = this[j];
      for (var k = 0;  k < sub.length; k++) {
        result[k][j] = this[j][k];
      }
    }
    return result;
  };
  
  var arr = [[1, 2, 3], [4, 5, 6]];


  
  
  
  
  

  
  
  
  
  
  
  
  
  
  