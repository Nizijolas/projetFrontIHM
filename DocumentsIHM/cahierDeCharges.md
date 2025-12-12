# Cahier des Charges - Application Ping Pong

## 1. Contexte et Objectifs

### 1.1 Présentation du Projet
L'application "Ping Pong" est une plateforme sociale et sportive destinée aux amateurs de tennis de table. Elle vise à connecter les joueurs, faciliter l'organisation de rencontres et permettre un suivi ludique des performances.

### 1.2 Localisation Cible
Le projet cible spécifiquement la ville de **Grenoble** et sa métropole. L'objectif est de créer une communauté locale active de pongistes grenoblois.

### 1.3 Objectifs Principaux
*   **Social** : Permettre aux joueurs de se trouver et d'échanger facilement.
*   **Sportif** : Enregistrer les scores des matchs et suivre l'évolution des joueurs.
*   **Interface Moderne** : Offrir une interface engageante et moderne qui respecte les normes UX/UI du cours IHM.

### 1.4 Public Cible (Personas)
*   **Paul** : Joueur régulier cherchant de nouveaux partenaires à Grenoble.
*   **Laura** : Joueuse occasionnelle souhaitant organiser des parties amicales.

---

## 2. Spécifications Fonctionnelles

### 2.1 Gestion des Utilisateurs
*   **Inscription/Connexion** : Système d'authentification simple (Login/Mot de passe).
*   **Profil Joueur** :
    *   Affichage des informations personnelles (Nom, Prénom, Niveau, Ville).
    *   Statistiques de jeu (Nombre de matchs, Victoires/Défaites).
    *   Avatar personnalisé.

### 2.2 Fonctionnalités Sociales
*   **Recherche de Partenaires (Find People)** :
    *   Liste des joueurs inscrits à Grenoble.
    *   Filtres de recherche (par niveau, disponibilité - *à venir*).
    *   Possibilité d'ajouter des amis.
*   **Messagerie (Messages)** :
    *   Envoi et réception de messages privés entre joueurs.
    *   Historique des conversations.

### 2.3 Gestion des Matchs et Scores
*   **Saisie des Scores** :
    *   Interface dédiée pour entrer les scores d'un match (Sets).
    *   Validation du résultat par les deux joueurs (*fonctionnalité idéale*).
*   **Historique** :
    *   Consultation des matchs passés.
    *   Détail des sets pour chaque partie.

### 2.4 Navigation et Ergonomie
*   **Menu Principal (User Home)** : Tableau de bord central donnant accès aux fonctionnalités clés.
*   **Header/Footer** : Navigation persistante pour une expérience fluide.

---

## 3. Spécifications Techniques

### 3.1 Stack Technique
*   **Frontend** : Framework **Angular** (version 20.3.5).
*   **Langages** : TypeScript, HTML5, CSS3.
*   **Gestionnaire de Paquets** : npm.

### 3.2 Architecture de l'Application
L'application est structurée en composants modulaires :
*   `app.component` : Composant racine.
*   `login` : Gestion de l'authentification.
*   `user-home` : Page d'accueil utilisateur.
*   `findpeople` : Module de recherche.
*   `messages` : Module de messagerie.
*   `score` : Module de gestion des scores.
*   `header` / `footer` : Composants de structure.

### 3.3 Modèles de Données
*   `PlayerInfo` : Structure des données utilisateur.
*   `Partie` : Structure d'un match.
*   `SetPing` : Détail d'un set.
*   `Message` : Structure d'un message.

---

## 4. Contraintes et Exigences

### 4.1 Interface Homme-Machine (IHM)
*   **Design** : Interface épurée, moderne et "Peps" (couleurs vives, dynamique).
*   **Responsivité** : L'application doit être consultable sur ordinateur et tablette.
*   **Expérience Utilisateur (UX)** : Navigation intuitive, feedback visuel lors des actions (boutons, formulaires).

### 4.2 Performance
*   Chargement rapide des composants.
*   Transition fluide entre les pages (SPA - Single Page Application).

### 4.3 Sécurité (Simulation)
*   Pour cette version simulée, les mots de passe peuvent être stockés en clair ou avec un chiffrement basique.
*   Validation des formulaires côté client.

---

## 5. Livrables Attendus
1.  **Code Source** : Projet Angular complet et fonctionnel.
2.  **Documentation** :
    *   Cahier des Charges (ce document).
    *   Scénarios de Test (Fichiers Markdown).
    *   Personas (Fichiers PDF).
    *   Partie front de l'application avec angular. 

---

