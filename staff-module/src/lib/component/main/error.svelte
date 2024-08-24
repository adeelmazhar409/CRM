<script>
  import Bar from '$lib/UI/bar.svelte';
  import PuprleButton from '$lib/UI/puprle-button.svelte'
  let width ='';
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
  
   
    <div class="w-1/3 my-10">
        <div class="relative">
           <Bar bind:width />
            <div class="w-full flex justify-between absolute top-0 h-4">
                <div class="w-1/4 h-1 border-r-2 border-white"></div>
                <div class="w-1/4 h-1 border-r-2 border-white"></div>
                <div class="w-1/4 h-1 border-r-2 border-white"></div>
                <div class="w-1/4 h-1 border-r-2 border-white"></div>
            </div>
        </div>
  
      
      <div class="grid my-8 ">
       
        <div class="font-bold text-neutral-900 text-2xl leading-8 ">Profile</div>
    
        <div class="text-neutral-900 font-normal text-lg leading-7 mt-2 ">You can only update the owners nickname, email address and mobile number.</div>
      
    </div>
      
      
      <form class="">
        <div class="grid grid-cols-2 gap-4">
            <div class="relative w-full">
                <label class="font-semibold text-lg leading-6 text-neutral-900">
                  First name
                </label>
                <input 
                      type="text" 
                     placeholder="Enter last name" 
                     class="w-full p-2 pr-10 border my-2 border-red-400 rounded-lg bg-slate-50  font-normal text-lg leading-7 text-slate-600 focus:outline-none"
                     />

               
                     <div class="absolute inset-y-14 right-0 flex items-center pr-3 pointer-events-none">
                  <img src="/icons/error.svg" alt="Error Icon" class="w-5 h-5 text-red-500">  
                </div>
             <div class="text-red-600 font-sans font-normal text-base leading-6 " >

                Please enter a valid first name.
             </div>
            
            </div>
              
              <div class="relative w-full">
                <label class="font-semibold text-lg leading-6 text-neutral-900">
                    Last name
                </label>
                <input 
                      type="text" 
                     placeholder="Enter last name" 
                     class="w-full p-2 pr-10 border my-2 border-red-400 rounded-lg bg-slate-50  font-normal text-lg leading-7 text-slate-600 focus:outline-none"
                     />

               
                     <div class="absolute inset-y-14 right-0 flex items-center pr-3 pointer-events-none">
                  <img src="/icons/error.svg" alt="Error Icon" class="w-5 h-5 text-red-500">  
                </div>
                <div class="text-red-600 font-sans font-normal text-base leading-6 " >

                    Please enter a valid first name.
                 </div>
            
            </div>
              
        </div>
  
        <div class="my-7 ">
            <label class=" font-semibold text-lg leading-6 text-neutral-900 ">
            Nick Name (Display Name)
          </label>
          <div class="flex items-center">
            <input class="w-full p-2 border rounded-s-lg my-2 bg-slate-50 text-slate-600" type="text" value="Guston" />
            <button class="bg-gray-50 text-gray-700 border  p-2 my-2 rounded-e-lg">Edit</button>
          </div>
          <p class="text-gray-500  mt-1 font-normal ">
            If not set default is first name and last name initial.
          </p>
        </div>
  
        <div class="relative w-full">
            <label class="font-semibold text-lg leading-6 text-neutral-900">
                Email Address
            </label>
            <input 
                  type="text" 
                 placeholder="Enter Email Address" 
                 class="w-full p-2 pr-10 border my-2 border-red-400 rounded-lg bg-slate-50  font-normal text-lg leading-7 text-slate-600 focus:outline-none"
                 />

           
                 <div class="absolute inset-y-14 right-0 flex items-center pr-3 pointer-events-none">
              <img src="/icons/error.svg" alt="Error Icon" class="w-5 h-5 text-red-500">  
            </div>
            <div class="text-red-600 font-sans font-normal text-base leading-6 " >

                Please enter a valid first name.
             </div>
        
        </div>
  
        <div class="relative w-full my-7">
            <label class="font-semibold text-lg leading-6 text-neutral-900">
                Mobile Number (Optional)
            </label>
            <input 
                  type="text" 
                 placeholder="Enter  Mobile Number (Optional)" 
                 class="w-full p-2 pr-10 border my-2 border-red-400 rounded-lg bg-slate-50  font-normal text-lg leading-7 text-slate-600 focus:outline-none"
                 />

           
                 <div class="absolute inset-y-14 right-0 flex items-center pr-3 pointer-events-none">
              <img src="/icons/error.svg" alt="Error Icon" class="w-5 h-5 text-red-500">  
            </div>
            <div class="text-red-600 font-sans font-normal text-base leading-6 " >

                Please enter a valid first name.
             </div>

        </div>
      </form>
    </div>
  </div>



