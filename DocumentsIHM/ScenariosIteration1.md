# Scénarios de Test Complexes - IHM

Ce document décrit deux scénarios de test basés sur les personas Paul et Laura, conçus pour valider les fonctionnalités clés de l'application tout en respectant les principes d'Interaction Homme-Machine (IHM).

## Scénario 1 : Paul

**Objectif :** Découvrir de nouveaux contacts et initier une interaction significative.

### Contexte du Persona

Paul est un utilisateur sociable qui cherche à élargir son réseau. Il n'est pas expert en technologie, il a donc besoin d'une interface intuitive avec un feedback clair pour se sentir en confiance.

### Étapes du Scénario

| Étape | Action Utilisateur                                                                                              | Réponse Attendue du Système                                                                                                         | Principe IHM                                                                                                      |
| :---- | :-------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| 1     | Saisir le login "Paul" et le mot de passe "azerty" sur la page de connexion, puis valider.                      | Redirection vers la page d'accueil utilisateur (`UserHome`). Le menu de navigation est visible.                                     | **Visibilité de l'état du système** : L'utilisateur sait qu'il est connecté.                                      |
| 2     | Cliquer sur l'onglet/lien "Trouver des personnes" (`Findpeople`).                                               | Affichage de la liste des cartes de profils (`PeopleCardFind`). Chaque carte affiche clairement le nom et une option d'interaction. | **Reconnaissance plutôt que rappel** : Les options sont visibles, Paul n'a pas à se souvenir comment chercher.    |
| 3     | Identifier un profil intéressant et cliquer sur le bouton pour envoyer un message (simulé par `createMessage`). | Le système doit confirmer l'action (ex: ajout à la liste des messages ou notification visuelle).                                    | **Feedback** : Le système informe l'utilisateur que son action a eu un effet.                                     |
| 4     | Naviguer vers la page "Messages".                                                                               | La nouvelle conversation avec le profil sélectionné doit apparaître dans la liste.                                                  | **Cohérence** : Les actions dans une partie de l'app se reflètent logiquement ailleurs.                           |
| 5     | Sélectionner la conversation.                                                                                   | L'historique (même vide ou initial) s'affiche, avec le nom du contact bien visible (`actualPlayer`).                                | **Esthétique et design minimaliste** : Seules les informations pertinentes pour la tâche en cours sont affichées. |

### Critères de Succès

- La connexion est fluide.
- La navigation vers "Trouver des personnes" est immédiate.
- L'ajout d'un contact via un message initialise correctement la conversation.

---

## Scénario 2 : Laura

**Objectif :** Gérer efficacement plusieurs conversations actives et accéder rapidement aux informations.

### Contexte du Persona

Laura est une utilisatrice organisée et pressée. Elle utilise l'application pour des communications précises. Elle valorise l'efficacité et la rapidité d'exécution.

### Pré-conditions

- Laura est connectée (Login: "Laura", Mdp: "azerty").
- Laura a déjà plusieurs conversations en cours (historique existant dans `Connexions`).

### Étapes du Scénario

| Étape | Action Utilisateur                                                                                                       | Réponse Attendue du Système                                                                                                                          | Principe IHM                                                                                                        |
| :---- | :----------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| 1     | Accéder directement à la page "Messages" depuis le menu principal.                                                       | La liste des conversations s'affiche à gauche, la conversation active à droite. Le dernier message est visible.                                      | **Flexibilité et efficience** : Accès direct à la fonction principale sans étapes superflues.                       |
| 2     | Observer la liste des contacts. Cliquer sur un contact différent de celui actif (utilisation de `setNew`).               | La vue principale se met à jour instantanément pour afficher les détails et messages du nouveau contact sélectionné (`actualPlayer` est mis à jour). | **Contrôle utilisateur** : L'utilisateur navigue librement entre les contextes sans contrainte.                     |
| 3     | Vérifier les détails du contact affiché (Nom, Statut).                                                                   | Les informations correspondent exactement au contact sélectionné dans la liste.                                                                      | **Correspondance avec le monde réel** : L'organisation des dossiers/messages imite une boîte de réception standard. |
| 4     | Tenter d'envoyer une réponse rapide (si fonctionnalité disponible) ou changer à nouveau de conversation très rapidement. | L'interface reste réactive, pas de lag. La sélection visuelle (surbrillance) suit immédiatement le clic.                                             | **Prévention des erreurs** : Une interface réactive évite les clics erronés sur le mauvais destinataire.            |
| 5     | Se déconnecter via le bouton de profil ou menu.                                                                          | Retour à la page de login. Les données de session sont nettoyées.                                                                                    | **Sortie d'urgence** : L'utilisateur peut quitter l'état connecté à tout moment.                                    |

### Critères de Succès

- Le changement de conversation est instantané (mise à jour du signal `actualPlayer`).
- L'interface distingue clairement la conversation active des autres.
- Aucune confusion sur l'identité du destinataire affiché.

---

## Références IHM

Les principes cités dans ces scénarios sont basés sur les **10 Heuristiques d'Usabilité de Jakob Nielsen**.

- **Source Principale** : [Jakob Nielsen's 10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/)
