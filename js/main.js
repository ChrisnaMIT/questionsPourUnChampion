
//DOM
const loadQuizzBouton = document.querySelector('.loadQuizz')
const questionsContainer = document.querySelector('.cadreQuestion')

loadQuizzBouton.addEventListener('click', () => { //Ajout d'un evenment click, quand on click sa affiche les questions

    fetch('https://opentdb.com/api.php?amount=1')// récupération de l'api, on récupere une question
        .then(res => res.json())
        .then(data => {
            const question = data.results[0].question; //création de la const question et on mets la data dans la constante question

            questionsContainer.innerHTML = question; // dans mon questionContainer, c'est la ou sera ma question =
        })
        .catch(error => { // catch permet de gérer une erreur avec une api, si il y a une erreur sa affiche ce message
            questionsContainer.innerHTML = "Erreur lors du chargement de la question"; // si on a une erreur dans la question, sa affiche ce message dans le questionContainer
        });

});





