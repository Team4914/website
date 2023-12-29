<script lang="ts">
  export let backgroundImage: string; 
  export let standardTitleText: string = ""; 
  export let gradientTitleText: string = ""; 
  export let descriptionText: string = ""; 
  export let buttonText: string = ""; 
</script>

<div
  class="hero min-h-screen bg-fixed"
  style="background-image: {backgroundImage};"
>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content justify-center">
    <div class="max-w-2xl">
      <h1
        class="my-5 md:text-7xl text-5xl text-white font-bold underline underline-offset-8 decoration-red-800"
      >
        {standardTitleText}
        <span class="text-gradient bg-clip-text text-transparent"
          >{#if gradientTitleText}{gradientTitleText}{/if}<span></span>
        </span>
      </h1>
      <p class="mb-5 text-xl">{descriptionText}</p>
      {#if buttonText}
        <button class="btn btn-primary bg-opacity-75">
          <a href="/about-us">{buttonText}</a>
        </button>
      {/if}
    </div>
  </div>
</div>
