<script lang="ts">
  import GameCard from "./GameCard.svelte";

  type GameCard = {
    title: string;
    videoURL: string;
    content: string;
  };

  const gameCards: GameCard[] = [
    {
      title: "2022-23 CHARGED UP",
      videoURL: "https://www.youtube-nocookie.com/embed/m-qwsMmkFwg",
      content:
        "For the 2022-23 robotics season, Team 4914 looks forward to having a successful season after a brief shutdown due to the pandemic.",
    },
    {
      title: "2021-22 RAPID REACT",
      videoURL: "https://www.youtube-nocookie.com/embed/LgniEjI9cCM",
      content:
        "For the 2021-2022 robotics season, Team 4914 began brainstorming a new robot and possible game strategies. Team 4914 withdrew from the 2022 official FRC competition due to the resurgence of the COVID-19 pandemic.",
    },
    {
      title: "2020-21 INFINITE RECHARGE",
      videoURL: "https://www.youtube-nocookie.com/embed/gmiYWTmFRVE",
      content:
        "For the 2019-2020 robotics season, Team 4914 began building and brainstorming from the kickoff date and soon began prototyping. The robot could hold 3 game pieces at once and use computer vision to auto aim at the upper target.",
    },
    {
      title: "2022-23 CHARGED UP",
      videoURL: "https://www.youtube-nocookie.com/embed/m-qwsMmkFwg",
      content:
        "For the 2022-23 robotics season, Team 4914 looks forward to having a successful season after a brief shutdown due to the pandemic.",
    },
  ];
</script>

<h1 class="my-3 font-bold text-5xl text-center">Past Games</h1>
<!--Header-->
<div class="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 p-5">
  {#each gameCards as card}
    <GameCard
      title={card.title}
      videoURL={card.videoURL}
      content={card.content}
    />
  {/each}
</div>
