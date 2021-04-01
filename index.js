function scuberGreetingForFeet(someValue){
  let result
  if (someValue <= 400) {result = "This one is on me!"}
  else if (someValue > 2500) {result = "No can do."}
  else if (someValue > 2000) {result = "I will gladly take your thirty bucks."}
  return result
}

function ternaryCheckCity(someCity){
  let returnCity
  someCity === "NYC" ? (returnCity = "Ok, sounds good.") : (returnCity = "No go.")
  return returnCity
}

function switchOnCharmFromTip(tipAmount){
  let response
  switch (tipAmount) {
    case 'generous': response = 'Thank you so much.'
    break;
    case 'not as generous': response = 'Thank you.'
    break;
    default: response = 'Bye.'
  }
  return response
}