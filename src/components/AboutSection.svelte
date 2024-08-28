<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import { TracingBeam } from "./ui/TracingBeam/index";

  const content = [
    {
      title: "Overview",
      description:
        "<p>The Victoria Park Collegiate Institute Robotics Team (Teams 24484 and 24485) is a FIRST Tech Challenge (FTC) comprised of an extremely dedicated group of 36 members, two teachers, community supporters and volunteer mentors. Teams 24484 and 24485 were founded in October 2023 by the teachers and staff of Victoria Park Collegiate Institute.</p>",
      image: "/group-photo.jpg",
    },
    {
      title: "Our Vision",
      description:
        "<p>...is to become a model organization that promotes FIRST’s vision of cultural transformation in Canada, through partnerships with our community, students, parents, teachers and our sponsors.</p>",
      image: "/hero-new.webp",
    },
    {
      title: "Our Mission",
      description:
        "<p>...is to encourage the personal growth and development of all of our stakeholders to focus on science and technology education through participation in FIRST competitions.</p>",
      image: "/group-photo.jpg",
    },
  ];
</script>

<div class="relative mx-auto max-w-2xl py-20 mt-20 antialiased">
  {#each content as item, index (`content-${index}`)}
    <div class="mb-10 w-full p-4">
      <p class={twMerge("mb-4 text-2xl font-bold")}>
        {item.title}
      </p>

      <div class="w-full prose prose-sm md:prose-lg text-sm dark:prose-invert">
        {#if item?.image}
          <img
            src={item.image}
            alt="blog thumbnail"
            height="1000"
            width="1000"
            class="mb-10 rounded-lg object-cover"
          />
        {/if}
        {@html item.description}
      </div>
    </div>
  {/each}
</div>
