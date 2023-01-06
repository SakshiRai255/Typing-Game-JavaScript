let sentences = [
  "MOTHER dear said a little mouse one day. I think the people in our house must be very kind; don’t you?",
  "They leave such nice things for us in the larder.”",
  "“Well, my child, no doubt they are very well in their way,",
  "but I don’t think they are quite as fond of us as you seem to think.",
  "Now remember, Greywhiskers,",
  "I have absolutely forbidden you to put your nose above the ground unless I am with you,",
];


let userTextarea = document.getElementById("userTextarea");
let showText = document.getElementById("showText");
let btn = document.querySelector(".btn");
let startTime, endTime;

const playGame = () => {
  let randomNumber = Math.floor(Math.random() * sentences.length);
  showText.innerText = sentences[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  console.log(startTime);
  btn.innerText = "Done";
};

const endGame = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;
  console.log(totalTime);

  let totalStr = userTextarea.value;
  let wordCount = wordCounter(totalStr);
  let speed = Math.round((wordCount / totalTime) * 60);
  let finalMessage = "You type total at "+ speed + " words per minutes ";

 finalMessage = finalMessage+compareWords(showText.innerText,totalStr)
  showText.innerText = finalMessage;
};

const compareWords = (str1,str2)=>{
let words1 = str1.split(" "); 
let words2 = str2.split(" ");
let count = 0; 

words1.forEach(function (item, index){
    if (item == words2[index]) {
        count++;
    }
});
let errorWords = (words1.length - count);
return (count + " correct out of " + words1.length + " words and the total number of error are "+ errorWords + " .")
}

const wordCounter = (str) => {
  let response = str.split(" ").length;
  return response;
};

btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    userTextarea.disabled = false;
    playGame();
  } else if (this.innerText == "Done") {
    userTextarea.disabled = true;
    endGame();
  }
});
