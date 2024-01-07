# my-ethereum-app
# Application Web3 avec Next.js et TypeScript

Cette application permet aux utilisateurs de se connecter à un portefeuille Ethereum via MetaMask, de charger les informations d'un token ERC-20 et de transférer un token ERC-20 à une autre adresse.

## Installation

Pour installer l'application, exécutez les commandes suivantes :
npm install
npm run dev

Utilisation
Une fois l'application installée, rendez-vous sur http://localhost:3000.

Pour vous connecter à votre portefeuille MetaMask, cliquez sur le bouton "Connecter votre portefeuille".

Une fois connecté, vous verrez votre adresse Ethereum dans le champ "Votre adresse Ethereum".

Pour charger les informations d'un token ERC-20, saisissez l'adresse du contrat ERC-20 dans le champ "Adresse du contrat".

Le nom, le symbole et le solde du token seront affichés dans les champs correspondants.

Pour transférer un token ERC-20, saisissez l'adresse du destinataire et la quantité de tokens à transférer dans les champs correspondants.

Cliquez sur le bouton "Transférer" pour lancer la transaction.

Tests
Pour exécuter les tests, exécutez la commande suivante :

npm run test

Déploiement
Pour déployer l'application en production, vous pouvez utiliser un service de déploiement Web, tel que Vercel ou Netlify.

Directives Techniques
L'application utilise les bibliothèques suivantes :

@wagmi/react-metamask pour interagir avec MetaMask
@wagmi/contracts pour interagir avec la blockchain Ethereum
Le code est écrit en TypeScript pour améliorer la qualité et la maintenabilité du code.

Fonctionnalités
Connexion à un portefeuille Ethereum via MetaMask
Chargement des informations d'un token ERC-20
Transfert d'un token ERC-20 à une autre adresse
Exigences
Node.js v16 ou supérieur
Yarn v1 ou supérieur
MetaMask

