document.addEventListener("DOMContentLoaded", function () {
    /****************************************************
     * 1. LESSON DATA & RENDERING
     ****************************************************/
    // Twelve detailed microlearning lessons
    const lessons = [
      {
        title: "Programming Basics: An Introduction",
        summary: "Discover the core concepts behind writing your first program.",
        content: `
          <p>Programming is the art of instructing computers to perform tasks, forming the backbone of modern technology.</p>
          <p>It begins with learning basic concepts such as variables, data types, loops, and conditional logic.</p>
          <p>Understanding these fundamentals helps in developing logical thinking and problem-solving skills.</p>
          <p>Beginner programmers often start with simple programs like printing "Hello World" to build confidence.</p>
          <p>Consistent practice and experimentation are key to mastering the art of programming.</p>
        `,
      },
      {
        title: "Programming with Python: A Gentle Start",
        summary: "Learn Python’s simple syntax and build your first functions.",
        content: `
          <p>Python is renowned for its clear, readable syntax, making it an excellent choice for beginners.</p>
          <p>This language emphasizes simplicity, allowing new programmers to focus on solving problems rather than complex syntax.</p>
          <p>Its extensive standard library provides tools for everything from web development to data analysis.</p>
          <p>Writing functions, loops, and handling errors in Python are straightforward, facilitating a smooth learning curve.</p>
          <p>By practicing small projects, you’ll quickly build confidence and gain practical experience.</p>
        `,
      },
      {
        title: "Programming with Java: Basic Syntax",
        summary: "Understand Java's object-oriented structure and strong typing.",
        content: `
          <p>Java is a strongly typed, object-oriented programming language used widely in enterprise environments.</p>
          <p>It enforces a rigorous structure, which helps in maintaining large codebases efficiently.</p>
          <p>Key concepts include classes, objects, inheritance, and polymorphism that form the core of Java programming.</p>
          <p>Writing and compiling Java code may seem challenging at first, but it develops disciplined coding habits.</p>
          <p>Practice with simple programs helps you grasp Java’s syntax and understand its vast ecosystem of libraries.</p>
        `,
      },
      {
        title: "Programming Web Basics: HTML, CSS, JS",
        summary: "Build your first webpage by understanding the trio of web development.",
        content: `
          <p>HTML provides the structure of a webpage, defining elements like headings, paragraphs, and links.</p>
          <p>CSS is used to style and layout these elements, ensuring that pages are visually appealing and responsive.</p>
          <p>JavaScript introduces interactivity, enabling dynamic content updates and user engagement.</p>
          <p>Together, these three technologies form the foundation of web development, suitable for beginners.</p>
          <p>Experimenting with them through small projects helps you understand the workflow of creating a complete website.</p>
        `,
      },
      {
        title: "Cooking Basics: Techniques & Tips",
        summary: "Master fundamental kitchen techniques and improve your cooking skills.",
        content: `
          <p>Cooking begins with understanding the importance of knife skills and safe food handling.</p>
          <p>Learning how to properly chop, slice, and dice ingredients is essential for any recipe.</p>
          <p>Seasoning plays a vital role in flavoring food, with salt, pepper, and herbs enhancing the natural taste.</p>
          <p>Following recipes accurately while also learning to improvise is a key skill in the kitchen.</p>
          <p>Regular practice and experimenting with ingredients build confidence and creativity in cooking.</p>
        `,
      },
      {
        title: "Cooking: Simple Recipes",
        summary: "Dive into quick and easy recipes to start your culinary journey.",
        content: `
          <p>Simple recipes are the perfect starting point for novice cooks looking to build confidence.</p>
          <p>A classic scrambled eggs dish teaches timing, temperature control, and flavor balance.</p>
          <p>Another great recipe is Spaghetti Aglio e Olio, which emphasizes minimal ingredients for maximum taste.</p>
          <p>Grilled cheese sandwiches demonstrate the beauty of transforming basic ingredients into comfort food.</p>
          <p>By mastering these recipes, you lay a strong foundation for more complex culinary adventures.</p>
        `,
      },
      {
        title: "History: Ancient Civilizations",
        summary: "Explore the rise and achievements of early human societies.",
        content: `
          <p>Ancient civilizations such as Mesopotamia, Egypt, and the Indus Valley laid the groundwork for modern society.</p>
          <p>These societies developed early forms of writing, advanced architecture, and complex social systems.</p>
          <p>Their innovations in agriculture, trade, and governance have had lasting impacts throughout history.</p>
          <p>Studying their achievements provides insight into the evolution of human culture and technology.</p>
          <p>Understanding these ancient roots helps explain many of the societal structures we see today.</p>
        `,
      },
      {
        title: "History: Medieval Europe",
        summary: "Examine the social, political, and cultural dynamics of the Middle Ages.",
        content: `
          <p>Medieval Europe was characterized by a feudal system that structured society into distinct classes.</p>
          <p>The influence of the Catholic Church was profound, affecting every aspect of life from education to art.</p>
          <p>Chivalry, knighthood, and castles are enduring symbols of this period, despite its many hardships.</p>
          <p>The era also saw the rise of universities and the preservation of classical knowledge through manuscripts.</p>
          <p>Studying Medieval Europe offers valuable lessons on resilience and the evolution of social structures.</p>
        `,
      },
      {
        title: "History: World War II",
        summary: "Learn about the global conflict that reshaped nations and ideologies.",
        content: `
          <p>World War II was a global struggle that involved the majority of the world’s nations in a state of total war.</p>
          <p>The conflict was marked by significant events such as the Blitzkrieg tactics and the D-Day landings.</p>
          <p>The human cost was immense, leading to profound changes in national borders and international relations.</p>
          <p>Technological advancements and strategic innovations emerged during the war, influencing modern military tactics.</p>
          <p>The legacy of World War II continues to shape political and cultural narratives around the globe.</p>
        `,
      },
      {
        title: "Fitness: Quick Routines & Recovery",
        summary: "Implement effective workout routines and learn the importance of recovery.",
        content: `
          <p>Regular exercise is essential for maintaining both physical and mental health.</p>
          <p>Quick routines like HIIT can deliver powerful workouts in a short amount of time.</p>
          <p>Incorporating stretching and yoga helps improve flexibility and reduce stress.</p>
          <p>Proper recovery, including adequate sleep and nutrition, is as important as the workout itself.</p>
          <p>Consistent training paired with smart recovery techniques leads to long-term fitness success.</p>
        `,
      },
      {
        title: "Productivity: Time Management 101",
        summary: "Optimize your day with proven techniques to manage your time better.",
        content: `
          <p>Effective time management is crucial for achieving your goals without burning out.</p>
          <p>Techniques like time blocking and the Pomodoro Method help structure your day efficiently.</p>
          <p>Learning to prioritize tasks using frameworks such as the Eisenhower Matrix ensures you focus on what matters.</p>
          <p>Eliminating distractions and scheduling breaks further boost your productivity levels.</p>
          <p>Over time, these habits form a solid foundation for sustained success and work-life balance.</p>
        `,
      },
      {
        title: "Personal Finance: Saving & Investing",
        summary: "Build a secure financial future by mastering saving and investing.",
        content: `
          <p>Understanding personal finance begins with creating a realistic budget and tracking your expenses.</p>
          <p>Establishing an emergency fund is crucial for managing unforeseen expenses without stress.</p>
          <p>Investing in low-cost index funds and bonds can yield long-term benefits through the power of compounding.</p>
          <p>Diversification and regular contributions help mitigate risks and grow your wealth steadily.</p>
          <p>Financial literacy is a lifelong journey that empowers you to make informed decisions about money.</p>
        `,
      },
    ];
  
    // Render lessons dynamically into the #lessonList container
    const lessonList = document.getElementById("lessonList");
    lessons.forEach((lesson, index) => {
      const lessonDiv = document.createElement("div");
      lessonDiv.className = "lesson-item";
      lessonDiv.innerHTML = `
        <h3>${lesson.title}</h3>
        <p>${lesson.summary}</p>
        <button class="learnMoreBtn" data-index="${index}">Learn More</button>
      `;
      lessonList.appendChild(lessonDiv);
    });
  
    /****************************************************
     * 2. LESSON MODAL FUNCTIONALITY
     ****************************************************/
    const lessonModal = document.getElementById("lessonModal");
    const lessonModalClose = document.getElementById("lessonModalClose");
    const modalLessonTitle = document.getElementById("modalLessonTitle");
    const modalLessonBody = document.getElementById("modalLessonBody");
  
    document.querySelectorAll(".learnMoreBtn").forEach((button) => {
      button.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        const selectedLesson = lessons[index];
        modalLessonTitle.textContent = selectedLesson.title;
        modalLessonBody.innerHTML = selectedLesson.content;
        lessonModal.style.display = "block";
      });
    });
  
    lessonModalClose.addEventListener("click", function () {
      lessonModal.style.display = "none";
    });
    window.addEventListener("click", function (event) {
      if (event.target === lessonModal) {
        lessonModal.style.display = "none";
      }
    });
  
    /****************************************************
     * 3. DAILY TRIVIA QUIZ FUNCTIONALITY (6 Questions)
     ****************************************************/
    const quizModal = document.getElementById("quizModal");
    const quizModalClose = document.getElementById("quizModalClose");
    const quizForm = document.getElementById("quizForm");
    const quizSubmitBtn = document.getElementById("quizSubmitBtn");
    const quizResult = document.getElementById("quizResult");
  
    // Six more detailed quiz questions spanning topics from programming to history, fitness, and finance
    const dailyQuizQuestions = [
      {
        question: "Which programming language is renowned for its readability and is often recommended for beginners?",
        answers: ["C++", "Python", "Java", "Ruby"],
        correctIndex: 1, // Python
      },
      {
        question: "In HTML, which tag is used to create a hyperlink?",
        answers: ["<div>", "<a>", "<p>", "<span>"],
        correctIndex: 1, // <a>
      },
      {
        question: "What is the primary ingredient in traditional bread-making?",
        answers: ["Flour", "Sugar", "Salt", "Water"],
        correctIndex: 0, // Flour
      },
      {
        question: "Which historical period is often referred to as the 'Dark Ages' due to its perceived cultural stagnation?",
        answers: ["Renaissance", "Medieval Europe", "Enlightenment", "Industrial Revolution"],
        correctIndex: 1, // Medieval Europe
      },
      {
        question: "Which macronutrient is essential for muscle repair and growth?",
        answers: ["Carbohydrates", "Fats", "Proteins", "Vitamins"],
        correctIndex: 2, // Proteins
      },
      {
        question: "Which financial instrument is generally considered low-risk for long-term growth?",
        answers: ["Stocks", "Bonds", "Cryptocurrencies", "Options"],
        correctIndex: 1, // Bonds
      },
    ];
  
    // Generate the daily quiz form dynamically
    function generateDailyQuiz(questions) {
      quizForm.innerHTML = "";
      questions.forEach((q, idx) => {
        const questionContainer = document.createElement("div");
        questionContainer.style.marginBottom = "1rem";
  
        const questionHeading = document.createElement("h3");
        questionHeading.textContent = `Q${idx + 1}: ${q.question}`;
        questionContainer.appendChild(questionHeading);
  
        q.answers.forEach((answer, aIndex) => {
          const label = document.createElement("label");
          label.style.display = "block";
          label.style.marginBottom = "0.5rem";
  
          const radio = document.createElement("input");
          radio.type = "radio";
          radio.name = `quizAnswer${idx}`;
          radio.value = aIndex;
  
          label.appendChild(radio);
          label.appendChild(document.createTextNode(" " + answer));
          questionContainer.appendChild(label);
        });
  
        quizForm.appendChild(questionContainer);
      });
    }
    generateDailyQuiz(dailyQuizQuestions);
  
    const challengeBtn = document.getElementById("challengeBtn");
    challengeBtn.addEventListener("click", function () {
      quizModal.style.display = "block";
      quizResult.textContent = "";
    });
  
    quizSubmitBtn.addEventListener("click", function () {
      let score = 0;
      dailyQuizQuestions.forEach((q, idx) => {
        const selected = document.querySelector(`input[name="quizAnswer${idx}"]:checked`);
        if (selected) {
          const userAnswer = parseInt(selected.value, 10);
          if (userAnswer === q.correctIndex) { score++; }
        }
      });
      quizResult.textContent = `You scored ${score} out of ${dailyQuizQuestions.length}!`;
      quizResult.style.color = (score === dailyQuizQuestions.length) ? "green" : "blue";
    });
  
    quizModalClose.addEventListener("click", function () {
      quizModal.style.display = "none";
    });
    window.addEventListener("click", function (event) {
      if (event.target === quizModal) {
        quizModal.style.display = "none";
      }
    });
  
    /****************************************************
     * 4. OTHER BUTTONS & SMOOTH SCROLLING
     ****************************************************/
    const startBtn = document.getElementById("startBtn");
    startBtn.addEventListener("click", function () {
      const lessonsSection = document.getElementById("lessons");
      lessonsSection.scrollIntoView({ behavior: "smooth" });
    });
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) { target.scrollIntoView({ behavior: "smooth" }); }
      });
    });
  });  