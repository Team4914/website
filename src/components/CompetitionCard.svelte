<script lang="ts">
    // props
    export let img: string;
    export let imgAlt: string; 
    export let title: string;
    export let link: string;
    export let description: string;
</script>

<div class="card card-side bg-base-100 shadow-xl">
    <figure><img src={img} alt={imgAlt} class="h-full"/></figure> <!-- Image -->

    <div class="card-body">
        <h2 class="card-title text-primary text-2xl"><a href={link}>{title}</a></h2>
        <p>{description}</p>

        <!-- If we want to add a button in the future -->
        <!-- <div class="card-actions justify-end">
            <button class="btn btn-primary">Listen</button>
        </div> -->
    </div>
</div>