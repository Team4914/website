<script lang="ts">
  // Socials Links
  const logoImage = "/LogoVPCIftc.webp";
  const linkInstagram = "https://www.instagram.com/vpci.robotics/";
  const linkEmail = "mailto:frcteam4914@gmail.com";
  const linkGithub = "https://github.com/Team4914";
  const today = new Date();
</script>

<footer
  class="w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto border-t border-zinc-700"
>
  <div class="flex flex-col justify-between md:flex-row gap-6 mb-10">
    <!-- About -->
    <div class="md:w-2/3">
      <img
        class="w-24 lg:w-24 bg-slate-700 float-left mr-4 rounded-xl"
        src={logoImage}
        alt="VPCI Robotics Logo"
      />
      <h2 class="font-bold text-base md:text-xl">Victoria Park Robotics</h2>
      <p class="text-sm md:text-base">Victoria Park Collegiate Institute</p>
      <p class="text-sm md:text-base">15 Wallingford Rd</p>
      <p class="text-sm md:text-base">Toronto, ON, CAN</p>
    </div>
    <!-- End Col -->

    <div class="md:w-1/3 flex flex-col justify-center">
      <h1 class="mt-auto text-lg font-boldtext-base uppercase">Industries</h1>

      <div class="mt-3 grid space-y-3 text-base">
        <p>
          <a
            class="inline-flex gap-x-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            href="/resources">Financial Services</a
          >
        </p>
        <p>
          <a
            class="inline-flex gap-x-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            href="/resources">Education</a
          >
        </p>
      </div>
    </div>
    <!-- End Col -->
  </div>
  <!-- End Grid -->

  <div class="pt-5 mt-5 border-t border-gray-500 dark:border-gray-700">
    <div class="sm:flex sm:justify-between sm:items-center">
      <div class="flex justify-center items-center gap-x-3 mb-4 sm:mb-0">
        <div
          class=" text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
        >
          VPCI Robotics © {today.getFullYear()} All Rights Reserved.
        </div>
      </div>

      <!-- Social Brands -->
      <div class="flex justify-center items-center gap-4">
        <a
          class="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
          href={linkInstagram}
        >
          <svg
            class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
            />
          </svg>
        </a>
        <a
          class="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
          href={linkGithub}
        >
          <svg
            class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </a>
        <a
          class="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
          href={linkEmail}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            width="20"
            height="20"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </a>
      </div>
      <!-- End Social Brands -->
      <!-- End Col -->
    </div>
  </div>
</footer>
