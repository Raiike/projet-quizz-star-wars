const prompt = require("prompt-sync")()

// Introduction
// Le projet consiste en la création d'un jeu de quizz en mode console basé sur des questions
// prédéfinies directement dans le code. L'objectif est de permettre à l'utilisateur de répondre
// à une série de cinq questions posées en texte, puis d'afficher le score final. Le jeu sera
// exécutable en ligne de commande grâce à Node.js.
// Questions et Réponses :
// Prédéfinir cinq questions, chacune avec quatre réponses, dont une correcte
// Les questions et les options de réponse doivent être directement incluses dans le code
// source.
// Déroulement du Jeu :
// Afficher chaque question à l'utilisateur, suivi des options de réponse.
// Attendre l'entrée de l'utilisateur pour sélectionner sa réponse.
// Valider la réponse de l'utilisateur et afficher un message approprié (correct/incorrect) après
// chaque réponse.
// Gestion des Points :
// Attribuer un point au joueur pour chaque réponse correcte.
// Calculer et afficher le score final du joueur à la fin du quizz.
// Interface Utilisateur :
// Afficher les questions et les options de réponse de manière claire et lisible en mode console.
// Guider l'utilisateur tout au long du jeu avec des messages informatifs et des invitations à
// répondre.
// Gestion des Erreurs :
// Gérer les erreurs d'entrée utilisateur, par exemple, si l'utilisateur entre un choix incorrect ou
// une réponse non valide.

let score = 0
let response 
let j 
let questions = ["Quel est la raison du basculement d'Anakin vers le coté obscur ?", "Qui était le maitre de Palpatine ? ", "Comment se fait-il que les clones ont éxécutés l'odre 66 sans fautes malgrès que les jedies étaient leurs compagnons et frere de guerre ? Repondez directement par A , B ou C", "Qui est Snauk ?", "Qui apprendras à luke comment purifier un crystal kyber ?"]
let reponses = [
    ["Palpatine", "Padme", "Obiwan", "Maul"],
    ["Dark plagueis", "Dark tyranus", " Dark Vador ", "Dark Revan"],
    ["A - à cause d'une puce integrés dans leurs cerveaux dès la naissance?", "B - car les soldats sont trés fidèle au chancelier ?", "C - Car les soldats ont compris que les jedis étaient le mal?"],
    ["Anakin", "luke", "Palpatine","iden Versio" ],
    ["Ahsoka","yoda","Vador","Obiwan "],
]

let goodanswer = ["Palpatine","Dark plagueis", "A", "Palpatine" , "Ahsoka"]


for (let i = 0; i < questions.length; i++) {
    console.log(questions[i]);
    for (let j = 0; j < reponses[i].length; j++) {
        console.log(reponses[i][j]);
    }
    let choice = prompt("quel est votre reponse ?")
    if (choice.toLowerCase() === goodanswer[i].toLowerCase()) {
        console.log("GG ! Prépare toi pour la suite");
        score++
    }
    else if (choice.toLowerCase() != goodanswer[i].toLowerCase()) {
        console.log("Dommage ! Prépare toi pour la suite");
        score +0
    }
}
console.log("Le quizz est terminé ! Votre Score est de " + score + "/ 5");