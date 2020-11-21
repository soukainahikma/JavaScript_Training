function convertToRoman(num) {
    let str = (num + '').split("")
    let result = [];
    let arr1 = ["I","II","III","IV","V","VI","VII","VIII","IX"];
    let arr2 = ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
    let arr3 =["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
      for(let i = str.length-1; i>=0; i--){
          if(result.length==0)
              result.unshift(arr1[str[i]-1])
          else if(result.length==1)
              result.unshift(arr2[str[i]-1]);
          else if(result.length==2)
              result.unshift(arr3[str[i]-1]);
          else if(result.length==3)
              result.unshift("M".repeat(str[i]));
          }
    result = result.join("");
   return result;
  }
  console.log(convertToRoman(3999));