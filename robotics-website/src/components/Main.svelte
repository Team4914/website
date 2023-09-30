<script>
  import 'agnostic-svelte/css/common.min.css';
  import { Button, EmptyState } from "agnostic-svelte";
</script>
<div>
   <EmptyState>
      <div slot="header">
        <img src="https://cdn.discordapp.com/attachments/1122723830973075506/1124411188294463568/logo.png" alt="">
      </div>
      <div slot="body">
        <div class="h4">
          let's get Started
        </div>
        <p class="mbe16" style="color: var(--agnostic-gray-dark);" >
          this will be the Robotics Website
        </p>
      </div>
      <div slot="footer">
        <Button mode="primary">
          <a href="https://github.com/Team4914/website" style="color: var(--agnostic-action-dark); ">Github</a>
        </Button>
      </div>
  </EmptyState>
</div>

<style>
  div {
    padding: 5%;
  }
  img {
    width: 90px;
  }
</style>