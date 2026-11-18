# ÉCLATS — Musée des découvertes

Site web interactif en français, 100 % HTML/CSS/JavaScript. Fonctionne sans serveur et peut être publié gratuitement sur GitHub Pages.

## Pour l'ouvrir
Double-clique sur `index.html` ou ouvre-le avec l'extension Live Server de VS Code.

## Pour le modifier
- `data.js` : les 12 fiches de scientifiques, les portraits, les découvertes, les descriptions et les questions du quiz. C'est le fichier le plus important à modifier !
- `style.css` : couleurs, polices, tailles, animations et mise en page. Les couleurs principales sont dans `:root` tout en haut.
- `index.html` : titres, sections, menu et textes généraux.
- `script.js` : fonctionnement de la recherche, de la frise, des fenêtres et du quiz.

### Changer une photo
Dans `data.js`, remplace la valeur `image` du scientifique par une URL directe vers une image, ou par un chemin local comme `images/galilee.jpg`. Pour une image locale, crée un dossier `images` et ajoute ton fichier dedans. Les images externes peuvent ne pas se charger selon leur adresse ou les restrictions du site d'origine : dans ce cas, une icône scientifique apparaît à la place.

## Mettre en ligne avec GitHub Pages
1. Crée un dépôt GitHub public, par exemple `musee-scientifiques`.
2. Dépose `index.html`, `style.css`, `data.js`, `script.js` à la racine du dépôt.
3. Dans Settings → Pages, choisis Deploy from a branch → main → /(root), puis Save.
4. Ouvre `https://TON-PSEUDO.github.io/musee-scientifiques/` une fois le déploiement terminé.

## Note historique
La frise est classée par **année de naissance** (et non par date de découverte). La date de naissance de Zacharias Janssen est approximative et l'attribution du microscope composé est discutée. Les contributions scientifiques sont présentées avec des nuances historiques.
