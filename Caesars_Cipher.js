function rot13(str) {
    var arr = []
    for(let i = 0;i<str.length;i++)
    {
      if(str[i]>="a" && str[i]<="m" ||str[i]>="A" && str[i]<="M")
      arr.push(...String.fromCharCode(str[i].charCodeAt(0) +13));
      else if(str[i]>="n" && str[i]<="z" ||str[i]>="N" && str[i]<="Z")
      arr.push(...String.fromCharCode(str[i].charCodeAt(0) -13));
      else
        arr.push(str[i])
    }
    arr = arr.join("")
    return(arr)
  }
  console.log(rot13("SERR CVMMN!"));