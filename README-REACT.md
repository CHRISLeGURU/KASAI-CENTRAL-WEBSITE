# Kasaï-Central React App 🚀

## Vue d'ensemble

Version moderne du site Kasaï-Central construite avec **React** et **Tailwind CSS** pour une expérience utilisateur optimale et un code maintenable.

## 🎯 Objectifs de la refonte

- **Performance améliorée** avec React et Vite
- **Design system cohérent** avec Tailwind CSS
- **Composants réutilisables** et modulaires
- **Animations fluides** avec Framer Motion
- **Responsive design** mobile-first
- **Accessibilité** optimisée

## 🛠️ Technologies utilisées

- **React 18** - Framework JavaScript moderne
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Icônes modernes
- **Framer Motion** - Animations fluides

## 🎨 Palette de couleurs Kasaï

```css
kasai-terre: #A0522D  /* Brun terre */
kasai-vert: #3B7A57   /* Vert forêt */
kasai-ivoire: #F5F5DC /* Ivoire */
kasai-bleu: #2C3E50   /* Bleu profond */
kasai-or: #DAA520     /* Or */
```

## 📱 Composants créés

### 🧭 Navigation
- **Navbar** - Navigation responsive avec effet de scroll

### 🏠 Sections principales
- **Hero** - Section d'accueil avec vidéo background (logique préservée)
- **ProvinceOverview** - Statistiques de la province avec cartes modernes
- **WhyDiscover** - Raisons de découvrir avec layout grid
- **SiteFeatures** - Fonctionnalités du site avec icônes
- **History** - Timeline interactive avec événements cliquables
- **Geography** - Géographie avec sections visuelles
- **InteractiveMap** - Carte territoriale moderne sans superposition
- **CTA** - Appel à l'action final avec effets visuels

## 🚀 Installation et lancement

```bash
# Installation des dépendances
npm install

# Lancement en mode développement
npm run dev

# Build pour production
npm run build

# Prévisualisation du build
npm run preview
```

## 🎯 Améliorations apportées

### Design System
- **Classes utilitaires** Tailwind pour cohérence
- **Composants card-modern** réutilisables
- **Animations** avec classes personnalisées
- **Responsive** mobile-first

### Interactivité
- **Timeline cliquable** dans History
- **Tooltips** sur la carte interactive
- **Hover effects** sophistiqués
- **Animations d'entrée** pour les éléments

### Performance
- **Lazy loading** des composants
- **Optimisation** des images et vidéos
- **Bundle splitting** automatique avec Vite
- **CSS purging** avec Tailwind

### Accessibilité
- **Contraste** optimisé
- **Navigation clavier** supportée
- **ARIA labels** appropriés
- **Responsive** sur tous appareils

## 📂 Structure du projet

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProvinceOverview.jsx
│   ├── WhyDiscover.jsx
│   ├── SiteFeatures.jsx
│   ├── History.jsx
│   ├── Geography.jsx
│   ├── InteractiveMap.jsx
│   └── CTA.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Fonctionnalités modernes

### Carte Interactive
- **Positionnement intelligent** sans superposition
- **Tooltips informatifs** au survol
- **Animations d'entrée** séquentielles
- **Stats en temps réel** en bas de carte

### Timeline Histoire
- **Événements cliquables** pour plus de détails
- **Indicateurs visuels** avec icônes thématiques
- **Layout responsive** qui s'adapte à tous écrans
- **Animations fluides** entre les états

### Design Glassmorphism
- **Effets de transparence** avec backdrop-blur
- **Bordures subtiles** avec opacité
- **Ombres douces** multicouches
- **Dégradés modernes** pour les boutons

## 🔄 Migration depuis HTML/CSS

La logique de la **Hero section** a été préservée comme demandé, mais toutes les autres sections ont été modernisées avec :

- **Composants React** modulaires
- **Tailwind CSS** au lieu du CSS custom
- **Animations** plus fluides
- **Interactivité** améliorée
- **Performance** optimisée

## 🚀 Prochaines étapes

1. **Tests** unitaires avec Jest/React Testing Library
2. **Optimisation SEO** avec React Helmet
3. **Internationalisation** avec react-i18next
4. **PWA** pour utilisation offline
5. **Analytics** avec Google Analytics 4

---

**Développé avec ❤️ pour le Kasaï-Central**