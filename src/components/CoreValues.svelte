<script lang = "ts">
    import '../app.css';

    /*Storing button send-to links*/
    const linkSpirited = "asd";
    const linkTeamOriented = "asd";
    const linkEmpathetic = "asd";
    const linkMethodical = "asd";
</script>

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
    <div class = "pb-10 bg-base-300 rounded-box">
        <!--Creates the heading for the Core Values section-->
        <div class = "grid h-20 card place-items-center text-3xl">Core Values</div>
        
        <!--Creates the buttons and dividers for the Core Values section -->
        <div class="flex w-full">
            <!--Button corresponding to the "Spirited" web page-->
            <a class="transition-all duration-700 ease-in-out grid h-20 flex-grow card bg-base-300 rounded-box place-items-center bg-[length:450px_350px] bg-[center_bottom_-2rem] bg-[url('https://th.bing.com/th/id/OIP.2mggqeJ4NZV5yiwdvcq5YwHaFj?pid=ImgDet&rs=1')] bg-blend-overlay btn hover:-translate-y-2 hover:bg-[length:400px_300px] hover:bg-blend-screen hover:bg-[center_bottom_-2rem]" href = {linkSpirited}>Spirited</a>
            <div class="divider divider-horizontal"></div>
            <!--Button corresponding to the "Team Oriented" web page-->
            <a class="transition-all duration-700 ease-in-out grid h-20 flex-grow card bg-base-300 rounded-box place-items-center bg-[length:450px_350px] bg-[center_bottom_-2rem] bg-[url('https://th.bing.com/th/id/OIP.2mggqeJ4NZV5yiwdvcq5YwHaFj?pid=ImgDet&rs=1')] bg-blend-overlay btn hover:-translate-y-2 hover:bg-[length:400px_300px] hover:bg-blend-screen hover:bg-[center_bottom_-2rem]" href = {linkTeamOriented}>Team-Oriented</a>
            <div class="divider divider-horizontal"></div>
            <!--Button corresponding to the "Empathetic" web page-->
            <a class="transition-all duration-700 ease-in-out grid h-20 flex-grow card bg-base-300 rounded-box place-items-center bg-[length:450px_350px] bg-[center_bottom_-3rem] bg-[url('https://th.bing.com/th/id/OIP.2mggqeJ4NZV5yiwdvcq5YwHaFj?pid=ImgDet&rs=1')] bg-blend-overlay btn hover:-translate-y-2 hover:bg-[length:400px_300px] hover:bg-blend-screen hover:bg-[center_bottom_-3rem]" href = {linkEmpathetic}>Empathetic</a>
            <div class="divider divider-horizontal"></div>
            <!--Button corresponding to the "Methodical" web page-->
            <a class="transition-all duration-700 ease-in-out grid h-20 flex-grow card bg-base-300 rounded-box place-items-center bg-[length:450px_350px] bg-[center_bottom_-4rem] bg-[url('https://th.bing.com/th/id/OIP.2mggqeJ4NZV5yiwdvcq5YwHaFj?pid=ImgDet&rs=1')] bg-blend-overlay btn hover:-translate-y-2 hover:bg-[length:400px_300px] hover:bg-blend-screen hover:bg-[center_bottom_-4rem]" href = {linkMethodical}>Methodical</a>
        </div>
    </div>
</main>
