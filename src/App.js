import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Section from "./components/Section";
import "./styles.css";

const gamesListdata = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends"
  },

  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant"
  },

  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft"
  },

  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT"
  }
];

const channelListdata = [
  {
    href: "https://www.twitch.tv/maykbrito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito"
  },

  {
    href: "https://www.twitch.tv/alanzoka",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png",
    alt: "Imagem de Alanzoka"
  },

  {
    href: "https://www.twitch.tv/cellbit",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/cb885149-f7f7-48f0-99ae-fe0a386ed3e2-profile_image-150x150.png",
    alt: "Imagemd de Cellbit"
  }
];

const socialListData = [
  {
    url: "https://twitch.com/eduardogonçalves",
    imageUrl: "/assets/twitch.svg",
    alt: "twitch do Eduardo"
  },
  {
    url: "https://twitter.com/eduardogonçalves",
    imageUrl: "/assets/twitter.svg",
    alt: "twitter do Eduardo"
  },
  {
    url: "https://instagram.com/eduardogonçalves",
    imageUrl: "/assets/instagram.svg",
    alt: "instagram do Eduardo"
  },
  {
    url: "https://youtube.com/eduardogonçalves",
    imageUrl: "/assets/youtube.svg",
    alt: "Youtube do Eduardo"
  }
];

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Section
          title="Meus jogos"
          subTitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {gamesListdata.map((item) => {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}

          <ListItem
            url="https://www.twitch.tv/directory/game/League%20of%20Legends"
            imageUrl="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg"
            alt="Imagem do jogo League of Legends"
          />
        </Section>
        <Section
          title="Canais e streamers"
          subTitle="Lista de canais e transmissões que não perco!"
          className="channel-list"
        >
          {channelListdata.map((item) => {
            return <ListItem {...item} />;
          })}
        </Section>
        <Section title="Minhas redes" subTitle="Se conecte comigo afora mesmo!">
          {socialListData.map((item) => {
            return <ListItem {...item} />;
          })}
        </Section>
      </main>
    </div>
  );
}
