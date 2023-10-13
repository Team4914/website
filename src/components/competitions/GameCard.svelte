<script lang="ts">
    export let title: string; // Card Title
    export let videoURL: string; // Video Link
    export let content: string; // Card Content
</script>

<div
    class="flex flex-row h-52 w-full lg:w-5/12 m-5 bg-slate-300 transition ease-in-out delay-150 hover:bg-slate-200 hover:scale-[1.03] hover:drop-shadow-[0_10px_10px_rgba(250,250,250,0.25)] bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
>
    <iframe
        class="m-none mt-none w-2/5 h-52 border rounded-l-xl"
        src="{videoURL}"
        title="Youtube Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>  
    </iframe>
    <div class="w-3/5 ml-5 p-5">
        <h1 class="text-center text-4xl font-bold text-gray-800 dark:text-white">
            {title}
        </h1>
        <p class="mt-2 text-sm text-gray-800 dark:text-gray-400 text-center">
            {content}
        </p>
    </div>
</div>
