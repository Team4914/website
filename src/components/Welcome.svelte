<style>
    @keyframes infinite-scroll { /*This is an animation for the cards*/
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
  
    .animate-infinite-scroll { /*This makes a class for the animation*/
      animation: infinite-scroll 5s linear infinite;
    }
  </style>
  <script>
    const welcomeInLanguages = ["Welcome", "Bienvenida", "Bienvenue"]; //list of all of the "Welcomes" to be blit
    let message = 0;
    let welcome = welcomeInLanguages[message];
  
    function changeWelcome(){ //function to change the message being blit
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
        interval = setInterval(changeWelcome, 2000); //the interval of the "Welcomes" changing
    }
  </script>
  <!--The Welcome with the Cards-->
  <div class="bg-base-200 min-h-screen">
    <div class="hero bg-base-200 h-fit">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold duration-100">{welcomeInLanguages[message]}</h1>
          <p class="pt-6">Welcome to Team 4914, the Victoria Park Panthers. We are a student run FIRST Robotics Competition (FRC) team at Victoria Park C.I. run by 3 mentors and over 100 students.</p>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-evenly"> <!--card container-->
      <div class="card bg-base-100 animate-infinite-scroll mx-10 my-10 w-96 shadow-xl hover:scale-110"> <!--card-1-->
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
          <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /> <!--card-2-->
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div class="card bg-base-100 animate-infinite-scroll mx-10 my-10 w-96 shadow-xl hover:scale-110">
        <figure>
          <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /> <!--card-3-->
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  </div>