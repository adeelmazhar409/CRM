<script>
  import PuprleButton from '$lib/UI/puprle-button.svelte'
  import Bar from '$lib/UI/bar.svelte';
  let width ='16%';
  let name ='save'
   let type ='submit'
</script>


<div class="flex flex-col items-center w-full">
   
    <div class="font-sans grid grid-cols-3 items-center w-screen border-b">
        <img
        src="/icons/cross.svg"
        alt="Close"
        class="mx-3 my-5 w-8 h-8"
    />
      <h2 class="text-center font-semibold text-2xl leading-8">Update Details</h2>
      <div class="flex justify-end">
        <PuprleButton bind:name />


      </div>
    </div>
  
   
    <div class=" flex w-1/3 my-10 flex-col  ">
        
      <Bar bind:width />
  
            <div class="w-full flex justify-between absolute top-0 h-4">
                <div class="w-1/4 h-1 border-r-2 border-white"></div>
                <div class="w-1/4 h-1 border-r-2 border-white"></div>
                <div class="w-1/4 h-1 border-r-2 border-white"></div>
                <div class="w-1/4 h-1 border-r-2 border-white"></div>
            </div>
        </div>
  
  <div class=" py-7" >
       <div class="text-gray-700 text-xl font-bold leading-28 " >Add profile Photo</div>
       
       <div  class="font-normal text-lg leading-7 text-gray-700 justify-between py-2 " >You can add a photo for Alfonso which will appear in the POS and in your admin portal.</div>
     </div>
      
    
     <button class="w-fit flex border shadow border-gray-300 rounded-lg px-5 py-3 font-semibold text-base leading-6 items-center gap-2 text-gray-600">
      <img src="/icons/upload.svg" alt="">
      <div>Upload(Optional)</div>
     </button>
   
    
    </div>
     </div>
      
    