function theReturn(status, change) {
    this.status= status;
    this.change = change;
  }
  function status_change(cashReturn,test,cid){
  
    if(cashReturn>0)
      return(new theReturn("INSUFFICIENT_FUNDS",[]));
    else if(cashReturn == -1)
    {
      return(new theReturn("CLOSED",cid.reverse()));
    }
    else {
      var i = 0;
      var j = 0;
      while(j<test.length && i<cid.length)
      {
        cid[i][1] =test[j++];
          if(cid[i][1] ===0)
            cid.splice(i,1);
          else
            i++;
      }
        return(new theReturn("OPEN",cid));
    }
      
  }
  function cash_(i,price,change)
  {
    var division
   division = parseInt(Math.round((price /change)*100)/100);
  if(division>i)
      return(i )
    else
      return(division)
  }
  function checkCashRegister(price, cash, cid) {
    cid.reverse();
    var test =[];
    var sum = 0;
    var drawer =[100,20,10,5,1,0.25,0.1,0.05,0.01];
    var toReturn = Math.round((cash - price)*100)/100;
    for(let i = 0;i<drawer.length;i++)
    {
      sum += cid[i][1]
      var n = parseInt(cid[i][1]/drawer[i]);
      test.push(drawer[i]*cash_(n,toReturn,drawer[i]));
      toReturn =toReturn - drawer[i]*cash_(n,toReturn,drawer[i]);
      toReturn = Math.round((toReturn)*100)/100;
    }
    if(sum == Math.round((cash - price)*100)/100)
      return(status_change(-1,test,cid));
    return(status_change(toReturn,test,cid));
  }
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));