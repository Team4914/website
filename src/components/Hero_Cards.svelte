<script lang="ts">
  const cards = [
    {
      title: "OUR MISSION",
      description:
        "Team 4914's mission is to stimulate students and inspire a new generation of students into STEM through hands-on learning and an environment for creativity and confidence to grow.",
      image: "/our-mission.webp",
      alt: "our-mission",
    },
    {
      title: "OUR GOALS",
      description:
        "The primary goal of 4914 is the extension of STEM into the community, and helping students understand the importance of STEM. Beyond that, we hope to propagate the values of FIRST & Team 4914 into the community, provide a comfortable enviroment for students to learn about STEM, and create strong bonds, both winthin our team members, and with the general community.",
      image: "/goals.webp",
      alt: "our-goals",
    },
    {
      title: "OUR HISTORY",
      description:
        "Starting in 2014, Team 4914 “Panthers” was established at Victoria Park Collegiate Institute with students from the school and several teacher mentors. Our FIRST robotics team’s first year started off with “Aerial Assist”, where we received Rookie All Star Award and Imagery Award at our first event. Thereafter, the team progressed onto the International Stage at St.Louis, Missouri, all within a year of being founded. Since then, we have won 11 FRC awards and grown in size and diversity. Team 4914 has always had the same goals in mind since the start, and through the help of our dedicated members, has refined & polished a clear system to engage students & educate them about STEM while also providing a fun and engaging competition background for them to test their new skills and grow.",
      image: "/history.webp",
      alt: "our-history",
    },
  ];
</script>

<div class="bg-base-100 min-h-screen">
  <div class="hero bg-base-200 h-fit">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold duration-100">
          <span id="welcome"></span>
        </h1>
        <p class="pt-6">
          Welcome to Team 4914, the Victoria Park Panthers. We are a student run
          FIRST Robotics Competition (FRC) team at Victoria Park C.I. run by 3
          mentors and over 100 students.
        </p>
      </div>
    </div>
  </div>
  <!-- "OUR MISSION", "OUR GOALS" and "OUR HISTORY" Cards -->
  <div
    class="flex flex-col md:flex-row justify-evenly items-center md:items-stretch"
  >
    {#each cards as card}
      <div
        class="card bg-base-200 my-10 shadow-xl hover:scale-[1.02] md:w-[30%] w-11/12"
      >
        <figure>
          <img src={card.image} alt={card.alt} width="700" height="350" loading="lazy" />
        </figure>
        <div class="card-body">
          <h1 class="card-title">{card.title}</h1>
          <p>
            {card.description}
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  @keyframes welcome {
    /*This is an animation for the welcome*/
    12.5%,
    37.5%,
    62.5%,
    87.5% {
      opacity: 0;
    }
    6.25%,
    43.75%,
    68.75%,
    93.75% {
      opacity: 1;
    }
    0% {
      opacity: 1;
      content: "Welcome";
    }
    25% {
      opacity: 1;
      content: "Bienvienda";
    }
    50% {
      opacity: 1;
      content: "Bienvenue";
    }
    75% {
      opacity: 1;
      content: "欢迎";
    }
  }

  #welcome::before {
    animation: welcome 28s linear infinite;
    content: "Welcome";
  }
  .card {
    transition: transform 330ms ease-in-out;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1);
  }
</style>
