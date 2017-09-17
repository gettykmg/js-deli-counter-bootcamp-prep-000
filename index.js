var katzDeli = [];

 function takeANumber(katzDeliLine, name){
   var line = katzDeliLine;
   line.push(name);
   var index = line.indexOf(name)
   index += 1;
   return `Welcome, ${name}. You are number ${index} in line.`;
     }

function nowServing(katzDeliLine) {
  var line = katzDeliLine
  if (line.length > 0) {
    var now = line.shift();
    return `Currently serving ${now}.`;
  } else if (line.length === 0) {
    return "There is no one waiting to be served!"
  }
}

        
