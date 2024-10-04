<script lang="ts">
  import { HeroParallax } from "./ui/HeroParallax/index";

  const products = [
    {
      title: "Moonbeam",
      thumbnail:
        "https://live.staticflickr.com/65535/53404075595_122792a3a5_d.jpg",
    },
    {
      title: "Cursor",
      thumbnail:
        "https://live.staticflickr.com/65535/53404087585_3c8691b8cc_d.jpg",
    },
    {
      title: "Rogue",
      thumbnail:
        "https://live.staticflickr.com/65535/53404075005_aa27701518_d.jpg",
    },

    {
      title: "Editorially",
      thumbnail:
        "https://live.staticflickr.com/65535/53402713107_26a6a8c736_d.jpg",
    },
    {
      title: "Editrix AI",
      thumbnail:
        "https://live.staticflickr.com/65535/53402713107_26a6a8c736_d.jpg",
    },
    {
      title: "Pixel Perfect",
      thumbnail:
        "https://live.staticflickr.com/65535/53404073685_5e22a45aa5_d.jpg",
    },

    {
      title: "Algochurn",
      thumbnail:
        "https://live.staticflickr.com/65535/53404071015_f0ab4c79a5_d.jpg",
    },
    {
      title: "Aceternity UI",
      thumbnail:
        "https://live.staticflickr.com/65535/53403829693_9ba322688c_d.jpg",
    },
    {
      title: "Tailwind Master Kit",
      thumbnail:
        "https://live.staticflickr.com/65535/53403645916_71b8e4057a_d.jpg",
    },
    {
      title: "SmartBridge",
      thumbnail:
        "https://live.staticflickr.com/65535/53403645916_71b8e4057a_d.jpg",
    },
    {
      title: "Renderwork Studio",
      thumbnail:
        "https://live.staticflickr.com/65535/53402713107_26a6a8c736_d.jpg",
    },

    {
      title: "Creme Digital",
      thumbnail:
        "https://live.staticflickr.com/65535/53403645916_71b8e4057a_d.jpg",
    },
    {
      title: "Golden Bells Academy",
      thumbnail:
        "https://live.staticflickr.com/65535/53403638176_e81f959c56_d.jpg",
    },
    {
      title: "Invoker Labs",
      thumbnail:
        "https://live.staticflickr.com/65535/53403645916_71b8e4057a_d.jpg",
    },
    {
      title: "E Free Invoice",
      thumbnail:
        "https://live.staticflickr.com/65535/53403645916_71b8e4057a_d.jpg",
    },
  ];
</script>

<div class="flex mx-auto w-full lg:w-[80vw] h-[250vh]">
  <HeroParallax {products} />
</div>
