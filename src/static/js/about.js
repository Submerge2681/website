document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.classList.remove('active');
                    q.nextElementSibling.style.maxHeight = '0';
                }
            });
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.vision-card');

    cards.forEach(card => {
        const title = card.querySelector('.title');
        const description = card.querySelector('.description');

        // Initially hide the description
        description.style.display = 'none';

        card.addEventListener('mouseenter', () => {
            title.style.display = 'none';
            description.style.display = 'block';
        });

        card.addEventListener('mouseleave', () => {
            title.style.display = 'block';
            description.style.display = 'none';
        });
    });
});