<!--This contains the content for the resources page-->
<!--Note, I was unable to alter the padding and type of unordered lists with the tailwind styles/classes. 
Fix if possible-->

<!--This seems to be the case with many tailwind classes-->

<script lang="ts">
</script>

<!--creating a class to make links visible again-->
<style>
    .link{
        text-decoration: underline;
        color:  rgb(30 58 138);
    }
</style>

<div class = "p-10">
    <h2 class = "text-3xl">Resources:</h2>
    <br>

    <!--Build team resources-->
    <div class = "rounded-lg p-5 bg-base-300 text-lg">
        <h3 class = "text-2xl">Build team</h3>

        <ul style = "list-style-type:disc; padding-left:60px;line-height:40px;">
            <li><a class = "link" href="">Mechanical guide</a></li>
            <li><a class = "link" href="">Material guide</a></li>
            <li><a class = "link" href="">asdfghj</a></li>
        </ul>
    </div>
    <br>

    <!-- Web developement resources-->
    <div class = "rounded-lg p-5 bg-base-300 text-lg">
        <h3 class = "text-2xl">Programming</h3>
        <ul style = "list-style-type:disc; padding-left:60px;line-height:40px;">
            <li><a class = "link" href="">Guide</a></li>
            <li><a class = "link" href="">Guide</a></li>
            <li><a class = "link" href="">Guide</a></li>
        </ul>
    </div>
    <br>

    <!--Programming resources-->
    <div class = "rounded-lg p-5 bg-base-300 text-lg">
        <h3 class = "text-2xl">Programming</h3>
        <ul style = "list-style-type:disc; padding-left:60px;line-height:40px;">
            <li><a class = "link" href="">Guide</a></li>
            <li><a class = "link" href="">Guide</a></li>
            <li><a class = "link" href="">Guide</a></li>
        </ul>
    </div>
</div>
