const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let displayEl = document.getElementById("display-el");

let generateEl = document.getElementById("generate-el")
generateEl.addEventListener("click", function(){
  let item1 = Math.floor(Math.random() * characters.length);
  let item2 = Math.floor(Math.random() * characters.length);
  let item3 = Math.floor(Math.random() * characters.length);
  let item4 = Math.floor(Math.random() * characters.length);
  let item5 = Math.floor(Math.random() * characters.length);
  let item6 = Math.floor(Math.random() * characters.length);
  let item7 = Math.floor(Math.random() * characters.length);
  let item8 = Math.floor(Math.random() * characters.length);
  let item9 = Math.floor(Math.random() * characters.length);

  password = [
    characters[item1],
    characters[item2],
    characters[item3],
    characters[item4],
    characters[item5],
    characters[item6],
    characters[item7],
    characters[item8],
    characters[item9]
  ]

  displayEl.textContent = password.join('');
})
