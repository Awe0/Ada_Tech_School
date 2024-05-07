# 1. Enoncé

Un grand classique des jeux de société ! Ce jeu se joue avec un joueur qui choisit une combinaison de couleur et un autre joueur qui doit deviner ces couleurs et dans quel ordre. Un codemaker et un codebreaker. A chaque tour, le codebreaker doit faire une proposition, le codemaker doit lui répondre en indiquant le nombre de couleurs bien placées et le nombre de bonne couleur mais mal placées. 

Je vous propose de faire cet exercice en python.

### **Exemple :**

Le code secret : [blue, red, yellow, green] 

1er tour : [blue, yellow, purple, red] -> [1,2] = 1 bien placé et bonne couleur et 2 mal placés mais bonne couleur 

2eme : [blue, yellow, red, green] -> [2, 2] …

*Contraintes:* 

- Langage : JS ou Python.
- Une fonctionnalité = Une fonction.

## Étape 1

Commençons avec une version simplifiée du jeu.

Nous imposerons la combinaison à deviner. Elle doit être composée de 2 pions de couleurs différentes.

Le joueur a donc 12 essais pour trouver la bonne combinaison.

4 choix de couleurs possibles.

Vous devez écrire au moins 3 fonctions pour gérer :

- Si la proposition est bien composée uniquement des 4 couleurs possibles et rien d’autre
- Une fonction qui retourne true ou false si la bonne combinaison est trouvée ou non
- Une fonction qui gère la partie (continuer tant que/fin si gagné)

## Étape 2

Gardons la même logique mais cette fois-ci nous aurons une combinaison de 4 couleurs différentes et un choix de 8 couleurs possibles.

## Étape 3

Maintenant, la combinaison à deviner peut avoir plusieurs fois la même couleur.

Ex : Le code secret : [blue, blue, yellow, green].

## Étape **4**

Désormais, ce n’est plus nous mais l’ordinateur qui va proposer une combinaison à deviner. À vous de trouver comment générer de manière aléatoire ce code.

## Étape 5

Proposer une interface graphique pour que l’on puisse voir visuellement les couleurs et jouer à votre jeu de manière plus ludique !
