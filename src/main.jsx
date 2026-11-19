import React from 'react';
import { createRoot } from 'react-dom/client';
import { contenu, navigation, praticienne } from './contenu.js';
import './styles.css';

const chemin = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\/?$/, '/');
const page = navigation.find(({ href }) => href === chemin)?.id ?? 'accueil';

function Arbre({ className = '' }) {
  return <img className={className} src="/images/arbre-anastasia.png" alt="" width="712" height="704" />;
}

function Marque() {
  return (
    <a className="marque" href="/">
      <Arbre className="symbole" />
      <span>{praticienne.nom}<small>Hypnose à Montauban</small></span>
    </a>
  );
}

function LiensNavigation() {
  return navigation.map(({ id, href, label }) => (
    <a key={id} href={href} aria-current={page === id ? 'page' : undefined}>{label}</a>
  ));
}

function EnTete() {
  return (
    <header className="en-tete">
      <div className="largeur en-tete-interieur">
        <Marque />
        <nav aria-label="Navigation principale"><LiensNavigation /></nav>
        <a className="bouton bouton-secondaire header-contact" href="#rendez-vous">Rendez-vous</a>
      </div>
    </header>
  );
}

function Ondes({ arbre = false }) {
  return (
    <div className={arbre ? 'ondes ondes-arbre' : 'ondes'} aria-hidden="true">
      <div className="relief">
        {Array.from({ length: 18 }, (_, index) => (
          <span key={index} style={{ '--rang': index }} />
        ))}
      </div>
      {arbre && <Arbre className="arbre-principal" />}
    </div>
  );
}

function RendezVous() {
  return (
    <section className="contact" id="rendez-vous" aria-labelledby="titre-contact">
      <div className="largeur contact-interieur">
        <div>
          <h2 id="titre-contact">Prendre rendez-vous</h2>
          <address>{praticienne.adresse}<br />{praticienne.commune}</address>
        </div>
        <a className="bouton" href={praticienne.rendezVous}>Appeler le {praticienne.telephone}</a>
      </div>
    </section>
  );
}

function Accueil() {
  const { titre, introduction, approche } = contenu.accueil;

  return (
    <>
      <section className="hero">
        <div className="largeur hero-grille">
          <div className="hero-texte">
            <p className="surtitre">{praticienne.activite} à {praticienne.ville}</p>
            <h1>{titre[0]}<br /><em>{titre[1]}</em></h1>
            <p className="introduction">{introduction}</p>
            <div className="actions">
              <a className="bouton" href="#rendez-vous">Prendre rendez-vous</a>
              <a className="lien-texte" href="/accompagnements/">Voir les accompagnements</a>
            </div>
          </div>
          <Ondes arbre />
        </div>
      </section>
      <section className="decouvrir" aria-labelledby="titre-decouvrir">
        <div className="largeur decouvrir-grille">
          <h2 id="titre-decouvrir">Comment je vous accompagne</h2>
          <div>
            <p>{approche}</p>
            <a className="lien-texte" href="/a-propos/">Faire connaissance avec Anastasia</a>
          </div>
        </div>
      </section>
    </>
  );
}

function Accompagnements() {
  const { introduction, prestations, stress } = contenu.accompagnements;

  return (
    <>
      <section className="largeur page-interieure" aria-labelledby="titre-accompagnements">
        <header className="introduction-page">
          <h1 id="titre-accompagnements">Les accompagnements</h1>
          <p className="introduction">{introduction}</p>
        </header>
        <div className="prestations">
          {prestations.map(({ titre, description }) => (
            <section className="prestation" key={titre}>
              <h2>{titre}</h2>
              <p>{description}</p>
            </section>
          ))}
        </div>
        <p className="note">L’hypnose peut s’inscrire en complément d’un suivi médical. Un professionnel de santé reste votre interlocuteur pour tout symptôme persistant.</p>
      </section>
      <section className="decouvrir" aria-labelledby="titre-stress">
        <div className="largeur decouvrir-grille">
          <h2 id="titre-stress">Quand le stress s’installe au quotidien</h2>
          <div>{stress.map((paragraphe) => <p key={paragraphe}>{paragraphe}</p>)}</div>
        </div>
      </section>
    </>
  );
}

function APropos() {
  const { introduction, parcours } = contenu.aPropos;
  const { photo } = praticienne;

  return (
    <section className="page-interieure">
      <div className="largeur interieur-grille">
        <div>
          <h1>Je suis <em>{praticienne.nom}.</em></h1>
          <p className="introduction">{introduction}</p>
          <h2 className="titre-parcours">Mon parcours et ma pratique</h2>
          {parcours.map((paragraphe) => <p key={paragraphe}>{paragraphe}</p>)}
        </div>
        {photo ? <img className="portrait" src={photo.src} alt={photo.alt} /> : <Ondes arbre />}
      </div>
    </section>
  );
}

const Pages = { accueil: Accueil, accompagnements: Accompagnements, 'a-propos': APropos };
const Page = Pages[page];

function Site() {
  return (
    <>
      <a className="evitement" href="#contenu">Aller au contenu</a>
      <EnTete />
      <main id="contenu" tabIndex={-1}>
        <Page />
        <RendezVous />
      </main>
      <footer className="pied">
        <div className="largeur pied-interieur">
          <Marque />
          <nav aria-label="Navigation de pied de page"><LiensNavigation /></nav>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<Site />);
