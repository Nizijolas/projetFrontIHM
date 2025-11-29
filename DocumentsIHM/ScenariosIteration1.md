# Scénarios de Test Complexes - IHM

Ce document décrit deux scénarios de test basés sur les personas Paul et Laura, conçus pour valider les fonctionnalités clés de l'application tout en respectant les principes d'Interaction Homme-Machine (IHM).

## Scénario 1 : Paul - Connexion et Accueil

**Objectif :** Accéder à l'application et valider l'état initial.

### Contexte
Paul lance l'application pour la première fois de la journée.

### Étapes
| Étape | Action Utilisateur | Réponse Attendue du Système | Principe IHM |
| :---- | :----------------- | :-------------------------- | :----------- |
| 1 | Saisir le login "Paul" et le mot de passe "azerty" sur la page de connexion, puis valider. | Redirection vers la page d'accueil utilisateur (`UserHome`). Le menu de navigation est visible. | **Visibilité de l'état du système** : L'utilisateur sait qu'il est connecté. |

### Critères de Succès
- La connexion est fluide et redirige vers la bonne page.

---

## Scénario 2 : Paul - Recherche de nouveaux contacts

**Objectif :** Découvrir des profils intéressants sans effort de mémorisation.

### Contexte
Paul est connecté et souhaite élargir son réseau.

### Étapes
| Étape | Action Utilisateur | Réponse Attendue du Système | Principe IHM |
| :---- | :----------------- | :-------------------------- | :----------- |
| 1 | Cliquer sur l'onglet/lien "Trouver des personnes" (`Findpeople`). | Affichage de la liste des cartes de profils (`PeopleCardFind`). Chaque carte affiche clairement le nom et une option d'interaction. | **Reconnaissance plutôt que rappel** : Les options sont visibles, Paul n'a pas à se souvenir comment chercher. |

### Critères de Succès
- La liste des profils se charge correctement.
- Les options d'interaction sont évidentes.

---

## Scénario 3 : Paul - Initialisation d'une conversation

**Objectif :** Engager le dialogue avec un nouveau contact et vérifier la continuité.

### Contexte
Paul a identifié un profil qui l'intéresse dans la liste.

### Étapes
| Étape | Action Utilisateur | Réponse Attendue du Système | Principe IHM |
| :---- | :----------------- | :-------------------------- | :----------- |
| 1 | Identifier un profil et cliquer sur le bouton pour envoyer un message (`createMessage`). | Le système confirme l'action (feedback visuel). | **Feedback** : Le système informe l'utilisateur que son action a eu un effet. |
| 2 | Naviguer vers la page "Messages". | La nouvelle conversation apparaît dans la liste. | **Cohérence** : Les actions se reflètent logiquement ailleurs. |
| 3 | Sélectionner la conversation. | L'historique (vide/initial) s'affiche avec le nom du contact. | **Esthétique et design minimaliste** : Focus sur la tâche en cours. |

### Critères de Succès
- Feedback immédiat après l'envoi.
- La conversation est créée et accessible.

---

## Scénario 4 : Laura - Gestion des conversations actives

**Objectif :** Naviguer efficacement entre plusieurs discussions parallèles.

### Contexte
Laura est connectée et a plusieurs conversations en cours. Elle est pressée.

### Étapes
| Étape | Action Utilisateur | Réponse Attendue du Système | Principe IHM |
| :---- | :----------------- | :-------------------------- | :----------- |
| 1 | Accéder à la page "Messages". | Liste des conversations à gauche, active à droite. | **Flexibilité et efficience** : Accès direct. |
| 2 | Cliquer sur un contact différent de celui actif (`setNew`). | La vue principale se met à jour instantanément (`actualPlayer` mis à jour). | **Contrôle utilisateur** : Navigation libre. |
| 3 | Vérifier les détails (Nom, Statut). | Les infos correspondent au contact sélectionné. | **Correspondance avec le monde réel** : Comme une boîte mail. |

### Critères de Succès
- Changement de conversation instantané.
- Pas de confusion sur le destinataire actif.

---

## Scénario 5 : Laura - Déconnexion sécurisée

**Objectif :** Quitter l'application proprement.

### Contexte
Laura a fini ses échanges et souhaite fermer sa session.

### Étapes
| Étape | Action Utilisateur | Réponse Attendue du Système | Principe IHM |
| :---- | :----------------- | :-------------------------- | :----------- |
| 1 | Se déconnecter via le bouton de profil ou menu. | Retour à la page de login. Session nettoyée. | **Sortie d'urgence** : Quitter l'état connecté à tout moment. |

### Critères de Succès
- Retour immédiat à l'écran de connexion.

## Références IHM

Les principes cités dans ces scénarios sont basés sur les **10 Heuristiques d'Usabilité de Jakob Nielsen**.

- **Source Principale** : [Jakob Nielsen's 10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/)

