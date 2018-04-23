<template>
<div class="app">
  <div class="anchor">
  <p>Only anchor page</p>
        <cdr-a href="https://www.rei.com/">Default link</cdr-a>
        <cdr-a modifier="standalone" href="https://www.rei.com/">An example standalone link</cdr-a>
  </div>
  <div class="anchor-example overlay-example">
     <cdr-a
      modifier="contrast"
      href="#example-contrasto"
     >contrast anchor from cedar2</cdr-a>
     <br>
     <cdr-a
      modifier="button"
      href="#example-contrasto"
     >button anchor from cedar2</cdr-a>
  </div>
 </div>
</template>

<script>
// option 1
import { CdrA } from 'cedar';

export default {
  name: 'Anchor',
  components: {
        CdrA,
  },
  data: function() {
    return {
      testing: 'anchor'
    }
  }
}
</script>

<style>
  .anchor-example {
    padding: 20px;
  }

  .overlay-example {
    background-color: black;
  }
</style>
