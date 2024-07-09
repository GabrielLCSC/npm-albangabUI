# EmojiGAUI - Bibliothèque Node pour HTML et CSS avec des Emojis

EmojiGAUI simplifie la création d'interfaces utilisateur en fournissant des classes CSS intuitives et ludiques utilisant des emojis, inspirées par les styles de Bootstrap.

## Installation

Pour utiliser EmojiGAUI dans votre projet, suivez ces étapes simples :

1. **Installation via npm** :

   Assurez-vous d'avoir Node.js et npm installés sur votre machine. Exécutez la commande suivante dans votre terminal :

npm install emojigauilib

bash
Copier le code

Remplacez `emojigauilib` par le nom réel de votre bibliothèque sur npm.

2. **Importation du CSS** :

Incluez le fichier CSS de votre bibliothèque dans votre projet HTML :

```html
<link rel="stylesheet" href="chemin/vers/public/styles.css">
Remplacez chemin/vers/public/styles.css par le chemin réel vers votre fichier CSS.

Utilisation
Utilisez les classes CSS avec des emojis dans votre HTML pour styliser vos éléments :

html
Copier le code
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EmojiGAUI Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1 class="🎉">Composants EmojiGAUI</h1>
    <div>
      <button class="alban-button ✅">Valider</button>
      <button class="gabriel-button ✅">Valider</button>
      <button class="alban-button ❌">Annuler</button>
      <button class="gabriel-button ❌">Annuler</button>
      <button class="alban-button ⚫">Voir plus</button>
      <button class="gabriel-button ⚫">Voir plus</button>
      <button class="alban-button ⚪">Voir plus</button>
      <button class="gabriel-button ⚪">Voir plus</button>
      <input type="text" class="🎹" placeholder="Entrez du texte...">
    </div>

    <div class="container">
      <div class="🃏">
        <img src="https://via.placeholder.com/300" alt="Card Image" class="🖼️">
        <div class="📝">
          <h3 class="📌">Titre de la Carte</h3>
          <p class="📄">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vitae nunc bibendum, id tristique nisi faucibus. Sed sit amet enim eget sem gravida sollicitudin. Integer luctus ex at tristique tempus.
          </p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
Explication des Classes Emoji
Boutons :

.alban-button : Bouton avec un style standard.
.gabriel-button : Bouton avec un style différent, généralement plus arrondi.
Boutons d'action :

.✅ : Bouton de validation.
.❌ : Bouton d'annulation.
.⚫ : Bouton pour action spécifique.
.⚪ : Bouton avec un autre style neutre.
Champ de texte :

.🎹 : Champ de texte avec un design de clavier.
Carte :

.🃏 : Conteneur de carte avec une image et du contenu associé.
.🖼️ : Image à l'intérieur de la carte.
.📝 : Contenu textuel à l'intérieur de la carte.
.📌 : Titre de la carte.
.📄 : Paragraphe ou texte descriptif dans la carte.
Container :

.🎉 : Style pour les titres principaux ou les sections importantes.
Personnalisation
Pour personnaliser davantage les styles, modifiez directement le fichier styles.css de votre bibliothèque EmojiGAUI.

Contribuer
Les contributions sont les bienvenues ! Si vous souhaitez ajouter de nouvelles fonctionnalités, améliorer la documentation ou signaler des problèmes, veuillez consulter notre projet sur GitHub.
