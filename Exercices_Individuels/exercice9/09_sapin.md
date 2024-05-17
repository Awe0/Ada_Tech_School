Un petit air de noël par ici !

# 1. Enoncé

On va utiliser les boucles et les imbrications de boucles pour construire un beau sapin, roi des forêts 🎄.

Vous pouvez faire autant d’étapes que vous le souhaitez mais restez dans l’ordre suggéré.

Faites un maximum de fonctions pour organiser votre code.

*Contraintes:* 

- Langage : JS
- Suivez les étapes.
- Une fonctionnalité = une fonction

## Etape 1

Ecrivez une fonction "sapin", qui prend en entrée un nombre entier et qui affiche un sapin, avec la logique suivante :

```jsx
sapin(1) affiche à l'écran :
  +
 /*\
/***\

sapin(2) affiche à l'écran :

   +
  /*\
 /***\
/*****\

sapin(5) affiche à l'écran :
      + 
     /*\
    /***\
   /*****\
  /*******\
 /*********\
/***********\
```

## Etape 2

Cette fois-ci on va rajouter une difficulté d’affichage :

```jsx
sapin(1) affiche à l'écran :
  +
 /*\
/***\

sapin(2) affiche à l'écran :
   + 
  /*\
 /***\
/*****\

sapin(5) affiche à l'écran :
      + 
     /*\
    /***\
   /*****\
   /*****\
  /*******\
 /*********\
 
sapin(7) affiche à l'écran :
      + 
     /*\
    /***\
   /*****\
   /*****\
  /*******\
 /*********\
  /*******\
 /*********\
```

## Etape 3

```jsx
sapin(1) affiche à l'écran :
  +
 /*\
/***\
  #
sapin(2) affiche à l'écran :
   + 
  /*\
 /***\
/*****\
   #  

sapin(5) affiche à l'écran :
      + 
     /*\
    /***\
   /*****\
   /*****\
  /*******\
 /*********\
     ##
     ##
 
sapin(7) affiche à l'écran :
      + 
     /*\
    /***\
   /*****\
   /*****\
  /*******\
 /*********\
  /*******\
 /*********\
     ##
     ##
     ##
```

## Etape 4

Même principe que le niveau 3 mais avec des décorations (o) ajoutées aléatoirement (vous choisissez la fréquence), de façon à ne jamais être totalement sur le bord du sapin.

```jsx
sapin(1) affiche à l'écran :
  +
 /*\
/*o*\

sapin(2) affiche à l'écran :
   + 
  /*\
 /*o*\
/*o***\  

sapin(5) affiche à l'écran :
      + 
     /*\
    /***\
   /***o*\
   /***+*\
  /*o***+*\
 /**+***o**\
 
sapin(7) affiche à l'écran :
      + 
     /*\
    /*o*\
   /**+**\
   /*o***\
  /***+***\
 /**+***o**\
  /*****+*\
 /**o****+*\
```

## Etape 5

Faites en sorte de demander à l'utilisateur/trice le nombre d'étages qu'il/elle veut sur son sapin.
