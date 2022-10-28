function checkCashRegister(price, cash, cid) {
    let change = cash*100 - price*100;
    let cTotal = 0
    for(let e of cid){
      cTotal += e[1]*100
    }
    if(change > cTotal){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } else if(change === cTotal){
      return {status: "CLOSED", change: cid}
    }else{
      let res = []
      cid=cid.reverse()
      let units ={"PENNY":1, "NICKEL":5, "DIME":10, "QUARTER": 25, "ONE":100, "FIVE":500, "TEN":1000, "TWENTY":2000, "ONE HUNDRED": 10000}
  
      for(let e of cid){
        let unitTypes =[e[0],0]
        e[1]=e[1]*100
        while(change >= units[e[0]] && e[1] > 0){
          change -= units[e[0]]
          e[1] -= units[e[0]]
          unitTypes[1] += units[e[0]]/100
        }
        if(unitTypes[1]>0){
          res.push(unitTypes)
        }
      }
      if(change>0){
        return{status:"INSUFFICIENT_FUNDS",change:[]}
      }
      return {status:"OPEN", change:res}
    }
  }
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["  TWENTY", 60], ["ONE HUNDRED", 100]]);