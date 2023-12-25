<script lang="ts">
  import { onMount } from "svelte";

  import AwardCard from "./AwardCard.svelte";
  import AwardsSearch from "./AwardsSearch.svelte";
  import NoResult from "./NoResult.svelte";

  type Award = {
    img: string;
    imgAlt: string;
    title: string;
    year: number;
    link: string; // eg https://frc-events.firstinspires.org/2021/team/4914
    description: string;
  };

  const awards: Award[] = [
    // sorted most recent to oldest
    {
      img: "/awards/awards2019.jpg",
      imgAlt: "awards 2019",
      title: "2019 Finalist",
      year: 2019,
      link: "https://www.thebluealliance.com/event/2019onsi",
      description: "Southwest International",
    },
    {
      img: "/awards/awards2019.jpg",
      imgAlt: "awards 2019",
      title: "2019 Team Spirit Award",
      year: 2019,
      link: "https://www.thebluealliance.com/event/2019onnyo",
      description: "ONT District York University Regional",
    },
    {
      img: "/about-us-hero.png",
      imgAlt: "Victoria Park Robotics icon",
      title: "2018 Team Spirit Award",
      year: 2018,
      link: "https://www.thebluealliance.com/event/2018onnob",
      description: "ONT District North Bay Event",
    },
    {
      img: "/about-us-hero.png",
      imgAlt: "Victoria Park Robotics icon",
      title: "2017 Engineering Inspiration Award",
      year: 2017,
      link: "https://www.thebluealliance.com/event/2017onnob",
      description: "ONT District North Bay Event",
    },
    {
      img: "/about-us-hero.png",
      imgAlt: "Victoria Park Robotics icon",
      title: "2017 Woodie Flowers Semi-Finalist",
      year: 2017,
      link: "https://www.thebluealliance.com/event/2017onnob",
      description: "ONT District North Bay Event",
    },
    {
      img: "/awards/awards2016.jpg",
      imgAlt: "awards 2016",
      title: "2016 Gracious Professionalism Award",
      year: 2016,
      link: "https://www.thebluealliance.com/event/2016onwi",
      description: "Windsor Essex Great Lakes Regional",
    },
    {
      img: "/about-us-hero.png",
      imgAlt: "Victoria Park Robotics icon",
      title: "2015 Dean's List Finalist (Hanna Zhang)",
      year: 2015,
      link: "https://www.thebluealliance.com/event/2015onto2",
      description: "Greater Toronto Central Regional",
    },
    {
      img: "/about-us-hero.png",
      imgAlt: "Victoria Park Robotics icon",
      title: "2015 Team Spirit Award",
      year: 2015,
      link: "https://www.thebluealliance.com/event/2015onto2",
      description: "Greater Toronto Central Regional",
    },
    {
      img: "/about-us-hero.png",
      imgAlt: "Victoria Park Robotics icon",
      title: "2015 Imagery Award",
      year: 2015,
      link: "https://www.thebluealliance.com/event/2015onto2",
      description: "Greater Toronto Central Regional",
    },
    {
      img: "/about-us-hero.png",
      imgAlt: "Victoria Park Robotics icon",
      title: "2014 Winner",
      year: 2014,
      link: "https://www.thebluealliance.com/event/2014onnb",
      description: "North Bay Regional",
    },
    {
      img: "/about-us-hero.png",
      imgAlt: "Victoria Park Robotics icon",
      title: "2014 Rookie Inspiration Award",
      year: 2014,
      link: "https://www.thebluealliance.com/event/2014onnb",
      description: "North Bay Regional",
    },
    {
      img: "/about-us-hero.png",
      imgAlt: "Victoria Park Robotics icon",
      title: "2014 Rookie All-Star Award",
      year: 2014,
      link: "https://www.thebluealliance.com/event/2014onto2",
      description: "Greater Toronto West Regional",
    },
    {
      img: "/about-us-hero.png",
      imgAlt: "Victoria Park Robotics icon",
      title: "2014 Imagery Award",
      year: 2014,
      link: "https://www.thebluealliance.com/event/2014onto2",
      description: "Greater Toronto West Regional",
    },
  ];

  const maxYear: number = awards[0].year;
  const minYear: number = awards[awards.length - 1].year;

  let searchTerm: string = "";
  let searchYear: string;

  let awardsFiltered: Award[] = awards;

  const searchAwards = () => {
    awardsFiltered = awards.filter(
      (award) =>
        searchYear == "All Years" || award.year.toString() == searchYear,
    );
    awardsFiltered = awardsFiltered.filter((award) =>
      award.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  };
</script>

<div class="bg-base-200 py-10 sm:px-20">
  <h1 class="font-bold text-5xl mb-5">Awards</h1>
  <!--Header-->

  <AwardsSearch
    onEnter={searchAwards}
    bind:searchTerm
    bind:searchYear
    {minYear}
    {maxYear}
  />

  <ul class="mt-10 flex flex-col align-center">
    {#if searchTerm && awardsFiltered.length === 0}
      <li>
        <NoResult />
      </li>
    {:else}
      {#each awardsFiltered as award (award.title)}
        <li class="py-3">
          <AwardCard
            img={award.img}
            imgAlt={award.imgAlt}
            title={award.title}
            link={award.link}
            description={award.description}
          />
        </li>
      {/each}
    {/if}
  </ul>
</div>
