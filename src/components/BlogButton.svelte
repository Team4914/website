<script lang="ts">
  export let title: string;
  export let description: string;
  export let sideImage: string;
  export let altText: string;
  export let linkTo: string;
</script>

<a href={linkTo}>
  <div
    class="card card-side bg-base-100 m-5 shadow-xl glass duration-700 hover:scale-105"
  >
    <figure class="w-1/2"><img src={sideImage} alt={altText} /></figure>
    <div class="card-body w-1/4">
      <h2 class="card-title">{title}</h2>
      <p>{description}</p>
    </div>
  </div>
</a>
