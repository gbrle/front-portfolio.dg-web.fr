import illustrationCompetences from "./illustration-competences.svg";

export default function Competences() {
  return (
    <div className="fadeIn">
      <h1>Compétences</h1>
      <p>
        Je me forme au quotidien à de nouvelles technologies. Chaque problème
        rencontré est un plus en savoir faire. Ouvert à toutes nouvelles
        technologies, l'apprentissage ne me fait pas peur.
      </p>
      <div className="d-flex justify-content-center">
        <img
          className="img-fluid w-75 pt-5"
          alt="Illustration de mes compétences en développement web"
          src={illustrationCompetences}
        />
      </div>
    </div>
  );
}
