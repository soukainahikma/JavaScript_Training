function palindrome(str) {
    str = str.toLowerCase();
    str = str.split(/[\s.)(,*,#._/-]+/);
    str =str.join("")
    let arr = str;
    var j = str.length-1;
    for(let i = 0;i < arr.length/2;i++)
    {
      if(str[i] == arr[j] && j>0)
        j--;
      else{
        console.log(str[i])
        return(false);}
    }
    return true;
  }
  console.log(palindrome("eye"));