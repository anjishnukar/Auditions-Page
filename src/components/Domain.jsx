import React from 'react'

const Domain = () => {
  return (
    <div>
      <Card/>
    </div>
  )
}

export default Domain;

const Card = () =>{
 return(
    <div id="App"
        class="card group  p-14 backdrop-blur-sm rounded-3xl border border-neutral-500 max-w-[92%] w-[400px] h-[450px] relative shadow-inner shadow-teal-200 bg-teal-100/5 backdrop:blur-xl overflow-hidden scale-90 md:scale-100">
      <div class="animation">
        <dotlottie-player src="https://lottie.host/7aec8700-285d-4c5e-805e-ca83a1408e09/mKaShlPPFj.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>
        </div>
        <h3 class="text-center text-3xl  font-[600] py-8 text-teal-300">App Development</h3>
        <p class=""> Get access to wide range of app development oppurtunities in our club and sharpen your skills, access
          resources and construct your portfolio through various projects.</p>
    </div>
 )
}
