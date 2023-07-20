// faq.js

document.addEventListener('DOMContentLoaded', function () {
    const faqForm = document.getElementById('faqForm');
    const faqAccordion = document.getElementById('faqAccordion');
  
    // Default questions and answers about saving and investing
    const defaultQuestions = [
      'What are the benefits of saving money?',
      'How much should I save each month?',
      'What are some popular saving methods?',
    ];
  
    const defaultAnswers = [
      'Saving money provides financial security and allows you to achieve your financial goals.',
      'The amount you should save each month depends on your income, expenses, and financial goals.',
      'Popular saving methods include setting up an emergency fund, using savings accounts, and investing in low-risk assets.',
    ];
  
    // Function to add a new flip card to the FAQ
    function addFlipCard(question, answer) {
      const cardTemplate = `
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>${question}</h2>
            </div>
            <div class="flip-card-back">
              <p>${answer}</p>
            </div>
          </div>
        </div>
      `;
  
      faqAccordion.innerHTML += cardTemplate;
    }
  
    // Function to add default flip cards
    function addDefaultFlipCards() {
      for (let i = 0; i < defaultQuestions.length; i++) {
        addFlipCard(defaultQuestions[i], defaultAnswers[i]);
      }
    }
  
    // Function to handle form submission and add the new flip card
    function handleFormSubmission(event) {
      event.preventDefault();
      const questionInput = document.getElementById('questionInput');
      const answerInput = document.getElementById('answerInput');
      const question = questionInput.value;
      const answer = answerInput.value;
  
      if (question.trim() === '' || answer.trim() === '') {
        alert('Please provide both question and answer.');
        return;
      }
  
      addFlipCard(question, answer);
      faqForm.reset();
    }
  
    // Listen for form submission and handle it
    faqForm.addEventListener('submit', handleFormSubmission);
  
    // Add default flip cards on page load
    addDefaultFlipCards();
  });
  