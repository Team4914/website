<script lang="ts">
  const cards = [
    {
      title: "Our Mission",
      description:
        "Team 4914's mission is to stimulate students and inspire a new generation of students into STEM through hands-on learning and an environment for creativity and confidence to grow.",
      image: "/index/our-mission.webp",
      alt: "our-mission",
    },
    {
      title: "Our Goals",
      description:
        "The primary goal of 4914 is the extension of STEM into the community, and helping students understand the importance of STEM. Beyond that, we hope to propagate the values of FIRST & Team 4914 into the community, provide a comfortable enviroment for students to learn about STEM, and create strong bonds, both winthin our team members, and with the general community.",
      image: "/index/goals.webp",
      alt: "our-goals",
    },
    {
      title: "Our History",
      description:
        "Starting in 2014, Team 4914 “Panthers” was established at Victoria Park Collegiate Institute with students from the school and several teacher mentors. Since then, we have won 11 FRC awards and grown in size and diversity. Through the help of our dedicated members, we have refined & polished a clear system to engage students & educate them about STEM while also providing a fun and engaging competition background for them to test their skills and grow.",
      image: "/index/history.webp",
      alt: "our-history",
    },
  ];
</script>

<div class="bg-base-100 min-h-screen">
  <div class="hero bg-base-200 h-fit">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold font-pixel duration-100">
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
    class="flex flex-col md:flex-row justify-center gap-6 items-center md:items-stretch p-10 mb-10"
  >
    {#each cards as card}
      <div
        class="max-w-sm w-full p-4 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group hover:scale-[1.05] transition-transform duration-200"
      >
        <div class="rounded-xl z-40">
          <img
            src={card.image}
            alt={card.alt}
            width="700"
            height="350"
            loading="eager"
          />
        </div>
        <h3
          class="text-3xl font-pixel font-semibold text-gray-800 dark:text-white py-2"
        >
          {card.title}
        </h3>
        <p
          class="text-md font-normal text-neutral-600 dark:text-neutral-400 max-w-sm"
        >
          {card.description}
        </p>
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
</style>
