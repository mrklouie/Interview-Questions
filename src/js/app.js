const questionNum = document.querySelector(".questionNumber");
const question = document.querySelector(".question");
const button = document.querySelector(".btnNext");
const ArrQuestion = [
  "Why do you want to work in this company?",
  "What do you wish to gain from this company",
  "What made you apply for this Job?",
  "What technical skills do you think you want to improve more?",
  "What soft skills do you think you want to improve?",
  "How can you differentiate Hard-work and Smart-work?",
  "How do you feel about working nights and weekends?",
  "How do you deal with stress and pressure?",
  "What your Short-term goal and Long-term goal?",
  "What are you passionate about?",
  "What motivates you?",
  "What kind of leader that would motivate you?",
  "What do you think would be the biggest challenge if you get this job?",
  "What do you think will be the biggest challege if you get this job?",
  "How do you priotize competing deadlines?",
  "Tell me about yourself?",
  "What kind of people do you find it most difficult to work with? Why?",
  "What do you know about Coding/Programming?",
  "What are you looking for a company?",
  "Why should we hire you?",
  "Where do you see yourself in 2 years?",
  "Where do you see yourself in 5 years?",
  "What Soft Skills do you think you want to Improve?",
  "What made you pursue this kind of career?",
  "How can you contribute to the team?",
  "How would you describe yourself?",
  "How long would you expect to work for us if hired?",
  "How would you describe success?",
  "Tell me about our company?",
  "In the skills you mentioned? What specific skills are you most profound of?",
  "What in those skills do you think you want get improve more?",
  "Why should we hire you?",
];

console.log(ArrQuestion.length);
let count = -1;
function generateQuestion() {
  if (count >= ArrQuestion.length - 1) {
    count = -1;
  }
  count++;
  questionNum.textContent = `Question #${count + 1}`;
  question.textContent = ArrQuestion[count];
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    generateQuestion();
  }
});

button.addEventListener("click", () => {
  generateQuestion();
});
