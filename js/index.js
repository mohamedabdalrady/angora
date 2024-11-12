
function randomtext() {


var quotes = [  "You miss 100% of the shots you don't take." ,  "Do not take life too seriously. You will not get out alive.",  "It's not what happens to you, but how you react to it that matters." , "Do not take life too seriously. You will not get out alive."  ,"Resentment is like drinking poison and waiting for your enemies to die."      ]

var usename =[   " --Wayne Gretzy" , "--Elbert Hubbard"  , "--Epictetus",    "--Elbert Hubbard" ,  "--Nelson Mandela" ,    ]

var num = Math.floor(   Math.random ()   * usename.length     )

  
document.getElementById("demo").innerHTML=quotes[num]

document.getElementById("user").innerHTML=usename[num]  

}


                