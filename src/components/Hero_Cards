<style>
    @keyframes infinite-scroll {
      0% {
        transform: translateX(0%);
      }
      25% {
        transform: translateX(20%);
      }
      50% {
        transform: translateX(0%);
      }
      75% {
        transform: translateX(-20%);
      }
      100% {
        transform: translateX(0%);
      }
    }
  
    .animate-infinite-scroll {
      animation: infinite-scroll 5s linear infinite;
    }
  </style>
  <script>
    import '../app.css';
    const welcomeInLanguages = ["Welcome", "Bienvenida", "Bienvenue"];
    let message = 0;
    let welcome = welcomeInLanguages[message];
  
    function changeWelcome(){
        welcome = welcomeInLanguages[message];
        if (message == welcomeInLanguages.length - 1){
            message = 0;
        }
        else{
            message++;
        }
    }
  
    let interval;
    $: {
        interval = setInterval(changeWelcome, 2000);
    }
  </script>
  <div class="bg-base-200 min-h-screen">
    <div class="hero bg-base-200 h-fit">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold duration-100">{welcomeInLanguages[message]}</h1>
          <p class="pt-6">Welcome to Team 4914, the Victoria Park Panthers. We are a student run FIRST Robotics Competition (FRC) team at Victoria Park C.I. run by 3 mentors and over 100 students.</p>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-evenly">
      <div class="card bg-base-100 animate-infinite-scroll mx-10 my-10 w-96 shadow-xl hover:scale-110">
        <figure>
          <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h1 class="card-title">OUR MISSION</h1>
          <p>Team 4914's mission is to stimulate students and inspire a new generation of students into STEM through hands-on learning and an environment for creativity and confidence to grow.</p>
        </div>
      </div>
      <div class="card bg-base-100 animate-infinite-scroll mx-10 my-10 w-96 shadow-xl hover:scale-110">
        <figure>
          <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h1 class="card-title">OUR GOALS!</h1>
          <p>The primary goal of 4914 is the extension of STEM into the community, and helping students understand the importance of STEM. Beyond that, we hope to propagate the values of FIRST & Team 4914 into the community, provide a comfortable enviroment for students to learn about STEM, and create strong bonds, both winthin our team members, and with the general community.</p>
        </div>
      </div>
      <div class="card bg-base-100 animate-infinite-scroll mx-10 my-10 w-96 shadow-xl hover:scale-110">
        <figure>
          <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h1 class="card-title">OUR HISTORY</h1>
          <p>Starting in 2014, Team 4914 “Panthers” was established at Victoria Park Collegiate Institute with students from the school and several teacher mentors. Our FIRST robotics team’s first year started off with “Aerial Assist”, where we received Rookie All Star Award and Imagery Award at our first event. Thereafter, the team progressed onto the International Stage at St.Louis, Missouri, all within a year of being founded. Since then, we have won 11 FRC awards and grown in size and diversity. Team 4914 has always had the same goals in mind since the start, and through the help of our dedicated members, has refined & polished a clear system to engage students & educate them about STEM while also providing a fun and engaging competition background for them to test their new skills and grow.</p>
        </div>
      </div>
    </div>
  </div>
