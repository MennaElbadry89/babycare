  const Questions = document.querySelectorAll('.Questions');
  Questions.forEach((Question) => {
    Question.addEventListener('click', function() {
      // const nextP = this.nextElementSibling;
      if (this.nextElementSibling && this.nextElementSibling.tagName === 'P') {
        this.style.backgroundColor = 'var(--light-bg-color)';
        
        // Toggle display between none and block
        this.nextElementSibling.style.display = (this.nextElementSibling.style.display === 'none' || !this.nextElementSibling.style.display) ? 'flex' : 'none';
      
    }
    });
  });

   // Toggle next <p> after .Questions on click
//   const LQuestions = document.querySelectorAll('.landingAQ .Questions');
//   LQuestions.forEach((LQuestion) => {
//     LQuestion.addEventListener('click', function() {
//       if (this.style.backgroundColor == 'white') {
//       }
//     });
//   });
