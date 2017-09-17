var katzDeli = [];

 function takeANumber(katzDeliLine, name){
   var line = katzDeliLine;
   line.push(name);
   var index = line.indexOf(name)
   index += 1;
   return `Welcome, ${name}. You are number ${index} in line.`;
     }
 
