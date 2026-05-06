const questions = [
    {
    question: "Which feature is used to highlight text?",
    answers: [
      { text: "Text Highlight Color", correct: true },
      { text: "Bold", correct: false },
      { text: "Font Color", correct: false },
      { text: "Underline", correct: false }
    ]
  },
  {
    question: "Which feature allows you to create a table of contents?",
    answers: [
      { text: "References tab", correct: true },
      { text: "Layout tab", correct: false },
      { text: "Insert tab", correct: false },
      { text: "Home tab", correct: false }
    ]
  },
  {
    question: "Which shortcut is used to undo the last action?",
    answers: [
      { text: "Ctrl + Z", correct: true },
      { text: "Ctrl + Y", correct: false },
      { text: "Ctrl + X", correct: false },
      { text: "Ctrl + C", correct: false }
    ]
  },
  {
    question: "Which tab contains the 'Page Borders' option?",
    answers: [
      { text: "Layout", correct: true },
      { text: "Insert", correct: false },
      { text: "Home", correct: false },
      { text: "Review", correct: false }
    ]
  },
  {
    question: "Which feature is used to change the line spacing?",
    answers: [
      { text: "Paragraph group", correct: true },
      { text: "Font group", correct: false },
      { text: "Page Setup", correct: false },
      { text: "View tab", correct: false }
    ]
  },
  {
    question: "Which tab allows you to track changes?",
    answers: [
      { text: "Review", correct: true },
      { text: "Insert", correct: false },
      { text: "Home", correct: false },
      { text: "Layout", correct: false }
    ]
  },
 
  {
    question: "Which tab allows you to add a hyperlink?",
    answers: [
      { text: "Insert", correct: true },
      { text: "Home", correct: false },
      { text: "Layout", correct: false },
      { text: "Review", correct: false }
    ]
  },

  {
    question: "Which tab contains the 'Mail Merge' option?",
    answers: [
      { text: "Mailings", correct: true },
      { text: "Insert", correct: false },
      { text: "Layout", correct: false },
      { text: "Review", correct: false }
    ]
  },
  {
    question: "Which option is used to create numbered lists?",
    answers: [
      { text: "Paragraph group", correct: true },
      { text: "Font group", correct: false },
      { text: "Styles group", correct: false },
      { text: "Layout group", correct: false }
    ]
  },
   {
    question: "Which tab contains the 'Find' option?",
    answers: [
      { text: "Home", correct: true },
      { text: "Insert", correct: false },
      { text: "Layout", correct: false },
      { text: "Review", correct: false }
    ]
  },
  {
    question: "Which feature allows you to insert a text box?",
    answers: [
      { text: "Insert tab", correct: true },
      { text: "Layout tab", correct: false },
      { text: "Home tab", correct: false },
      { text: "Review tab", correct: false }
    ]
  },
  {
    question: "Which tab contains the 'WordArt' option?",
    answers: [
      { text: "Insert", correct: true },
      { text: "Layout", correct: false },
      { text: "Home", correct: false },
      { text: "Review", correct: false }
    ]
  },
  {
    question: "Which option allows you to insert a page break?",
    answers: [
      { text: "Insert tab", correct: true },
      { text: "Layout tab", correct: false },
      { text: "Home tab", correct: false },
      { text: "Review tab", correct: false }
    ]
  },
  
  {
    question: "Which feature is used to apply a style to text?",
    answers: [
      { text: "Styles group", correct: true },
      { text: "Font group", correct: false },
      { text: "Paragraph group", correct: false },
      { text: "Layout group", correct: false }
    ]
  },
  {
    question: "Which tab contains the option to change document orientation?",
    answers: [
      { text: "Home", correct: false },
      { text: "Insert", correct: false },
      { text: "Layout", correct: true },
      { text: "View", correct: false }
    ]
  },
  {
    question: "Which shortcut moves the cursor to the beginning of the document?",
    answers: [
      { text: "Ctrl + Home", correct: true },
      { text: "Ctrl + End", correct: false },
      { text: "Alt + Home", correct: false },
      { text: "Ctrl + Shift + Home", correct: false }
    ]
  },

  {
    question: "Which feature allows you to combine multiple documents into one?",
    answers: [
      { text: "Compare", correct: false },
      { text: "Merge Documents", correct: true },
      { text: "Track Changes", correct: false },
      { text: "Restrict Editing", correct: false }
    ]
  },
  {
    question: "Which tab contains the 'Comments' feature?",
    answers: [
      { text: "Review", correct: true },
      { text: "Home", correct: false },
      { text: "Layout", correct: false },
      { text: "Insert", correct: false }
    ]
  },
  {
    question: "Which tab contains the 'Paragraph' spacing options?",
    answers: [
      { text: "Home", correct: true },
      { text: "Layout", correct: false },
      { text: "Design", correct: false },
      { text: "Review", correct: false }
    ]
  },
  {
    question: "Which shortcut selects the entire document?",
    answers: [
      { text: "Ctrl + A", correct: true },
      { text: "Ctrl + E", correct: false },
      { text: "Ctrl + D", correct: false },
      { text: "Ctrl + Shift + A", correct: false }
    ]
  },
  {
    question: "Which tab contains the 'Drop Cap' option?",
    answers: [
      { text: "Insert", correct: true },
      { text: "Layout", correct: false },
      { text: "Home", correct: false },
      { text: "Design", correct: false }
    ]
  },
    {
    question: "Which tab allows you to change the theme of a document?",
    answers: [
      { text: "Design", correct: true },
      { text: "Layout", correct: false },
      { text: "Insert", correct: false },
      { text: "Home", correct: false }
    ]
  },
  {
    question: "Which feature allows you to replace text throughout a document?",
    answers: [
      { text: "Find", correct: false },
      { text: "Replace", correct: true },
      { text: "Go To", correct: false },
      { text: "Navigation Pane", correct: false }
    ]
  },
  {
    question: "Which tab contains options for watermark, page color, and page borders?",
    answers: [
      { text: "Design", correct: true },
      { text: "Layout", correct: false },
      { text: "Insert", correct: false },
      { text: "Review", correct: false }
    ]
  },
  {
    question: "Which shortcut toggles between the header and body of the document?",
    answers: [
      { text: "Alt + N", correct: false },
      { text: "Alt + Shift + P", correct: false },
      { text: "Alt + V", correct: false },
      { text: "Double-click header area", correct: true }
    ]
  },
  {
    question: "Which option is used to lock the document to prevent editing?",
    answers: [
      { text: "Restrict Editing", correct: true },
      { text: "Track Changes", correct: false },
      { text: "Protect Document", correct: false },
      { text: "Mark as Final", correct: false }
    ]
  },
 
  {
    question: "Which tab contains options to create captions for images?",
    answers: [
      { text: "References", correct: true },
      { text: "Insert", correct: false },
      { text: "Layout", correct: false },
      { text: "Design", correct: false }
    ]
  },
  {
    question: "Which feature allows you to create columns in a document?",
    answers: [
      { text: "Columns in Layout tab", correct: true },
      { text: "Paragraph spacing in Home tab", correct: false },
      { text: "Tables in Insert tab", correct: false },
      { text: "Page Setup in Design tab", correct: false }
    ]
  },
  {
    question: "Which option allows you to compare two versions of a document?",
    answers: [
      { text: "Compare in Review tab", correct: true },
      { text: "Track Changes", correct: false },
      { text: "Merge Documents", correct: false },
      { text: "Restrict Editing", correct: false }
    ]
  },
  {
    question: "Which shortcut applies bold formatting to selected text?",
    answers: [
      { text: "Ctrl + B", correct: true },
      { text: "Ctrl + I", correct: false },
      { text: "Ctrl + U", correct: false },
      { text: "Ctrl + Shift + B", correct: false }
    ]
  },
  {
    question: "Which tab contains the 'Equation' option for math formulas?",
    answers: [
      { text: "Insert", correct: true },
      { text: "Layout", correct: false },
      { text: "Design", correct: false },
      { text: "References", correct: false }
    ]
  },
  {
    question: "Which option in Word allows you to add a signature line?",
    answers: [
      { text: "Insert tab", correct: true },
      { text: "Layout tab", correct: false },
      { text: "Review tab", correct: false },
      { text: "References tab", correct: false }
    ]
  },
   {
    question: "Which group in the Review tab is used to check word count and language?",
    answers: [
      { text: "Proofing", correct: true },
      { text: "Comments", correct: false },
      { text: "Tracking", correct: false },
      { text: "Compare", correct: false }
    ]
  },
  {
    question: "Which shortcut opens the font formatting dialog box?",
    answers: [
      { text: "Ctrl + F", correct: false },
      { text: "Ctrl + D", correct: true },
      { text: "Ctrl + Shift + F", correct: false },
      { text: "Ctrl + E", correct: false }
    ]
  },
  {
    question: "Which feature lets you split the window to view two parts of a document simultaneously?",
    answers: [
      { text: "Split in View tab", correct: true },
      { text: "New Window in File tab", correct: false },
      { text: "Navigation Pane", correct: false },
      { text: "Arrange All", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  nextBtn.style.display = "none";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = "true";
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.style.backgroundColor = "green";
    score++;
  } else {
    selectedBtn.style.backgroundColor = "red";
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.style.backgroundColor = "green";
    }
    button.disabled = true;
  });

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  resetState();
  questionElement.innerText = `You scored ${score} out of ${questions.length}`;
  nextBtn.innerText = "Restart";
  nextBtn.style.display = "block";
  nextBtn.onclick = startQuiz;
}

startQuiz();
