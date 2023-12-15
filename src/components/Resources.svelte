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

    <!--Victoria Park Robotics-->
    <div class = "rounded-lg p-5 bg-base-300 text-lg transition-all duration-500 hover:translate-x-3">
        <h3 class = "text-2xl">Victoria Park Robotics</h3>
        <ul style = "list-style-type:disc; padding-left:60px;line-height:40px;">
            <li><a class = "link transition-all duration-500 hover:text-xl" href="">VP Robotics Sponsorship package</a></li>
            <li><a class = "link transition-all duration-500 hover:text-xl" href="">Engineering notebook</a></li>
        </ul>
    </div>
    <br>

    <!--Build team resources-->
    <div class = "rounded-lg p-5 bg-base-300 text-lg transition-all duration-500 hover:translate-x-3">
        <h3 class = "text-2xl">Build team</h3>

        <ul style = "list-style-type:disc; padding-left:60px;line-height:40px;">
            <li><a class = "link transition-all duration-500 hover:text-xl" href="https://docs.google.com/presentation/d/1D-TTWkGcIM9IYwn_SvGX0fwiERCBiqFc/edit?rtpof=true&sd=true">Mechanical guide</a></li>
            <li><a class = "link transition-all duration-500 hover:text-xl" href="https://docs.google.com/presentation/d/1XWlT2D6pqDgk782QwVp3kUptwbJLyZR2/edit">Material guide</a></li>
        </ul>
    </div>
    <br>

    <!--Electrionics resources-->
    <div class = "rounded-lg p-5 bg-base-300 text-lg transition-all duration-500 hover:translate-x-3">
        <h3 class = "text-2xl">Electronics</h3>
        <ul style = "list-style-type:disc; padding-left:60px;line-height:40px;">
            <li><a class = "link transition-all duration-500 hover:text-xl" href="https://drive.google.com/file/d/1EDPonK7Pc_Vf_9crYTMUXauCYa4-7a5h/view">General Electronics System Notes</a></li>
            <li><a class = "link transition-all duration-500 hover:text-xl" href="https://mililanirobotics.gitbooks.io/frc-electrical-bible/content/">Additional System Notes</a></li>
            <li><a class = "link transition-all duration-500 hover:text-xl" href="https://wpilib.screenstepslive.com/s/currentCS/m/kop/l/1030226-wiring-the-frc-control-system">Wiring the FRC Control System</a></li>
            <li><a class = "link transition-all duration-500 hover:text-xl" href="https://firstfrc.blob.core.windows.net/frc2017/pneumatics-manual.pdf">FRC Pneumatics Guide</a></li>
        </ul>
    </div>
    <br>

    <!-- Programming resources-->
    <div class = "rounded-lg p-5 bg-base-300 text-lg transition-all duration-500 hover:translate-x-3">
        <h3 class = "text-2xl">Programming</h3>

        <h4 class = "text-xl mt-5">Computer Vision</h4>
        <ul style = "list-style-type:disc; padding-left:60px;line-height:40px;">
            <li><a class = "link transition-all duration-500 hover:text-xl" href="https://ftc-docs.firstinspires.org/en/latest/ftc_ml/">FIRST Machine Learning Toolchain</a></li>
            <li><a class = "link transition-all duration-500 hover:text-xl" href="https://www.firstinspires.org/resource-library/ftc/game-and-season-info">First Robotics Resource library</a></li>
            <li><a class = "link transition-all duration-500 hover:text-xl" href="https://www.youtube.com/watch?v=KNAWp2S3w94">Introduction to Machine Learning - Youtube</a></li>
            <li><a class = "link transition-all duration-500 hover:text-xl" href="https://developers.google.com/machine-learning/crash-course/ml-intro">Introduction to Machine Learning</a></li>
        </ul>

        <h4 class = "text-xl mt-5">Other</h4>
        <ul style = "list-style-type:disc; padding-left:60px;line-height:40px;">
            <li><a class = "link transition-all duration-500 hover:text-xl" href="https://learnroadrunner.com/#frequently-asked-questions">Learn roadrunner</a></li>
            <li><a class = "link transition-all duration-500 hover:text-xl" href="https://www.youtube.com/watch?v=noqBUEgyQ8A">Mecanum wheels tutorial</a></li>
            <li><a class = "link transition-all duration-500 hover:text-xl" href="https://www.youtube.com/watch?v=TSCD2fjNh0I">Programming Mecanum wheels</a></li>
        </ul>
    </div>
    <br>

    <!--Web development resources-->
    <div class = "rounded-lg p-5 bg-base-300 text-lg transition-all duration-500 hover:translate-x-3">
        <h3 class = "text-2xl">Web development</h3>
        <ul style = "list-style-type:disc; padding-left:60px;line-height:40px;">
            <li><a class = "link transition-all duration-500 hover:text-xl" href="https://svelte.dev/">Learn Svelte</a></li>
            <li><a class = "link transition-all duration-500 hover:text-xl" href="https://tailwindcss.com/">Tailwindcss</a></li>
            <li><a class = "link transition-all duration-500 hover:text-xl" href="https://daisyui.com/components/">Tailwindcss Component library (DaisyUI)</a></li>
        </ul>
    </div>
</div>
