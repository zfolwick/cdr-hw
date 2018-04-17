<template>
  <div id="landing">
    <img src="./assets/logo.png">
  <cdr-button>Here's your button</cdr-button>

  </div>
</template>

<script>

import { CdrButton } from '@rei/cdr-button'

export default {

 name: 'my-component',
  components: { // Only available within this component
    CdrButton
  }

}
</script>

