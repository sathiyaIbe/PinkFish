'use client'
import React, { useEffect, useState } from 'react'

const Modal = (props) => {
    
    const [active, setActive] = useState(Boolean);
    useEffect(()=>{
        setActive(props.show)

    },[active])

    console.log(active)
    const handleToggle = (event) => {
      event.preventDefault();
      setActive(!active);
    };
  return (
    
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
{active&&
<>
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-[90%] items-center justify-center p-4 text-center sm:items-center sm:p-0">

      <div class="relative transform overflow-hidden rounded-lg bg-transparent min-w-[90vw] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-transparent px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start text-black">
            <div onClick={(e)=>{handleToggle(e)}} class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
             X
            </div>
           
            {/* <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
              </div>
            </div> */}
            <div className='w-[100%]'>
                    <img   src={props.url} className='w-[100%] image_118'/>
                    </div>
          </div>
        </div>
        {/* <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
          <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
        </div> */}
      </div>
    </div>
  </div>
  </>
}
</div>
    
  )
}

export default Modal