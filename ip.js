function totalProduction(){
    var shedA = {
      name: "Shed A",
      cows: 34,
      avgProd: 15
    } 
    var shedB = {
      name: "Shed B",
      cows: 11,
      avgProd: 28
    } 
    var shedC = {
      name: "Shed C",
      cows: 27,
      avgProd:18
    } 
    var shedD = {
      name: "Shed D",
      cows: 52,
      avgProd: 11
    } 
    var farm = [shedA, shedB, shedC, shedD];
  
    var sum = 0;
    for(var i = 0; i < farm.length; i++){
      sum += farm[i].cows * farm[i].avgProd;
      console.log("Your production in " + farm[i].name +" "+ farm[i].cows * farm[i].avgProd + " litres per day");
    }
    console.log("The total production is " +sum+ " litres per day");
    return sum;
  }
  console.log("Function for calculating the income the farmer receives over time.");
  function incomeOverTime(selling_price, time){
    
    var milk = totalProduction();
    amount = milk * selling_price * time;
    console.log("Your weekly income will be Ksh " +milk * selling_price * 7);
    console.log("Your yearly income will be Ksh " +milk * selling_price * 365);
    
    var months = [
      {
        name: "January",
        days: 31
      },
      {
        name: "February",
        days: 29
        },
      {
        name: "March",
        days: 31
        },
      {
        name: "April",
        days: 30
        },
      {
        name: "May",
        days: 31
        },
      {
        name: "June",
        days: 30
        },
      {
        name: "July",
        days: 31
        },
      {
        name: "August",
        days: 31
        },
      {
        name: "September",
        days: 30
        },
      {
        name: "October",
        days: 31
        },
      {
        name: "November",
        days: 30
        },
      {
        name: "December",
        days: 31
        }];
        
        for(var i = 0; i < months.length; i++){
      console.log("Your income for " +months[i].name+ " is "  +milk * selling_price * months[i].days);
    }
  }
  incomeOverTime(45, 100);
  
  console.log("\n")
  console.log("Function to compare milk revenue at different prices");
  function comparePriceDiff(price1, price2){
    var milk = totalProduction();
    
    var months = [
    {
      name: "January",
      days: 31
    },
    {
      name: "February",
      days: 29
      },
    {
      name: "March",
      days: 31
      },
    {
      name: "April",
      days: 30
      },
    {
      name: "May",
      days: 31
      },
    {
      name: "June",
      days: 30
      },
    {
      name: "July",
      days: 31
      },
    {
      name: "August",
      days: 31
      },
    {
      name: "September",
      days: 30
      },
    {
      name: "October",
      days: 31
      },
    {
      name: "November",
      days: 30
      },
    {
      name: "December",
      days: 31
      }
    ];
    for(var i = 0; i < months.length; i++){
      var amount1 = milk * months[i].days * price1;
      var amount2 = milk * months[i].days * price2;
      var amount3 = amount2 - amount1;
      console.log("Price at price " +price1+ " for " +months[i].name+ " is " +amount1 );
      console.log("The difference from previous rate of " +price2+ " is " +amount3);
      
    }
  }
  
  comparePriceDiff(45, 49.60);
    
    