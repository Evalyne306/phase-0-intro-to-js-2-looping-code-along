

// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names,event) {
  let messages = []
  for (let i = 0; i < names.length; i++) {
    const message= `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    messages.push(message)
  }

  return messages;
}



const countDown= function (n){
  while(n>=0){
    console.log(n);
    n--
  }
}
 

