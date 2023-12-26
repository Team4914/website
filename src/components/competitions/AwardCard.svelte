<script lang="ts">
  import { scale } from "svelte/transition";
  import { expoInOut } from "svelte/easing";

  // props
  export let img: string;
  export let imgAlt: string;
  export let title: string;
  export let link: string;
  export let description: string;
</script>

<div
  transition:scale={{ duration: 1000, easing: expoInOut }}
  class="card card-side h-48 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:scale-[1.03] hover:drop-shadow-[0_10px_10px_rgba(250,250,250,0.25)]"
>
  <figure><img src={img} alt={imgAlt} class="h-full" /></figure>
  <!-- Image -->

  <div class="card-body">
    <h2 class="card-title text-2xl">{title}</h2>
    <p>{description}</p>

    <!-- Button (link) -->
    <div class="card-actions justify-end">
      <a href={link} class="btn btn-primary">See More</a>
    </div>
  </div>
</div>
