import { ProfileRelationsBoxWrapper } from "../../components";

export const ProfileRelationsBoxInclude = ({ title, list }) => {
  const runCards = () => {
    const newList = list.slice(0, 5);

    return newList.map((itemAtual) => {
      return (
        <li key={itemAtual.id}>
          <a href={itemAtual.direct}>
            <img src={itemAtual.image} />
            <span>{itemAtual.title}</span>
          </a>
        </li>
      );
    });
  };

  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {title} ({list.length})
      </h2>

      <ul>{runCards()}</ul>

      {list.length > 6 && <a className="smallTitle">Ver todos</a>}
    </ProfileRelationsBoxWrapper>
  );
};
