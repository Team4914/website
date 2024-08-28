<script lang="ts">
  import { StickyScrollReveal } from "./ui/StickyScrollReveal/index";

  const content = [
    {
      title: "Overview",
      description:
        "The Victoria Park Collegiate Institute Robotics Team (Teams 24484 and 24485) is a FIRST Tech Challenge (FTC) comprised of an extremely dedicated group of 36 members, two teachers, community supporters and volunteer mentors. Teams 24484 and 24485 were founded in October 2023 by the teachers and staff of Victoria Park Collegiate Institute.",
      imageSrc: "/group-photo.jpg",
    },
    {
      title: "Our Vision",
      description:
        "...is to become a model organization that promotes FIRST’s vision of cultural transformation in Canada, through partnerships with our community, students, parents, teachers and our sponsors.",
      imageSrc: "/hero-new.webp",
    },
    {
      title: "Our Mission",
      description:
        "...is to encourage the personal growth and development of all of our stakeholders to focus on science and technology education through participation in FIRST competitions.",
      imageSrc: "/group-photo.jpg",
    },
  ];
</script>

<div class="">
  <StickyScrollReveal {content} />
</div>
