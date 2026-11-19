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

function EnTete() {
  return (
    <header className="en-tete">
      <div className="largeur en-tete-interieur">
        <Marque />
        <nav className="navigation-site" aria-label="Navigation principale">
          {navigation.map(({ id, href, label }) => (
            <a
              className="bouton bouton-secondaire"
              key={id}
              href={href}
              aria-current={page === id ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="bouton bouton-secondaire header-contact" href="#rendez-vous">Rendez-vous</a>
      </div>
    </header>
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
            <h1>{titre[0]}<br /><span className="accent-titre">{titre[1]}</span></h1>
            <p className="introduction">{introduction}</p>
            <div className="actions">
              <a className="bouton" href="#rendez-vous">Prendre rendez-vous</a>
              <a className="lien-texte" href="/accompagnements/">Voir les accompagnements</a>
            </div>
          </div>
          <img
            className="photo-sentier"
            src="/images/sentier-boise.webp"
            alt=""
            width="1200"
            height="900"
            fetchPriority="high"
          />
        </div>
      </section>
      <section className="approche" aria-labelledby="titre-decouvrir">
        <div className="largeur grille-approche">
          <img
            className="photo-approche"
            src="/images/anastasia-profil.webp"
            alt="Anastasia Kothé assise, près d’une lampe allumée"
            width="660"
            height="880"
            loading="lazy"
          />
          <div>
            <h2 id="titre-decouvrir">Comment je vous accompagne</h2>
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
          <div>
            <h1 id="titre-accompagnements">Les accompagnements</h1>
            <p className="introduction">{introduction}</p>
          </div>
          <img className="photo-feuillage" src="/images/feuillage-automne.webp" alt="" width="880" height="660" />
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
      <section className="stress" aria-labelledby="titre-stress">
        <div className="largeur grille-texte">
          <div>
            <h2 id="titre-stress">Quand le stress s’installe au quotidien</h2>
            {stress.map((paragraphe) => <p key={paragraphe}>{paragraphe}</p>)}
          </div>
          <img className="photo-cascade" src="/images/cascade.webp" alt="" width="675" height="900" loading="lazy" />
        </div>
      </section>
    </>
  );
}

function APropos() {
  const { introduction, parcours, cabinet } = contenu.aPropos;
  const { photo } = praticienne;

  return (
    <>
      <section className="page-interieure page-parcours">
        <div className="largeur parcours-grille">
          <div>
            <h1>Mon <span className="accent-titre">parcours</span></h1>
            <p className="introduction">{introduction}</p>
            <div className="formation-parcours">
              <h2>De la psychologie à l’hypnose</h2>
              <p>{parcours.diplomes}</p>
            </div>
          </div>
          <img className="portrait" {...photo} />
        </div>
      </section>
      <section className="approche pratique" aria-labelledby="titre-pratique">
        <div className="largeur">
          <h2 id="titre-pratique">Ma façon de travailler</h2>
          <div className="pratique-grille">
            {parcours.pratique.map(({ titre, texte }) => (
              <article className="pratique-bloc" key={titre}>
                <h3>{titre}</h3>
                <p>{texte}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="cabinet" aria-labelledby="titre-cabinet">
        <div className="largeur cabinet-grille">
          <div>
            <h2 id="titre-cabinet">Le cabinet à Montauban</h2>
            <p>{cabinet}</p>
            <a className="lien-texte" href="#rendez-vous">Voir les coordonnées</a>
          </div>
          <img
            className="photo-cabinet"
            src="/images/cabinet-anastasia.webp"
            alt="Intérieur du cabinet, avec un canapé gris, une table basse et des plantes près de la fenêtre"
            width="1400"
            height="1050"
            loading="lazy"
          />
        </div>
      </section>
    </>
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
        <div className="largeur">{praticienne.nom}</div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<Site />);
