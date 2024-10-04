<script lang="ts">
  import { cn } from "../utils/cn";

  export let title: string;
  export let author: string;
  export let description: string;
  export let coverImg: string;
  export let linkTo: string;
  export let readTime: string;
</script>

<a href={"/blog/" + linkTo}>
  <div class="max-w-lg w-full group/card">
    <div
      class="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-lg mx-auto backgroundImage flex flex-col justify-between p-4 bg-cover"
      style={`background-image: url(${coverImg})`}
    >
      <div
        class="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black bg-black hover:opacity-70 opacity-30"
      ></div>
      <div class="flex flex-row items-center space-x-4 z-10">
        <img
          height="100"
          width="100"
          alt="Avatar"
          src="/favicon.svg"
          class="h-10 w-10 rounded-full border-2 object-cover"
        />
        <div class="flex flex-col">
          <p class="font-normal text-base text-gray-50 relative z-10">
            {author}
          </p>
          <p class="text-sm text-gray-400">{readTime}</p>
        </div>
      </div>
      <div class="text content">
        <h1 class="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
          {title}
        </h1>
        <p class="font-normal text-sm text-gray-50 relative z-10 my-4">
          {description}
        </p>
      </div>
    </div>
  </div>
</a>
