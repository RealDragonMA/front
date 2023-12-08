# USMB: Nuit de l'info - 2023

## Description

Ce site web est un projet de l'USMB pour la nuit de l'info 2023.
C'est une histoire interactive où l'on peut choisir entre trois personnages (seul le "Vous !" est complet).

Les choix que nous faisons influencent l'histoire et nous mènent à différentes fins (bien ou non).

## Installation

Le site a été deployé à l'aide de Cloudflare Pages, il est donc accessible à l'adresse suivante : https://nuit-info.mathis-mazoyer.fr/

Le serveur (restAPI) est deployé sur un serveur à l'aide de Docker et Docker-compose à l'adresse suivante : https://ndi.mathis-mazoyer.fr/

Nous utilisons un base de données MongoDB Atlas pour stocker les données et nous avons fait un "dashboard" pour ajouter des histoires et les lier à d'autres.
Ce dashboard est accessible via l'adresse suivante : https://nuit-info.mathis-mazoyer.fr/dashboard