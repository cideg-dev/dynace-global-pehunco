# DYNACE Global Péhunco

Site vitrine de **DYNACE Global**, entreprise internationale de santé et bien-être basée à Péhunco, Bénin.

## Fonctionnalités

- Site 100 % statique (HTML/CSS/JS vanille)
- Bilingue Français / Anglais (sélection persistée dans `localStorage`)
- 7 fiches produits générées dynamiquement
- Carrousel de témoignages
- FAQ interactive (accordéon)
- Compteur de statistiques animé
- Formulaire de contact (envoi via [Formspree](https://formspree.io))
- Bouton WhatsApp flottant
- Application PWA (installeable sur mobile/desktop)
- Animations au scroll
- Navigation mobile hamburger
- SEO (Open Graph, sitemap, robots.txt)
- Design responsive

## Utilisation

Ouvrez `index.html` dans un navigateur — aucun build nécessaire.

### Installer localement

```bash
git clone https://github.com/cideg-dev/dynace-global-pehunco.git
cd dynace-global-pehunco
# Ouvrir index.html dans le navigateur
```

## Déploiement

Le site est automatiquement déployé sur **GitHub Pages** via GitHub Actions à chaque push sur `main`.

URL : [https://cideg-dev.github.io/dynace-global-pehunco/](https://cideg-dev.github.io/dynace-global-pehunco/)

## Personnalisation

- **Traductions** : éditer `i18n` dans `script.js`
- **Produits** : modifier le tableau `produits` dans `script.js`
- **Couleurs** : variables CSS dans `:root` de `styles.css`
- **Formulaire** : remplacer l'endpoint Formspree dans `script.js`

## Licence

Tous droits réservés — DYNACE Global Péhunco
