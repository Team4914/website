<script lang="ts">
  import Button from "./Button.svelte";

export let backgroundImage:string; // background variable
export let gradientTitle:boolean;
export let standardTitleText:string; // background variable
export let gradientTitleText:string = ""; // background variable
export let button:boolean;
export let buttonText:string = ""; // background variable

let display:string = "none";
if(button) {
  display = "block";
}
</script>


<div class="hero min-h-screen bg-fixed" style="background-image: {backgroundImage};">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-2xl">
      <h1 class="my-5 md:text-8xl text-6xl text-white font-bold underline underline-offset-8 decoration-red-800" >
        {standardTitleText}<span class="text-gradient bg-clip-text text-transparent">&nbsp{#if gradientTitle}{gradientTitleText}{/if}<span>
      </h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
       {#if button}
        <Button value={buttonText}/> 
       {/if}
    </div>
  </div>
</div>

<style> 
.text-gradient {
  background: linear-gradient(45deg, rgb(140, 20, 30), #f2b035 20%, white 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400%;
}
</style>