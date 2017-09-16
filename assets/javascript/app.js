$(document).ready(function() {
  

var audio = new Audio("soulgloextended.mp3");
audio.play();

//Score variables
var correct = 0;
var incorrect = 0;
var missed = 0;
  
  
var userAns = [];
  
  
//Questions with the Answers Array
var questions = [
{
  question: "1. Movie this song is from?",
  choices: ["a. The Breakfast Club", "b.  Big Trouble in Little China", "c. Howard the Duck", "d. Coming to America"],
  choicesAnswer: 3
},
{
  question: "2. Who was too Legit to Quit?",
  choices: ["a. Doogie Howser", "b. The Little Engine that Could", "c.  MC Hammer", "d. Diana Ross and the Supremes"],
  choicesAnswer: 2
},
{
  question: "3. Who sang Ice Ice Baby",
  choices: ["a. Queen", "b. Vanilla Ice", "c. The Muppets", "d. The Ice Queen"],
  choicesAnswer: 1
},
{
  question: "4. Who Pitied the Fool?",
  choices: ["a. Mr. Miyagi", "b.  Rambo", "c. George Simmons", "d.  Mr. T"],
  choicesAnswer: 3
},
{
  question: "5. Who is the true Master of the Octagon?",
  choices: ["a. Hulk Hogan", "b.  Connor McGreggor", "c.  Chuck Norris", "d.  Floyd Meriwether"],
  choicesAnswer: 2
},
{
  question: "6. Which long-nosed fellow from Melmac lived with the Tanners?",
  choices: ["a. Uncle Jesse", "b. Alf", "c. Uncle Joey", "d.  The guy from America’s Home Videos"],
  choicesAnswer: 1
},
  {
  question: "7. Name the shoes with the infamous pumps?",
  choices: ["a. LA Gear", "b. Cinderella", "c.  Yves Saint Laurent", "d.  Reebok"],
  choicesAnswer: 3
},
{
  question: "8. Pachyderm that lived on Sesame Street?",
  choices: ["a. Big Bird", "b.  Oscar the Grouch", "c.  Snuffaluffagus", "d.  Elmo"],
  choicesAnswer: 3
},
{
  question: "9. Which two characters had an Excellent Adventure?",
  choices: ["a. The Olsen Twins", "b. Bill and Ted", "c.  Pee Wee Herman and Paul Reubens", "d. Mario and Luigi"],
  choicesAnswer: 1
},
{
  question: "10.  Who was Livin’ on a Prayer?",
  choices: ["a. Bon Jovi", "b.  Ozzy Osborn", "c. Nick Nolte", "d.  Gary Busey"],
  choicesAnswer: 0
},
{
  question: "11.  Who’s Achy Breaky Heart somehow lead to the Wreaking Ball?",
  choices: ["a. That guy with the Tear in his Beer", "b.  John Belushi", "c.  Billy Ray Cyrus", "d. Dan Aykroyd"],
  choicesAnswer: 2
},
{
  question: "12.  The person Inigo Montoya had to find to get revenge?",
  choices: ["a. Andre the Giant", "b. The Dread Pirate Roberts", "c.  The Six Fingered Man", "d.  Yo Mamma"],
  choicesAnswer: 2
},
{
  question: "13.  Where was the Zoo that had Magic and Wonder waiting for you?",
  choices: ["a. San Diego Zoo", "b. Sea World", "c. Bronx Zoo", "d. Zoobilee Zoo"],
  choicesAnswer: 3  
  
}
{
  question: "14.  Who was the Last Dragon?",
  choices: ["a. Sho'nuff", "b. Bruce Lee", "c. Bruce Leroy", "d. Yo Mamma"],
  choicesAnswer: 3
  
}];  
  


// Variable showQuestion will hold the setInterval when we start the slideshow
var showQuestion;

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
$("#start").click(startSlideshow);

// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
$("#stop").click(stopSlideshow);


// This function will replace display whatever question it's given
// in the 'src' attribute of the img tag.
function displayQuestion() {
  $("#question-holder").html("<img src=" + question[count] + " width='400px'>");
}

function nextQuestion() {
  //  TODO: Increment the count by 1.
  count++;

  // TODO: Show the loading gif in the "question-holder" div.
  $("#question-holder").html("<img src='images/loading.gif' width='200px'/>");

  // TODO: Use a setTimeout to run displayImagquestione after 1 second.
  setTimeout(displayQuestion, 1000);

  // TODO: If the count is the same as the length of the question array, reset the count to 0.
  if (count === question.length) {
    count = 0;
  }
}

function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextQuestion, 3000);

}

function stopSlideshow() {

  // TODO: Put our clearInterval here:
  clearInterval(showQuestion);

}









}