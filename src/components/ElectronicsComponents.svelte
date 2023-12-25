<!--This is the electronics guide component on the electronics subteam page-->
<!-- implement images and stuff for components: dc motor, wheels, control hub, camera-->

<script lang="ts">
</script>

<main>
  <div class="bg-base-200 rounded-box shadow-xl mt-10 pt-7">
    <p class="sm:text-3xl md:text-4xl text-center py-2">Major Components</p>
    <div class="carousel w-full h-96 bg">
      <div id="slide1" class="carousel-item relative w-full">
        <div class="py-2">
          <img
            class="absolute left-1/3 w-1/3 h-2/3 rounded-lg"
            src="/DC-motor.webp"
          />
          <p class="absolute w-3/4 left-20 top-3/4">
            The motors are used in a number of different components on our
            robot. They allow our robot's claw to pick up pixels and place them
            high up on the board. They are also used to innitiate our hanging
            sequence. These motors allow us to do heavy-duty work.
          </p>
        </div>
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide4" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <div class="py-5">
          <img
            class="absolute left-1/3 w-1/3 h-2/3 rounded-lg"
            src="/Control-Hub.jpg"
          />
          <p class="absolute w-3/4 left-20 top-3/4">
            The control hub is basically the brain of the robot. It allows us to
            manipuate the entirety of the robot with much effectiveness. It
            connects our inputs from our driver hub, and turns these
            instructions given into brand new instructions for other parts of
            the robot, allowing it to innitiate a number of important sequences.
          </p>
        </div>
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <div class="py-5">
          <img class="absolute h-2/3 left-1/3 rounded-lg" src="/Servo.jpeg" />
          <p class="absolute w-3/4 left-20 top-3/4">
            The servos are like the precise and nimble fingers of our robot.
            They allow us to perform more precise actions than motors, at a
            tradeoff of power. On our robot, servos are used on the claw
            mechanisms among other components, and they play a crucial role in
            the making of our robot.
          </p>
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a href="#slide2" class="btn btn-circle">❮</a>
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
