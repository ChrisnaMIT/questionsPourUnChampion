
//DOM
const loadQuizzBouton = document.querySelector('.loadQuizz')
const questionsContainer = document.querySelector('.cadreQuestion')
const reponseA = document.querySelector('.reponseAChoisirA')
const reponseB= document.querySelector('.reponseAChoisirB')
const reponseC = document.querySelector('.reponseAChoisirC')
const reponseD = document.querySelector('.reponseAChoisirD')


loadQuizzBouton.addEventListener('click',   () => { //Ajout d'un evenment click, quand on click sa affiche les questions

    fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')// récupération de l'api, on récupere une question
        .then(res => res.json())
        .then(data => {
            const question = data.results[0].question;//création de la const question et on mets la data dans la constante question
            const reponseCorrect = data.results[0].correct_answer;
            const reponseIncorrect = data.results[1].incorrect_answers;
            const reponseIncorrectDeux = data.results[2].incorrect_answers;
            const reponseIncorrectTroix = data.results[3].incorrect_answers;

            console.log(data)

            reponseA.innerHTML = reponseCorrect;
            reponseB.innerHTML = reponseIncorrect;
            reponseC.innerHTML = reponseIncorrectDeux
            reponseD.innerHTML = reponseIncorrectTroix
            questionsContainer.innerHTML = question; // dans mon questionContainer, c'est la ou sera ma question

        })
        .catch(error => { // catch permet de gérer une erreur avec une api, si il y a une erreur sa affiche ce message
            questionsContainer.innerHTML = "Erreur lors du chargement de la question"; // si on a une erreur dans la question, sa affiche ce message dans le questionContainer
            reponseA.innerHTML = "Erreur ";
            reponseB.innerHTML = " Erreur ";
            reponseC.innerHTML = " Erreur ";
            reponseD.innerHTML = " Erreur ";

        });

});

function choisirUneReponse(correctAnswer){

    const bouton = document.querySelectorAll('#button')

    bouton.forEach(element => {
        bouton.addEventListener('click',(event) => {
            const choix = event.target.innerHTML;
            if (choix === correctAnswer) {
                alert('BONNE REPONSE');
            } else {
                alert('MAUVAISE REPONSE');
            }
        });
    });
}














