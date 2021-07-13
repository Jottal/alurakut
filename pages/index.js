import { useState } from "react";
import {
  Box,
  MainGrid,
  ProfileRelationsBoxWrapper,
  ProfileRelationsBoxInclude,
} from "../src/components";
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
  AlurakutProfileSidebarMenuDefault,
} from "../src/lib/AlurakutCommons";
import ids from "../src/lib/general.json";

const ProfileSideBar = ({ githubUser }) => (
  <Box as="aside">
    <img
      src={`https://github.com/${githubUser}.png`}
      style={{ borderRadius: "8px" }}
    />
    <hr />

    <p>
      <a className="boxLink" href={`https://github.com/${githubUser}`}>
        @{githubUser}
      </a>
    </p>
    <hr />

    <AlurakutProfileSidebarMenuDefault />
  </Box>
);

export default function Home() {
  const [comunidades, setComunidades] = useState([
    {
      id: "12312341241241",
      title: "Eu odeio acordar cedo",
      image: "https://alurakut.vercel.app/capa-comunidade-01.jpg",
      direct: "/users/Eu odeio acordar cedo",
    },
  ]);

  const githubUser = "Jottal";
  const pessoasFavoritas = ids.friends;

  const handleCriaComunidade = (event) => {
    event.preventDefault();
    const dadosDoForm = new FormData(event.target);

    const comunidade = {
      id: new Date().toISOString(),
      title: dadosDoForm.get("title"),
      image: dadosDoForm.get("image"),
    };

    setComunidades([...comunidades, comunidade]);
  };

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={handleCriaComunidade}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>

              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa?"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa?"
                />
              </div>

              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>

        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxInclude title="Comunidades" list={comunidades} />
          <ProfileRelationsBoxInclude
            title="Pessoas da comunidade"
            list={pessoasFavoritas}
          />
        </div>
      </MainGrid>
    </>
  );
}
