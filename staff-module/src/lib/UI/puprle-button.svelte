<script lang="ts">
    export let name = '';
    export let type: 'button' | 'submit' | 'reset' = 'button';
  </script>
  
  <button
    type={type}
    class="bg-purple-600 text-white w-16 p-2 rounded-lg mx-5 my-4"
  >
    {name}
  </button>
  