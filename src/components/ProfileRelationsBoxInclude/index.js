import { ProfileRelationsBoxWrapper } from "../../components";

export const ProfileRelationsBoxInclude = ({ title, list }) => {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {title} ({list.length})
      </h2>

      <ul>
        {list.map((itemAtual) => {
          return (
            <li key={itemAtual.id}>
              <a href={itemAtual.direct}>
                <img src={itemAtual.image} />
                <span>{itemAtual.title}</span>
              </a>
            </li>
          );
        })}
      </ul>

      {list.length > 5 && <a className="smallTitle">Ver todos</a>}
    </ProfileRelationsBoxWrapper>
  );
};
