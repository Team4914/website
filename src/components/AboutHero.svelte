<script lang="ts">
  import { HeroParallax } from "./ui/HeroParallax/index";

  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://live.staticflickr.com/65535/53404075595_122792a3a5_d.jpg",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://live.staticflickr.com/65535/53404087585_3c8691b8cc_d.jpg",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "https://live.staticflickr.com/65535/53404075005_aa27701518_d.jpg",
    },

    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://live.staticflickr.com/65535/53402713107_26a6a8c736_d.jpg",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://live.staticflickr.com/65535/53402713107_26a6a8c736_d.jpg",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://live.staticflickr.com/65535/53404073685_5e22a45aa5_d.jpg",
    },

    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "https://live.staticflickr.com/65535/53404071015_f0ab4c79a5_d.jpg",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://live.staticflickr.com/65535/53403829693_9ba322688c_d.jpg",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://live.staticflickr.com/65535/53402713107_26a6a8c736_d.jpg",
    },

    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://live.staticflickr.com/65535/53403645916_71b8e4057a_d.jpg",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://live.staticflickr.com/65535/53403638176_e81f959c56_d.jpg",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://live.staticflickr.com/65535/53403645916_71b8e4057a_d.jpg",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://live.staticflickr.com/65535/53403645916_71b8e4057a_d.jpg",
    },
  ];
</script>

<div class="container mx-auto w-[80vw] lg:w-[60vw]">
  <HeroParallax {products} />
</div>
