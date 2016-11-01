# Test technique pour Fluo
Ce projet est le résultat d'un test technique pour fluo

## Prérequis
Se basant sur [gulp-patterns](https://github.com/johnpapa/gulp-patterns) de John Papa, le projet a les mêmes prérequis :

- Installer Node ;
- Dans un terminal, tapper `npm install -g node-inspector bower gulp` (je ne me sers pas de node inspector, il devrait être facultatif) pour les dépendances global ;
- Puis, toujours avec le terminal, se placer dans le répertoire du projet et tapper `npm install` (lance automatiquement bower).

## Démarrer le projet
La commande gulp `gulp serve-dev` permet de lancer le projet en mode développement.

## Réalisation

### Choix
Par souci de temps et de simplicité, j'ai utilisé [gulp-patterns](https://github.com/johnpapa/gulp-patterns) de John Papa. Ce choix m'a permis de rapidement avoir l'infrastructure du projet et les outils en place (outre le fait que je connaisse bien cette stack).

La seule dépendance ajoutée au projet est [angular-busy](https://github.com/cgross/angular-busy) pour avoir un spinner d'attente lié aux promesses (permettant de localiser dans la page les informations en attente pour l'utilisateur).

Je n'ai pas réalisé de tests (unitaire, d'intégration ou e2e) dans ce projet (use case très simple et temps disponible contraint). 

### Hypothèses
 - **design desktop** : Je n'ai pas prété un soin particulier pour que le rendu final soit idéal sur mobile. L'écran se scale en fonction de la taille du moniteur mais par exemple, le menu ne s'adapte pas parfaitement pour mobile (il ne se retracte pas lorsque l'on clique en dehors du menu de sélection) ;
 - **unité et ingrédients** : j'ai présumé que les unités sont toujours les mêmes pour un même ingrédient ;
 - **Anglais** : le JSON des recettes étant en anglais, j'ai réalisé l'intégralité du projet en anglais.

### Répertoires importants
 - le json des recettes est présent dans `exo-fluo\src\server\data` ;
 - les ressoucres statiques (images des recettes) sont dans `exo-fluo\src\client\images\photos` ;
 - les styles (effectuer en less) sont regroupés dans `exo-fluo\src\client\styles` (je n'ai pas pris le temps de reprendre les tâches gulp pour pouvoir mettre directement le less dans le dossier des écran, ce que je préfère) ;
 - le code JavaScript est regroupé dans `exo-fluo\src\client\app` :
	 - les sous-dossiers `blocks`, `core` et `layout` viennent du projet gulp-patterns de John Papa, par soucis de simplification, j'ai allégé le layout et laissé inchangé les autres éléments, j'ai uniquement ajouté le filtre `newline` ;
	 - les sous-dossiers `recipes`, `recipe` et `list` correspondent chacun à un des principaux écrans de l'exercice ;

### Temps de réalisation
Je pense avoir passé environ 1,5 jour (morcelé) sur ce projet.
