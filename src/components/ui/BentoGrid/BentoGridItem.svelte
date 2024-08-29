<script lang="ts">
  import { BackgroundGradient } from "../BackgroundGradient/index";
  import { cn } from "../../../utils/cn";

  export let className: string | undefined = undefined;
  export let title: string | HTMLElement | undefined = undefined;
  export let description: string | HTMLElement | undefined = undefined;
  export let icon: HTMLElement | undefined = undefined;
</script>

<BackgroundGradient
  className={cn(
    "group/bento flex flex-col justify-between space-y-4 rounded-xl border border-gray-300 p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-gray-700 dark:bg-black dark:shadow-none bento-item",
    className,
  )}
>
  <div class="transition duration-200 group-hover/bento:translate-x-2">
    <slot name="icon" />
    <div
      class="mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200"
    >
      {title}
    </div>
    <div
      class="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300"
    >
      {description}
    </div>
  </div>
  <slot name="header" />
</BackgroundGradient>
