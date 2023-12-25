<script lang="ts">
  import Button from "./Button.svelte";

export let backgroundImage:string; // background variable
export let gradientTitle:boolean;
export let standardTitleText:string = ""; // background variable
export let gradientTitleText:string = ""; // background variable
export let descriptionText:string = ""; //
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
      <h1 class="my-5 md:text-7xl text-5xl text-white font-bold underline underline-offset-8 decoration-red-800" >
        {standardTitleText}
        <span class="text-gradient bg-clip-text text-transparent">{#if gradientTitle}{gradientTitleText}{/if}<span></span>
      </h1>
      <p class="mb-5 text-xl">{descriptionText}</p>
       {#if button}
        <Button value={buttonText}/> 
       {/if}
    </div>
  </div>
</div>

<style> 
.text-gradient {
  background: linear-gradient(45deg, rgb(140, 20, 30), #f2b035 20%, white 60%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400%;
}
</style>