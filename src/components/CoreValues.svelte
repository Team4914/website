<script lang="ts">
  const cards = [
    {
      title: "Spirited",
      image: "/spirited.JPG",
      size: "bg-[length:450px_300px]",
      sizeHover: "hover:bg-[length:300px_190px]",
      position: "bg-[center_bottom_-8rem]",
      positionHover: "hover:bg-[center_bottom_-4rem]",
    },
    {
      title: "Team Oriented",
      image: "/team-oriented.JPG",
      size: "bg-[length:500px_350px]",
      sizeHover: "hover:bg-[length:350px_245px]",
      position: "bg-[center_bottom_-6rem]",
      positionHover: "hover:bg-[center_bottom_-6rem]",
    },
    {
      title: "Empathetic",
      image: "/history.JPG",
      size: "bg-[length:300px_200px]",
      sizeHover: "hover:bg-[length:300px_200px]",
      position: "bg-[center_bottom_-5rem]",
      positionHover: "hover:bg-[center_bottom_-3rem]",
    },
    {
      title: "Methodical",
      image: "/methodical.JPG",
      size: "bg-[length:450px_350px]",
      sizeHover: "hover:bg-[length:310px_210px]",
      position: "bg-[center_bottom_-4rem]",
      positionHover: "hover:bg-[center_bottom_-5rem]",
    },
  ];
</script>

<!--
GENERAL APPEARANCE
To change the sendto link of the buttons, modify the "link" constants containing the urls
To change height of buttons, modify the "h-[]" class in the <a> tags

IMAGE:
To change or remove the dark overlay over the images in the buttons, modify or remove the "bg-blend-overlay" class in the <a> tags
To change or remove the lighten effect upon hovering on the buttons, modify or remove the "hover:bg-blend-screen" class in the <a> tags
To change the size of the image inside of the buttons, modify the "bg-[length:[]px_[]px]" class in the <a> tags
    (note: This doesn't change the size of the button, but rather the amount of the image that can be seen inside the button)
    (note: The larger the values, the larger the zoom-in into the image)
To change the position of the image inside of the buttons, modify the "bg-[center_bottom_[]rem]" class in the <a> tags
    (note: This doesn't change the location of the button, but rather the part of the image that we see)
    (note: The larger the lower the values, the higher the part of the image to be displayed. It is advised to keep this value negative)

ANIMATION
To change the height displacement attribute of the button's transition, modify the hover:-translate-y-[] class in the <a> tags
T0 change the transition duration, modify the "duration-[]"" class in the <a> tags
To change the size of the image inside of the buttons upon being hovered over, modify the "hover:bg-[length:[]px_[]px]" class in the <a> tags
    (note: This doesn't change the size of the button, but rather the amount of the image that can be seen inside the button when the user hovers over the button)
    (note: The larger the values, the larger the zoom-in into the image)
To change the position of the image inside of the buttons upon being hovered over, modify the "bg-[center_bottom_[]rem]" class in the <a> tags
    (note: This doesn't change the location of the button, but rather the part of the image that we see)
    (note: The larger the lower the values, the higher the part of the image to be displayed. It is advised to keep this value negative)
-->

<main>
  <!--creates the outer-most box - sort of like the background-->
  <div class="pt-10 pb-8 bg-base-200">
    <!--creates the inner box, used to hold all the Core Value components-->
    <div class="pb-7 bg-base-300 rounded-box">
      <!--Creates the heading for the Core Values section-->
      <div class="py-4 h-20 card place-items-center text-3xl font-semibold">
        Core Values
      </div>
      <!--Creates the buttons and dividers for the Core Values section -->
      <div
        class="grid grid-cols-2 md:grid-cols-4 w-full px-4 gap-4 justify-center items-stretch text-center"
      >
        {#each cards as card}
          <!-- tailwind doesnt support partial dynamic classes, which is why style attribute is used -->
          <div
            style="background-image: url({card.image});"
            class="bg-base-100 card md:dark:opacity-40 shadow-xl transition-all duration-700 ease-in-out hover:-translate-y-2 hover:scale-110 hover:opacity-100 {card.size} {card.sizeHover} {card.position} {card.positionHover}"
          >
            <div class="card-body justify-center items-center">
              <h1 class="card-title text-white">{card.title}</h1>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</main>
