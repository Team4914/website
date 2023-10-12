<script lang="ts">
    import CompetitionCard from "./CompetitionCard.svelte";

    type Competition = {
        img: string,
        imgAlt: string,
        title: string,
        link: string,
        description: string;
    };

    const competitions: Competition[] = [
        {
            img: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
            imgAlt: "Image of Shoes",
            title: "AAA",
            link: "https://www.thebluealliance.com/event/202121ont",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet varius nisl, non tempus erat. Nullam lobortis rutrum nunc ut imperdiet. Sed condimentum elit lacus, et ullamcorper sapien tempus a. Pellentesque dignissim ipsum et tempus aliquet. Duis id pulvinar velit, in venenatis dolor.",
        },
        {
            img: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
            imgAlt: "Image of Shoes",
            title: "https://frc-events.firstinspires.org/2021/team/4914",
            link: "/",
            description: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet varius nisl, non tempus erat. Nullam lobortis rutrum nunc ut imperdiet. Sed condimentum elit lacus, et ullamcorper sapien tempus a. Pellentesque dignissim ipsum et tempus aliquet. Duis id pulvinar velit, in venenatis dolor.",
        },
        {
            img: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
            imgAlt: "Image of Shoes",
            title: "CCC",
            link: "/",
            description: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet varius nisl, non tempus erat. Nullam lobortis rutrum nunc ut imperdiet. Sed condimentum elit lacus, et ullamcorper sapien tempus a. Pellentesque dignissim ipsum et tempus aliquet. Duis id pulvinar velit, in venenatis dolor.",
        }
    ];
</script>

<div class="bg-base-200 py-10 px-20">
    <h1 class = "font-bold text-5xl">Past Competitions</h1> <!--Header-->
    <ul class="mt-10">
        {#each competitions as comp (comp.title)}
            <li class="py-3">
                <CompetitionCard img={comp.img} imgAlt={comp.imgAlt} title={comp.title} link={comp.link} description={comp.description}/>
            </li>
        {/each}
    </ul>
</div>