interface Props {
  name: string;
  relics: string[];
}

const Relics = ({ name, relics }: Props) => {
  return (
    <section className="relics__list">
      <h2 className="text-main mb-2 font-bold">{name}</h2>
      {relics.map((relic) => (
        <p key={relic} className="mb-1 text-sm sm:mb-2 sm:text-base">
          {relic}
        </p>
      ))}
    </section>
  );
};

export default Relics;
