<script lang="ts">
  export let title: string;
  export let description: string;
  export let sideImage: string;
  export let altText: string;
  export let linkTo: string;
</script>

<a
  class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
  href={"/blog/" + linkTo}
>
  <div class="aspect-w-16 aspect-h-11">
    <img class="w-full object-cover rounded-xl" src={sideImage} alt={altText} />
  </div>
  <div class="my-6">
    <h1
      class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white"
    >
      {title}
    </h1>
    <p class="mt-5 text-gray-600 dark:text-gray-400">
      {description}
    </p>
  </div>
  <div class="mt-auto flex items-center gap-x-3">
    <p class="text-sm text-gray-800 dark:text-gray-200">By Lauren Waller</p>
  </div>
</a>
