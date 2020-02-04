
(function memoryGame ()
{
var cards     =document.getElementsByClassName("memory-cards");
var winner    =document.getElementById("winner");
var againBtn  =document.getElementById("btn")
var count     =0;
var firstCard =0;
var secondCard=0;
var lock      =0;
var countToWin=0
var this_;

start()
generateRandomCard();
addListenersToCards();

function start ()
{
  //make it lokcked till the user start
  lock=1;
  for(var i=0;i<cards.length;i++)
{
  cards[i].classList.add("show");
  
}

setTimeout(function(){
  for(var i=0;i<cards.length;i++)
  {
    cards[i].classList.remove("show");
    
  }
lock=0;
},3000)

}

function addListenersToCards()
{
  // add listener to each card//
for(var i=0;i<cards.length;i++)
{
  cards[i].addEventListener("click",flippingCard);
}

}

function flippingCard(e)
{
  if (lock==1) return ;
  if(this===firstCard) return;
  this.classList.add("flip");
  this_=this;
  //chechking count(how mani cards does the player flipped till now)
  console.log("flipped")
 chekingHowManyCardsIsFlipped()
  
 

}

function checkIfWinning()
{
  setTimeout(() => {
    if (countToWin===6)
{
  winner.style.opacity="1";
  winner.style.transitionDuration="0.5s"
  }

  }, 500);
}

againBtn.addEventListener("click",function()
{
  console.log("again")
  // window.location.reload(true)
  location.replace("./index.html");
}
  )


function chekingHowManyCardsIsFlipped()
{
  if(count==0)
  {
    count=1;
    firstCard=this_;
  }
  else
  {
    count=0;
    secondCard=this_;
    var firstCardId=firstCard.getAttribute("data-framework");
    var secondCardId=secondCard.getAttribute("data-framework");
/// checking if they are smiliar
       checkingSmilirtyOfChoosenCrads(firstCardId,secondCardId)

  }

}


function checkingSmilirtyOfChoosenCrads(firstCardId,secondCardId)
{
  if(firstCardId===secondCardId)
  {
    //if smiliar
    console.log(firstCardId)
    console.log(secondCardId)
    console.log("yaaay")
    firstCard.removeEventListener("click",flippingCard);
    secondCard.removeEventListener("click",flippingCard);
     lock=1;
    setTimeout(function (){
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      firstCard.classList.add("remove");
      secondCard.classList.add("remove");
      // lock=0;
      restCinfigrations()
      countToWin++;
      checkIfWinning ();
                            },1500);
   }
   else 
   {
     console.log(firstCardId)
    console.log(secondCardId)
     //if not similar
     lock=1;
     setTimeout(function (){
     firstCard.classList.remove("flip");
     secondCard.classList.remove("flip");
    //  lock=0;
     restCinfigrations()
                           },1500);

   }
}


function restCinfigrations()
{
  firstCard=0;
  secondCard=0;
  lock=0;
  count=0;
}


function generateRandomCard()
{
  for (var i=0;i<cards.length;i++)
  {
    var random=Math.floor((Math.random())*12);
    console.log(random)
    cards[i].style.order=random;
  }
}


})();

