<script lang="ts">
    /*Storing button send-to links*/
    export let linkFirstBox:string;
    export let linkSecondBox:string;
    export let linkThirdBox:string;
    export let linkFourthBox:string;

    export let firstBoxText:string;
    export let secondBoxText:string;
    export let thirdBoxText:string;
    export let fourthBoxText:string;

    let firstBoxImage = "https://th.bing.com/th/id/OIP.2mggqeJ4NZV5yiwdvcq5YwHaFj?pid=ImgDet&rs=1";
    let secondBoxImage = "https://cdn.britannica.com/22/215522-050-8315BB78/green-grass-close-up.jpg";
    let thirdBoxImage = "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/03/Genshin-Impact-Primogems.png.jpg";
    let fourthBoxImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1024px-Cat_August_2010-4.jpg";
</script>

<style>
    :root{
        --firstBoxImage: {firstBoxImage}
        --secondBoxImage:{secondBoxImage}
        --thirdBoxImage: {thirdBoxImage}
        --fourthBoxImage: {fourthBoxImage}
    }
</style>

<!--
INSTRUCTIONS FOR CHANGING THIS COMPONENT

SHOULD ANY PART OF THIS COMPONENT BE GREATLY ALTERED, 
PLEASE RE-DOCUMENT THE INSTRUCTIONS FOR CHANGING THIS COMPONENT, 
FOR ANY PART THAT MAY HAVE BEEN AFECTED

This component creates the Core Values portion of the homepage. 
In this component, the <a> tags make up the buttons under the core values heading,
and the <div> classes with class divider make up the dividers dividing the buttons

GENERAL APPEARANCE
To change the sendto link of the buttons, modify the "link" constants containing the urls
To change height of buttons, modify the "h-[]" class in the <a> tags

IMAGE:
To change or remove the dark overlay over the images in the buttons, modify or remove the "bg-blend-overlay" class in the <a> tags
To change or remove the lighten effect upon hovering on the buttons, modify or remove the "hover:bg-blend-screen" class in the <a> tags
To change the size of the image inside of the buttons, modify the "bg-[length:[]px_[]px]" class in the <a> tags
    (note: This doesn't change the size of the button, but rather the amount of the image that can be seen inside the button)
    (note: The larger the values, the larger the zoom-in into the image)
To change the position of the image inside of the buttons, modify the "bg-[center_bottom_[]rem]" class in the <a> tags
    (note: This doesn't change the location of the button, but rather the part of the image that we see)
    (note: The larger the lower the values, the higher the part of the image to be displayed. It is advised to keep this value negative)

ANIMATION
To change the height displacement attribute of the button's transition, modify the hover:-translate-y-[] class in the <a> tags
T0 change the transition duration, modify the "duration-[]"" class in the <a> tags
To change the size of the image inside of the buttons upon being hovered over, modify the "hover:bg-[length:[]px_[]px]" class in the <a> tags
    (note: This doesn't change the size of the button, but rather the amount of the image that can be seen inside the button when the user hovers over the button)
    (note: The larger the values, the larger the zoom-in into the image)
To change the position of the image inside of the buttons upon being hovered over, modify the "bg-[center_bottom_[]rem]" class in the <a> tags
    (note: This doesn't change the location of the button, but rather the part of the image that we see)
    (note: The larger the lower the values, the higher the part of the image to be displayed. It is advised to keep this value negative)
-->

<main>
    <!--creates the outer-most box - sort of like the background-->
    <div class="py-7 bg-base-200">
        <!--creates the inner box, used to hold all the Core Value components-->
        <div class="pb-7 bg-base-300 rounded-box">
            <!--Creates the heading for the Core Values section-->
            <div
                class="grid h-20 card place-items-center sm:text-xl md:text-3xl"
            >
                Core Values
            </div>

            <!--Creates the buttons and dividers for the Core Values section -->
            <div class="flex flex-wrap w-full">
                <!--Button corresponding to the "Spirited" web page-->
                <a
                    class="transition-all duration-700 ease-in-out grid h-20 mx-4 my-2 flex-grow card bg-base-300 rounded-box place-items-center bg-[length:450px_350px] bg-[center_bottom_-2rem] bg-[url(var(--firstBoxImage))] opacity-40 btn hover:-translate-y-2 hover:bg-[length:400px_300px] hover:opacity-100 hover:bg-[center_bottom_-2rem]"
                    href={linkFirstBox}>{firstBoxText}</a
                >
                <!--Button corresponding to the "Team Oriented" web page-->
                <a
                    class="transition-all duration-700 ease-in-out grid h-20 mx-4 my-2 flex-grow card bg-base-300 rounded-box place-items-center bg-[length:450px_350px] bg-[center_bottom_-2rem] bg-[url(var(--secondBoxImage))] opacity-40 btn hover:-translate-y-2 hover:bg-[length:400px_300px] hover:opacity-100 hover:bg-[center_bottom_-2rem]"
                    href={linkSecondBox}>{secondBoxText}</a
                >
                <!--Button corresponding to the "Empathetic" web page-->
                <a
                    class="transition-all duration-700 ease-in-out grid h-20 mx-4 my-2 flex-grow card bg-base-300 rounded-box place-items-center bg-[length:300px_150px] bg-[center_bottom_-2rem] bg-[url("https://static1.srcdn.com/wordpress/wp-content/uploads/2021/03/Genshin-Impact-Primogems.png.jpg")] opacity-40 btn hover:-translate-y-2 hover:bg-[length:200px_100px] hover:opacity-100 hover:bg-[center_bottom_-1rem]"
                    href={linkThirdBox}>{thirdBoxText}</a
                >
                <!--Button corresponding to the "Methodical" web page-->
                <a
                    class="transition-all duration-700 ease-in-out grid h-20 mx-4 my-2 flex-grow card bg-base-300 rounded-box place-items-center bg-[length:450px_350px] bg-[center_bottom_-8rem] bg-[image:url(https://static1.srcdn.com/wordpress/wp-content/uploads/2021/03/Genshin-Impact-Primogems.png.jpg)] opacity-40 btn hover:-translate-y-2 hover:bg-[length:400px_300px] hover:opacity-100 hover:bg-[center_bottom_-7rem]"
                    href={linkFourthBox}>{fourthBoxText}</a
                >
            </div>
        </div>
    </div>
</main>
