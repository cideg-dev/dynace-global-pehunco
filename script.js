/* ============================================
   DYNACE Global Péhunco – Script v3
   ============================================ */
(function() {
'use strict';

// ===== TRADUCTIONS =====
const i18n = {
    fr: {
        meta_title: 'DYNACE Global Péhunco – Santé & Bien-être',
        nav_home: 'Accueil', nav_products: 'Produits', nav_testimonials: 'Témoignages',
        nav_about: 'À propos', nav_faq: 'FAQ', nav_contact: 'Contact',
        hero_badge: '100 % Botanique',
        hero_title: 'DYNACE Global <span class="highlight">Péhunco</span>',
        hero_sub: 'Votre partenaire santé & bien-être — Suppléments 100 % botaniques pour une vie meilleure.',
        hero_cta_products: 'Découvrir nos produits', hero_cta_contact: 'Nous contacter',
        products_badge: 'Nos Produits', products_title: 'Une gamme complète pour votre santé',
        products_sub: '7 produits uniques, 100 % botaniques, formulés par des experts.',
        stat_products: 'Produits uniques', stat_countries: 'Pays présents',
        stat_natural: '% Botanique', stat_clients: 'Clients satisfaits',
        testi_badge: 'Témoignages', testi_title: 'Ils ont transformé leur santé',
        about_badge: 'Qui sommes-nous', about_title: 'DYNACE Global Péhunco',
        about_p1: '<strong>DYNACE Global</strong> est une entreprise internationale de santé et bien-être présente dans plus de <strong>15 pays</strong> à travers le monde.',
        about_p2: 'Notre mission : offrir des <strong>suppléments 100 % botaniques</strong>, formulés à base de plantes et de cellules souches, pour accompagner chacun vers une meilleure santé.',
        about_p3: 'Basée à <strong>Péhunco, Bénin</strong>, notre équipe locale est dédiée à vous conseiller et vous accompagner dans votre parcours bien-être.',
        about_values_title: 'Nos valeurs',
        about_val1_title: 'Qualité', about_val1_desc: '– Ingrédients rigoureusement sélectionnés',
        about_val2_title: 'Innovation', about_val2_desc: '– Formules brevetées et certifiées',
        about_val3_title: 'Nature', about_val3_desc: '– 100 % botanique, sans effets secondaires',
        about_val4_title: 'Accompagnement', about_val4_desc: '– Suivi personnalisé de nos distributeurs',
        faq_badge: 'FAQ', faq_title: 'Questions fréquentes',
        contact_badge: 'Contact', contact_title: 'Prenez rendez-vous',
        contact_sub: 'Contactez-nous pour découvrir nos produits ou rejoindre notre équipe.',
        contact_addr: 'Adresse', contact_addr_val: 'Péhunco, Bénin',
        contact_phone: 'Téléphone', contact_email: 'Email', contact_hours: 'Horaires',
        contact_hours_val: 'Lun – Sam : 8h – 19h',
        contact_whatsapp: 'Écrire sur WhatsApp',
        form_name_ph: 'Votre nom', form_email_ph: 'Votre email',
        form_tel_ph: 'Votre téléphone', form_msg_ph: 'Votre message',
        form_send: 'Envoyer le message',
        pwa_install_title: 'Installer DYNACE Global',
        pwa_install_desc: 'Installez notre application pour un accès rapide',
        pwa_install_btn: 'Installer',
        footer_tagline: 'Péhunco, Bénin — Votre santé, notre priorité.',
        footer_rights: 'Tous droits réservés.',
        pd_back: '← Retour aux produits',
        pd_intro: 'Introduction',
        pd_desc: 'Description',
        pd_usage: 'Utilisation / Posologie',
        pd_ingredients: 'Ingrédients clés',
        pd_whatsapp: 'Commander sur WhatsApp',
        pd_contact: 'Nous contacter',
        form_error_required: 'Veuillez remplir tous les champs obligatoires.',
        form_error_email: 'Veuillez entrer un email valide.',
        form_success: 'Message envoyé avec succès ✓'
    },
    en: {
        meta_title: 'DYNACE Global Péhunco – Health & Wellness',
        nav_home: 'Home', nav_products: 'Products', nav_testimonials: 'Testimonials',
        nav_about: 'About', nav_faq: 'FAQ', nav_contact: 'Contact',
        hero_badge: '100 % Botanical',
        hero_title: 'DYNACE Global <span class="highlight">Péhunco</span>',
        hero_sub: 'Your health & wellness partner — 100% botanical supplements for a better life.',
        hero_cta_products: 'Discover our products', hero_cta_contact: 'Contact us',
        products_badge: 'Our Products', products_title: 'A complete range for your health',
        products_sub: '7 unique products, 100% botanical, formulated by experts.',
        stat_products: 'Unique Products', stat_countries: 'Countries',
        stat_natural: '% Botanical', stat_clients: 'Happy Clients',
        testi_badge: 'Testimonials', testi_title: 'They transformed their health',
        about_badge: 'About Us', about_title: 'DYNACE Global Péhunco',
        about_p1: '<strong>DYNACE Global</strong> is an international health and wellness company present in more than <strong>15 countries</strong> worldwide.',
        about_p2: 'Our mission: to offer <strong>100% botanical supplements</strong>, formulated from plants and stem cells, to support everyone towards better health.',
        about_p3: 'Based in <strong>Péhunco, Benin</strong>, our local team is dedicated to advising and supporting you in your wellness journey.',
        about_values_title: 'Our Values',
        about_val1_title: 'Quality', about_val1_desc: '– Carefully selected ingredients',
        about_val2_title: 'Innovation', about_val2_desc: '– Patented and certified formulas',
        about_val3_title: 'Nature', about_val3_desc: '– 100% botanical, no side effects',
        about_val4_title: 'Support', about_val4_desc: '– Personalized distributor follow-up',
        faq_badge: 'FAQ', faq_title: 'Frequently Asked Questions',
        contact_badge: 'Contact', contact_title: 'Book an appointment',
        contact_sub: 'Contact us to discover our products or join our team.',
        contact_addr: 'Address', contact_addr_val: 'Péhunco, Benin',
        contact_phone: 'Phone', contact_email: 'Email', contact_hours: 'Hours',
        contact_hours_val: 'Mon – Sat: 8am – 7pm',
        contact_whatsapp: 'Chat on WhatsApp',
        form_name_ph: 'Your name', form_email_ph: 'Your email',
        form_tel_ph: 'Your phone', form_msg_ph: 'Your message',
        form_send: 'Send message',
        pwa_install_title: 'Install DYNACE Global',
        pwa_install_desc: 'Install our app for quick access',
        pwa_install_btn: 'Install',
        footer_tagline: 'Péhunco, Benin — Your health, our priority.',
        footer_rights: 'All rights reserved.',
        pd_back: '← Back to products',
        pd_intro: 'Introduction',
        pd_desc: 'Description',
        pd_usage: 'Usage / Dosage',
        pd_ingredients: 'Key Ingredients',
        pd_whatsapp: 'Order on WhatsApp',
        pd_contact: 'Contact us',
        form_error_required: 'Please fill all required fields.',
        form_error_email: 'Please enter a valid email.',
        form_success: 'Message sent successfully ✓'
    }
};

// ===== DONNÉES DYNAMIQUES =====
const produits = [
    { id: 'rocenta', icon: 'fa-seedling', color: 'linear-gradient(135deg,#2d6a4f,#40916c)', fr: { name: 'Rocenta', tag: 'Produit Principal', desc: 'Santé générale & immunité. Supplément 100 % botanique à base de plantes et cellules souches.', tags: ['Placenta de Rose Bulgare','NMN','Algue Brune','Ashwagandha'] }, en: { name: 'Rocenta', tag: 'Main Product', desc: 'General health & immunity. 100% botanical supplement based on plants and stem cells.', tags: ['Bulgarian Rose Placenta','NMN','Brown Algae','Ashwagandha'] } },
    { id: 'aceguard', icon: 'fa-shield-halved', color: 'linear-gradient(135deg,#1b4332,#2d6a4f)', fr: { name: 'Aceguard', tag: 'Bouclier Immunitaire', desc: 'Renforce le système immunitaire. Triple formulation de cellules souches.', tags: ['Bêta-Glucane','Gymnema Sylvestre','Lait de Tigre','Graine Noire'] }, en: { name: 'Aceguard', tag: 'Immune Shield', desc: 'Strengthens the immune system. Triple stem cell formulation.', tags: ['Beta-Glucan','Gymnema Sylvestre','Tiger Milk','Black Seed'] } },
    { id: 'urbanism', icon: 'fa-weight-scale', color: 'linear-gradient(135deg,#e76f51,#f4a261)', fr: { name: 'Urbanism', tag: 'Gestion du Poids', desc: 'Programme minceur (Sunz + Moonz). Brûle la graisse viscérale sans régime restrictif.', tags: ['Morosil®','Sinetrol®','Coupe-faim','Remodelant'] }, en: { name: 'Urbanism', tag: 'Weight Management', desc: 'Weight loss program (Sunz + Moonz). Burns visceral fat without restrictive diet.', tags: ['Morosil®','Sinetrol®','Appetite Control','Shaping'] } },
    { id: 'collagene', icon: 'fa-hand-sparkles', color: 'linear-gradient(135deg,#d4a373,#faedcd)', fr: { name: 'Collagène', tag: 'Beauté & Régénération', desc: 'Régénère la peau, les articulations et les muscles. Paraissez 5 ans plus jeune.', tags: ['Collagène Marin','NMN','Nid d\'Oiseau','Élastine'] }, en: { name: 'Collagen', tag: 'Beauty & Regeneration', desc: 'Regenerates skin, joints and muscles. Look 5 years younger.', tags: ['Marine Collagen','NMN','Bird\'s Nest','Elastin'] } },
    { id: 'tripleroot', icon: 'fa-mars', color: 'linear-gradient(135deg,#3a0ca3,#4361ee)', fr: { name: 'Triple Root Coffee', tag: 'Santé Masculine', desc: 'Pour hommes adultes. Café santé qui booste la testostérone et la vitalité.', tags: ['Testostérone','Spermatozoïdes','Endurance','Libido'] }, en: { name: 'Triple Root Coffee', tag: 'Men\'s Health', desc: 'For adult men. Health coffee that boosts testosterone and vitality.', tags: ['Testosterone','Sperm Quality','Endurance','Libido'] } },
    { id: 'lyftmax', icon: 'fa-venus', color: 'linear-gradient(135deg,#c77dff,#9d4edd)', fr: { name: 'Lyftmax', tag: 'Santé Féminine', desc: 'Équilibre hormonal naturel. Raffermit et atténue les symptômes de la ménopause.', tags: ['Estro-G 100','Cycles menstruels','Libido','Ménopause'] }, en: { name: 'Lyftmax', tag: 'Women\'s Health', desc: 'Natural hormonal balance. Firms and relieves menopause symptoms.', tags: ['Estro-G 100','Menstrual Cycles','Libido','Menopause'] } },
    { id: 'acebrew', icon: 'fa-mug-hot', color: 'linear-gradient(135deg,#7f4f24,#a68a64)', fr: { name: 'Acebrew Coffee', tag: 'Café Santé', desc: 'Café santé enrichi au NMN. Contrôle la glycémie et booste l\'énergie.', tags: ['NMN','Gymnema Sylvestre','Glycémie','Énergie'] }, en: { name: 'Acebrew Coffee', tag: 'Health Coffee', desc: 'NMN-enriched health coffee. Controls blood sugar and boosts energy.', tags: ['NMN','Gymnema Sylvestre','Blood Sugar','Energy'] } }
];

const produitDetails = {
    rocenta: {
        fr: {
            intro: '<strong>Rocenta</strong> est le produit phare de DYNACE Global. Un supplément 100 % botanique à base de Placenta de Rose Bulgare, de NMN et d\'extraits de plantes soigneusement sélectionnés pour renforcer l\'immunité et revitaliser l\'organisme.',
            desc: 'Rocenta agit en profondeur sur le système immunitaire grâce à sa formulation unique associant des cellules souches végétales et des actifs naturels. Il aide à lutter contre la fatigue, renforce les défenses naturelles et favorise une meilleure récupération physique et mentale. Recommandé pour toute personne souhaitant maintenir une santé optimale au quotidien.',
            usage: 'Prendre 1 sachet le matin à jeun. Verser la poudre sous la langue, laisser dissoudre 30 secondes à 1 minute, puis avaler. Attendre 20 minutes avant de manger ou boire. Après 10 jours, passer à 2 sachets par jour maximum si nécessaire.'
        },
        en: {
            intro: '<strong>Rocenta</strong> is DYNACE Global\'s flagship product. A 100% botanical supplement based on Bulgarian Rose Placenta, NMN and carefully selected plant extracts to boost immunity and revitalize the body.',
            desc: 'Rocenta works deeply on the immune system thanks to its unique formulation combining plant stem cells and natural active ingredients. It helps fight fatigue, strengthens natural defenses and promotes better physical and mental recovery. Recommended for anyone wishing to maintain optimal health on a daily basis.',
            usage: 'Take 1 sachet in the morning on an empty stomach. Pour the powder under the tongue, let dissolve for 30 seconds to 1 minute, then swallow. Wait 20 minutes before eating or drinking. After 10 days, increase to a maximum of 2 sachets per day if necessary.'
        }
    },
    aceguard: {
        fr: {
            intro: '<strong>Aceguard</strong> est le bouclier immunitaire nouvelle génération. Sa triple formulation à base de cellules souches végétales offre une protection renforcée contre les agressions extérieures.',
            desc: 'Aceguard combine le Bêta-Glucane, le Gymnema Sylvestre, le Lait de Tigre et la Graine Noire pour créer une synergie protectrice unique. Il stimule les défenses naturelles de l\'organisme, aide à prévenir les infections saisonnières et soutient la vitalité globale. Idéal pour les périodes de changement de saison ou de convalescence.',
            usage: 'Prendre 1 sachet par jour, de préférence le matin à jeun. Verser sous la langue, laisser fondre 30 secondes. Pour les enfants, utiliser un demi-sachet. Durée recommandée : 30 jours, renouvelable.'
        },
        en: {
            intro: '<strong>Aceguard</strong> is the new generation immune shield. Its triple formulation based on plant stem cells offers reinforced protection against external aggressions.',
            desc: 'Aceguard combines Beta-Glucan, Gymnema Sylvestre, Tiger Milk and Black Seed to create a unique protective synergy. It stimulates the body\'s natural defenses, helps prevent seasonal infections and supports overall vitality. Ideal for seasonal changes or recovery periods.',
            usage: 'Take 1 sachet per day, preferably in the morning on an empty stomach. Pour under the tongue, let dissolve for 30 seconds. For children, use half a sachet. Recommended duration: 30 days, renewable.'
        }
    },
    urbanism: {
        fr: {
            intro: '<strong>Urbanism</strong> est un programme minceur complet (Sunz + Moonz) conçu pour brûler la graisse viscérale sans régime restrictif ni effet yo-yo.',
            desc: 'Urbanism associe le Morosil® (extrait de citrus fruitier) et le Sinetrol® (polyphénols d\'agrumes) pour un effet brûle-graisse puissant et naturel. Il agit en complément d\'une alimentation équilibrée pour remodeler la silhouette, réduire les mesures et retrouver un poids de forme. Sans effet secondaire, il respecte l\'équilibre nutritionnel du corps.',
            usage: 'Prendre Sunz le matin avant le petit-déjeuner (1 capsule). Prendre Moonz le soir avant le dîner (1 capsule). Boire au moins 1,5 L d\'eau par jour. Cure recommandée de 3 mois pour des résultats optimaux.'
        },
        en: {
            intro: '<strong>Urbanism</strong> is a complete weight loss program (Sunz + Moonz) designed to burn visceral fat without restrictive diet or yo-yo effect.',
            desc: 'Urbanism combines Morosil® (citrus fruit extract) and Sinetrol® (citrus polyphenols) for a powerful and natural fat-burning effect. It works alongside a balanced diet to reshape the silhouette, reduce measurements and regain a healthy weight. No side effects, it respects the body\'s nutritional balance.',
            usage: 'Take Sunz in the morning before breakfast (1 capsule). Take Moonz in the evening before dinner (1 capsule). Drink at least 1.5 L of water per day. Recommended 3-month cure for optimal results.'
        }
    },
    collagene: {
        fr: {
            intro: '<strong>Collagène</strong> est le supplément beauté et régénération par excellence. À base de Collagène Marin, NMN, Nid d\'Oiseau et Élastine, il régénère la peau, les articulations et les muscles.',
            desc: 'Le Collagène DYNACE est un complexe complet anti-âge qui agit de l\'intérieur. Il stimule la production naturelle de collagène, améliore l\'élasticité de la peau, renforce les ongles et les cheveux, et soulage les douleurs articulaires. Les utilisateurs rapportent une peau plus ferme et plus jeune dès 3 mois d\'utilisation.',
            usage: 'Prendre 1 sachet par jour, dilué dans un verre d\'eau ou de jus de fruit, de préférence le matin à jeun. Cure recommandée de 3 mois pour des résultats visibles. Peut être associé à Lyftmax pour un résultat synergique.'
        },
        en: {
            intro: '<strong>Collagen</strong> is the ultimate beauty and regeneration supplement. Based on Marine Collagen, NMN, Bird\'s Nest and Elastin, it regenerates skin, joints and muscles.',
            desc: 'DYNACE Collagen is a complete anti-aging complex that works from within. It stimulates natural collagen production, improves skin elasticity, strengthens nails and hair, and relieves joint pain. Users report firmer, younger-looking skin within 3 months of use.',
            usage: 'Take 1 sachet per day, diluted in a glass of water or fruit juice, preferably in the morning on an empty stomach. Recommended 3-month cure for visible results. Can be combined with Lyftmax for a synergistic effect.'
        }
    },
    tripleroot: {
        fr: {
            intro: '<strong>Triple Root Coffee</strong> est un café santé spécialement conçu pour les hommes adultes. Il booste naturellement la testostérone et la vitalité masculine.',
            desc: 'Triple Root Coffee est bien plus qu\'un simple café. Enrichi en actifs naturels, il améliore la production de testostérone, augmente l\'endurance physique et sexuelle, et améliore la qualité du sperme. Sa formulation unique permet une meilleure circulation sanguine et une vitalité retrouvée. Résultats visibles dès 2 à 4 semaines.',
            usage: 'Prendre 1 tasse par jour, de préférence le matin. Diluer le contenu d\'un sachet dans de l\'eau chaude (comme un café instantané). Ne pas dépasser 2 tasses par jour. Déconseillé aux hommes de moins de 18 ans.'
        },
        en: {
            intro: '<strong>Triple Root Coffee</strong> is a health coffee specially designed for adult men. It naturally boosts testosterone and male vitality.',
            desc: 'Triple Root Coffee is much more than a simple coffee. Enriched with natural active ingredients, it improves testosterone production, increases physical and sexual endurance, and improves sperm quality. Its unique formulation allows better blood circulation and renewed vitality. Visible results from 2 to 4 weeks.',
            usage: 'Take 1 cup per day, preferably in the morning. Dilute the contents of one sachet in hot water (like instant coffee). Do not exceed 2 cups per day. Not recommended for men under 18.'
        }
    },
    lyftmax: {
        fr: {
            intro: '<strong>Lyftmax</strong> est le complément santé féminin par excellence. Il équilibre naturellement les hormones, raffermit et atténue les symptômes de la ménopause.',
            desc: 'Lyftmax contient de l\'Estro-G 100, un extrait végétal standardisé qui régule le cycle menstruel et atténue les désagréments de la ménopause (bouffées de chaleur, sautes d\'humeur). Il raffermit la poitrine, améliore la libido féminine et redonne de l\'énergie. Idéal pour les femmes souhaitant traverser sereinement chaque étape de leur vie.',
            usage: 'Prendre 1 capsule par jour, de préférence le matin avec un verre d\'eau. Cure recommandée de 3 mois. Peut être associé au Collagène pour un effet beauté complet.'
        },
        en: {
            intro: '<strong>Lyftmax</strong> is the ultimate female health supplement. It naturally balances hormones, firms and reduces menopause symptoms.',
            desc: 'Lyftmax contains Estro-G 100, a standardized plant extract that regulates the menstrual cycle and reduces menopausal discomfort (hot flashes, mood swings). It firms the bust, improves female libido and restores energy. Ideal for women wishing to go through each stage of their life serenely.',
            usage: 'Take 1 capsule per day, preferably in the morning with a glass of water. Recommended 3-month cure. Can be combined with Collagen for a complete beauty effect.'
        }
    },
    acebrew: {
        fr: {
            intro: '<strong>Acebrew Coffee</strong> est un café santé enrichi au NMN. Il contrôle la glycémie et booste l\'énergie au quotidien.',
            desc: 'Acebrew Coffee associe le NMN (Nicotinamide Mononucléotide), le Gymnema Sylvestre et des extraits de café vert pour offrir une boisson énergisante et santé. Il aide à réguler le taux de sucre dans le sang, stimule le métabolisme cellulaire et procure une énergie durable sans nervosité. Idéal pour les diabétiques et les personnes soucieuses de leur glycémie.',
            usage: 'Prendre 1 tasse par jour, le matin au petit-déjeuner. Diluer un sachet dans de l\'eau chaude. Ne pas dépasser 2 tasses par jour. Peut être consommé avec ou sans sucre.'
        },
        en: {
            intro: '<strong>Acebrew Coffee</strong> is an NMN-enriched health coffee. It controls blood sugar and boosts daily energy.',
            desc: 'Acebrew Coffee combines NMN (Nicotinamide Mononucleotide), Gymnema Sylvestre and green coffee extracts to offer an energizing and healthy drink. It helps regulate blood sugar levels, stimulates cellular metabolism and provides lasting energy without edginess. Ideal for diabetics and people concerned about their blood sugar.',
            usage: 'Take 1 cup per day, in the morning at breakfast. Dilute one sachet in hot water. Do not exceed 2 cups per day. Can be consumed with or without sugar.'
        }
    }
};

const temoignages = {
    fr: [
        { text: 'Grâce à Rocenta, j\'ai retrouvé mon énergie. Je ne pensais pas qu\'un produit naturel pouvait autant m\'aider.', name: 'Marie K.', desc: 'Client depuis 6 mois' },
        { text: 'Après 3 mois de cure Collagène + Lyftmax, ma peau est plus ferme et je me sens mieux dans mon corps.', name: 'Aïssatou D.', desc: 'Péhunco' },
        { text: 'Triple Root Coffee a changé ma vie. Plus d\'énergie, meilleure endurance. Je recommande vivement.', name: 'Jean-Baptiste T.', desc: 'Client satisfait' }
    ],
    en: [
        { text: 'Thanks to Rocenta, I got my energy back. I didn\'t think a natural product could help me this much.', name: 'Marie K.', desc: 'Client for 6 months' },
        { text: 'After 3 months of Collagen + Lyftmax, my skin is firmer and I feel better in my body.', name: 'Aïssatou D.', desc: 'Péhunco' },
        { text: 'Triple Root Coffee changed my life. More energy, better endurance. Highly recommend.', name: 'Jean-Baptiste T.', desc: 'Satisfied client' }
    ]
};

const faqData = {
    fr: [
        { q: 'Comment prendre Rocenta ?', r: 'Le matin à jeun : verser la poudre sous la langue, laisser dissoudre 30s-1min, attendre 20min avant de manger ou boire. Maximum 2 sachets/jour après 10 jours.' },
        { q: 'Y a-t-il des effets secondaires ?', r: 'Rocenta est 100% botanique sans effets secondaires. Des légères réactions (démangeaisons, vertiges) sont normales les premiers jours et disparaissent.' },
        { q: 'Les femmes enceintes peuvent-elles consommer ?', r: 'Par précaution, nous déconseillons nos produits pendant la grossesse. Après l\'accouchement, Rocenta est recommandé pour les mères allaitantes.' },
        { q: 'Quels produits pour les enfants ?', r: 'Rocenta est recommandé dès 4-5 ans pour la santé générale et la mémoire. Aceguard en demi-sachet pour l\'immunité. Les autres produits sont réservés aux adultes.' }
    ],
    en: [
        { q: 'How to take Rocenta?', r: 'In the morning on an empty stomach: pour powder under the tongue, let dissolve 30s-1min, wait 20min before eating or drinking. Max 2 sachets/day after 10 days.' },
        { q: 'Are there side effects?', r: 'Rocenta is 100% botanical with no side effects. Mild reactions (itching, dizziness) are normal the first few days and disappear.' },
        { q: 'Can pregnant women consume?', r: 'As a precaution, we advise against our products during pregnancy. After childbirth, Rocenta is recommended for breastfeeding mothers.' },
        { q: 'Which products for children?', r: 'Rocenta is recommended from 4-5 years for general health and memory. Aceguard half-sachet for immunity. Other products are for adults only.' }
    ]
};

// ===== LANGUE =====
let currentLang = localStorage.getItem('dynace_lang') || 'fr';

function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('dynace_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const val = i18n[lang][key];
        if (val) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        const val = i18n[lang][key];
        if (val) el.placeholder = val;
    });
    document.title = i18n[lang].meta_title;

    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === lang);
        b.setAttribute('aria-pressed', b.dataset.lang === lang);
    });

    if (document.getElementById('produitsGrid')) renderProducts(lang);
    if (document.getElementById('testiGrid')) renderTestimonials(lang);
    if (document.getElementById('faqList')) renderFAQ(lang);

    const params = new URLSearchParams(window.location.search);
    const pid = params.get('id');
    if (pid && document.getElementById('productDetail')) {
        renderProductDetail(pid, lang);
    }
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ===== PRODUCT DETAIL PAGE =====
function renderProductDetail(id, lang) {
    const container = document.getElementById('productDetail');
    if (!container) return;
    const p = produits.find(x => x.id === id);
    if (!p) { container.innerHTML = '<div class="container" style="padding:10rem 1.5rem;text-align:center;"><h2>Produit introuvable</h2><a href="index.html" class="btn btn-primary">Retour aux produits</a></div>'; return; }
    const d = p[lang];
    const det = produitDetails[id][lang];

    document.title = d.name + ' – DYNACE Global Péhunco';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = d.desc;

    container.innerHTML = `
        <section class="pd-hero" style="background:${p.color}">
            <div class="container pd-hero-content">
                <a href="index.html#produits" class="pd-back" data-i18n="pd_back">← Retour aux produits</a>
                <div class="pd-hero-inner">
                    <div class="pd-icon"><i class="fas ${p.icon}"></i></div>
                    <div>
                        <span class="pd-tag">${d.tag}</span>
                        <h1 class="pd-title">${d.name}</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container pd-grid">
                <div class="pd-section">
                    <h2 class="pd-section-title" data-i18n="pd_intro">Introduction</h2>
                    <p class="pd-text">${det.intro}</p>
                </div>
                <div class="pd-section">
                    <h2 class="pd-section-title" data-i18n="pd_desc">Description</h2>
                    <p class="pd-text">${det.desc}</p>
                </div>
                <div class="pd-section">
                    <h2 class="pd-section-title" data-i18n="pd_usage">Utilisation / Posologie</h2>
                    <div class="pd-usage-box">
                        <i class="fas fa-clock"></i>
                        <p>${det.usage}</p>
                    </div>
                </div>
                <div class="pd-section">
                    <h2 class="pd-section-title" data-i18n="pd_ingredients">Ingrédients clés</h2>
                    <div class="pd-tags">${d.tags.map(t => `<span class="pd-tag-item">${t}</span>`).join('')}</div>
                </div>
                <div class="pd-section">
                    <div class="pd-cta">
                        <a href="https://wa.me/2290166212501?text=Bonjour%20je%20souhaite%20des%20informations%20sur%20${encodeURIComponent(d.name)}" target="_blank" rel="noopener" class="btn btn-whatsapp"><i class="fab fa-whatsapp"></i> <span data-i18n="pd_whatsapp">Commander sur WhatsApp</span></a>
                        <a href="index.html#contact" class="btn btn-primary"><span data-i18n="pd_contact">Nous contacter</span></a>
                    </div>
                </div>
            </div>
        </section>`;
    observeReveal();
}

// ===== RENDER PRODUITS =====
function renderProducts(lang) {
    const grid = document.getElementById('produitsGrid');
    grid.innerHTML = produits.map(p => {
        const d = p[lang];
        return `<a href="produit.html?id=${p.id}" class="produit-card reveal">
            <div class="produit-image" style="background:${p.color}"><i class="fas ${p.icon}"></i></div>
            <div class="produit-body">
                <h3>${d.name}</h3>
                <span class="produit-tag">${d.tag}</span>
                <p>${d.desc}</p>
                <ul>${d.tags.map(t => `<li>${t}</li>`).join('')}</ul>
            </div>
        </a>`;
    }).join('');
    observeReveal();
}

// ===== RENDER TESTIMONIALS =====
function renderTestimonials(lang) {
    const grid = document.getElementById('testiGrid');
    const data = temoignages[lang];
    grid.innerHTML = data.map(t => `
        <div class="testi-card reveal">
            <p>${t.text}</p>
            <strong>${t.name}</strong>
            <small>${t.desc}</small>
        </div>
    `).join('');
    observeReveal();
}

// ===== RENDER FAQ =====
function renderFAQ(lang) {
    const list = document.getElementById('faqList');
    const data = faqData[lang];
    list.innerHTML = data.map((item, i) => `
        <div class="faq-item reveal" data-index="${i}">
            <button class="faq-question">
                ${item.q} <i class="fas fa-chevron-down"></i>
            </button>
            <div class="faq-answer"><div class="faq-answer-inner">${item.r}</div></div>
        </div>
    `).join('');
    observeReveal();
}

function toggleFAQ(btn) {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-answer').style.maxHeight = '0';
    });
    if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }
}

// ===== REVEAL ON SCROLL =====
function observeReveal() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal:not(.observed)').forEach(el => {
        el.classList.add('observed');
        observer.observe(el);
    });
}

// ===== STATS COUNTER =====
function animateStats() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                if (!target) return;
                const duration = 2000;
                const start = performance.now();
                function update(now) {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.floor(eased * target) + (target === 100 ? '%' : '+');
                    if (progress < 1) requestAnimationFrame(update);
                }
                requestAnimationFrame(update);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.stat-num').forEach(el => observer.observe(el));
}

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const error = document.getElementById('formError');
    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const tel = document.getElementById('formTel').value.trim();
    const msg = document.getElementById('formMsg').value.trim();

    error.classList.remove('visible');

    if (!name || !email || !msg) {
        error.textContent = i18n[currentLang].form_error_required;
        error.classList.add('visible');
        return;
    }
    if (!email.includes('@') || !email.includes('.')) {
        error.textContent = i18n[currentLang].form_error_email;
        error.classList.add('visible');
        return;
    }

    const btn = document.getElementById('formSubmit');
    const original = btn.textContent;
    btn.disabled = true;
    btn.textContent = '⏳ ...';

    try {
        const payload = { name, email, tel, message: msg };
        const resp = await fetch('https://formspree.io/f/xjkgzknj', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        btn.textContent = '✓ ' + i18n[currentLang].form_success;
        btn.style.background = '#2d6a4f';
        this.reset();
    } catch (err) {
        error.textContent = 'Erreur d\'envoi. Veuillez réessayer ou nous écrire par email.';
        error.classList.add('visible');
        btn.textContent = original;
        btn.disabled = false;
    }
});

// ===== HEADER SCROLL =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== SCROLL TOP =====
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 300);
});
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== MOBILE NAV =====
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
    navToggle.querySelector('i').className = open ? 'fas fa-times' : 'fas fa-bars';
});
nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.querySelector('i').className = 'fas fa-bars';
    });
});

// ===== PWA =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js?v=2').catch(err => {
            console.warn('SW registration failed:', err);
        });
    });
}

let deferredPrompt;
const pwaBanner = document.getElementById('pwaBanner');
const pwaInstallBtn = document.getElementById('pwaInstall');
const pwaCloseBtn = document.getElementById('pwaClose');

window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    pwaBanner.classList.add('show');
});

pwaInstallBtn?.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const result = await deferredPrompt.userChoice;
        if (result.outcome === 'accepted') pwaBanner.classList.remove('show');
        deferredPrompt = null;
    }
});
pwaCloseBtn?.addEventListener('click', () => pwaBanner.classList.remove('show'));

window.addEventListener('appinstalled', () => pwaBanner.classList.remove('show'));

// ===== FAQ EVENT DELEGATION =====
const faqList = document.getElementById('faqList');
if (faqList) {
    faqList.addEventListener('click', function(e) {
        const btn = e.target.closest('.faq-question');
        if (btn) toggleFAQ(btn);
    });
}

// ===== INIT =====
const params = new URLSearchParams(window.location.search);
if (params.get('id')) {
    applyLang(currentLang);
} else {
    applyLang(currentLang);
    animateStats();
    observeReveal();
}

})();
