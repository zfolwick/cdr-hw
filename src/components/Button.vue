<template>
  <div class="button">
  <p>Only button page</p>
  	<cdr-button>derp</cdr-button>
  </div>
</template>

<script>
// option 1
import { CdrButton } from 'cedar';

// option 2
//import * as cedarComps from 'cedar';

export default {
  name: 'Button',
  components: {
  	// option 1
  	CdrButton,
  	// option 2
  	//...cedarComps
  },
  data () {
    return {
      msg: 'Welcome to Your Button'
    }
  }
}
</script>
