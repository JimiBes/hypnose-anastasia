# Anastasia Kothé · Hypnose à Montauban

Site vitrine React + Vite. Trois pages statiques en français, sans serveur applicatif ni base de données.

## Démarrage

Node.js 22.12 ou plus récent.

```sh
npm ci
npm run dev
npm run build
```

`npm run preview` sert la version compilée. Sur Netlify, connecter le dépôt à la racine du projet. Le fichier `netlify.toml` définit la commande de build et le dossier à publier. Chaque page dispose de son propre fichier HTML, ce qui permet de l’ouvrir directement par son URL.

## Compléter avant la mise en ligne

- Les informations modifiables sont dans `src/contenu.js`. Le téléphone et l’adresse viennent de la carte de visite. Ajouter les éventuels tarifs, la durée et le déroulement des séances après validation.
- Vérifier l’intitulé de l’attestation ENIC-NARIC sur le justificatif avant de l’ajouter au parcours.
- Demander le SIRET ou la dénomination d’immatriculation, puis vérifier les renseignements de l’entreprise avant de rédiger et de relier les mentions légales.
- Relire les trois pages avec la cliente, confirmer le nom de domaine, puis retirer les balises `noindex` au moment de la mise en ligne officielle.
