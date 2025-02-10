function rainAmount(mm){
   var levelWater 
  
    if (mm < 40) {
         levelWater = 40 - mm;
         return "You need to give your plant " + levelWater + "mm of water";
    }
    else{
         return "Your plant has had more than enough water for today!";
    }
}