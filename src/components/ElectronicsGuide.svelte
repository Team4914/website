<!--This is the electronics guide component on the electronics subteam page-->

<script lang="ts">
    let linkFirstBox = "asd";
    let linkSecondBox = "asd";
    let linkThirdBox = "asd";
    let linkFourthBox = "asd";

    let firstBoxText = "Spirited";
    let secondBoxText = "Team Oriented";
    let thirdBoxText = "Empathetic";
    let fourthBoxText = "Methodical";
</script>

<main>
    <div class="pb-7 bg-base-300 rounded-box">
        <!--Creates the heading for the section-->
        <div
            class="grid h-20 card place-items-center"
        >
            <p class = "sm:text-xl md:text-3xl">How to get Started</p>
            <p class = "sm:text-base md:text-lg">This is example text</p>
        </div>

        <!--Creates the buttons and dividers for the Core Values section -->
        <div class="flex flex-wrap w-full grid grid-cols-4">
            <!--Button corresponding to the "Spirited" web page-->
            <div class = "grid h-100 mx-4 my-2 flex-grow card bg-base-300">
                <a
                    class="transition-all duration-700 ease-in-out grid h-20 mx-4 my-2 flex-grow card bg-base-300 rounded-box place-items-center bg-[length:450px_350px] bg-[center_bottom_-2rem] bg-[url('https://th.bing.com/th/id/OIP.2mggqeJ4NZV5yiwdvcq5YwHaFj?pid=ImgDet&rs=1')] opacity-40 btn hover:-translate-y-2 hover:bg-[length:400px_300px] hover:opacity-100 hover:bg-[center_bottom_-2rem]"
                    href={linkFirstBox}>{firstBoxText}
                </a>
                <br>
                <p class = "flex-wrap">this is another paragraph that doesn't break the page, and which will wrap back towards....</p>
                <p>this is another paragraph</p>
            </div>
            <!--Button corresponding to the "Team Oriented" web page-->
            <div class = "grid h-100 mx-4 my-2 flex-grow card bg-base-300">
                <a
                    class="transition-all duration-700 ease-in-out grid h-20 mx-4 my-2 flex-grow card bg-base-300 rounded-box place-items-center bg-[length:450px_350px] bg-[center_bottom_-2rem] bg-[url('https://cdn.britannica.com/22/215522-050-8315BB78/green-grass-close-up.jpg')] opacity-40 btn hover:-translate-y-2 hover:bg-[length:400px_300px] hover:opacity-100 hover:bg-[center_bottom_-2rem]"
                    href={linkSecondBox}>{secondBoxText}
                </a>
                <br>
                <p class = "flex-wrap">this is another paragraph that doesn't break the page, and which will wrap back towards....</p>
                <p>this is another paragraph</p>
            </div>
            <!--Button corresponding to the "Empathetic" web page-->
            <div class = "grid h-100 mx-4 my-2 flex-grow card bg-base-300">
                <a
                    class="transition-all duration-700 ease-in-out grid h-20 mx-4 my-2 flex-grow card bg-base-300 rounded-box place-items-center bg-[length:300px_150px] bg-[center_bottom_-2rem] bg-[url('https://static1.srcdn.com/wordpress/wp-content/uploads/2021/03/Genshin-Impact-Primogems.png.jpg')] opacity-40 btn hover:-translate-y-2 hover:bg-[length:200px_100px] hover:opacity-100 hover:bg-[center_bottom_-1rem]"
                    href={linkThirdBox}>{thirdBoxText}
                </a>
                <br>
                <p class = "flex-wrap">this is another paragraph that doesn't break the page, and which will wrap back towards....</p>
                <p>this is another paragraph</p>
            </div>
            <!--Button corresponding to the "Methodical" web page-->
            <div class = "grid h-100 mx-4 my-2 flex-grow card bg-base-300">
                <a
                    class="transition-all duration-700 ease-in-out grid h-20 mx-4 my-2 flex-grow card bg-base-300 rounded-box place-items-center bg-[length:450px_350px] bg-[center_bottom_-8rem] bg-[url('https://static1.srcdn.com/wordpress/wp-content/uploads/2021/03/Genshin-Impact-Primogems.png.jpg')] opacity-40 btn hover:-translate-y-2 hover:bg-[length:400px_300px] hover:opacity-100 hover:bg-[center_bottom_-7rem]"
                    href={linkFourthBox}>{fourthBoxText}
                </a>
                <br>
                <p class = "flex-wrap">this is another paragraph that doesn't break the page, and which will wrap back towards....</p>
                <p>this is another paragraph</p>
                <p>this is another paragraph</p>
                <p>this is another paragraph</p>
            </div>
        </div>
    </div>
</main>
