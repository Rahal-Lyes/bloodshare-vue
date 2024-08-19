<template>
  <footer class="text-blue-950 py-8 ">
    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4 container mx-auto ">
      <div>
        <div class="text-2xl font-semibold px-8 py-4">
          <router-link :to="{ name: 'home' }" class="text-red-500">
            <span class="font-sail">S</span>hare
            <font-awesome-icon :icon="['fas', 'droplet']" />
            <span class="font-sail">B</span>loob
          </router-link>

          <p class="text-xl font-normal text-blue-950 p-2">
            Passionate about bridging healthcare gaps, we connect donors with
            recipients. Our community fosters empathy and solidarity, uniting
            those dedicated to impactful change.
          </p>
        </div>
      </div>

      <div class="px-6 py-4 flex flex-col max-md:flex max-md:flex-cols max-md:justify-center max-md:items-center">
        <h2 class="text-2xl font-semibold">Get Help</h2>
        <ul >
          <li >
            <a href="/" class="flex items-center gap-4 py-2">
              <span>Facebook</span>
              <img
                class="w-6 h-6"
                src="../assets/svg/facebook.svg"
                alt="facebook"
              />
            </a>
          </li>
          <li class="flex items-center gap-4 py-2">
            <a href="/" class="flex items-center gap-4 py-2">
              <span>Instagram</span>
              <img
                class="w-6 h-6"
                src="../assets/svg/Instagram_light.svg"
                alt="Instagram"
                
              />
            </a>
          </li>
          <li class="flex items-center gap-4 py-2">
            <a href="/" class="flex items-center gap-4 py-2">
              <span>TikTok</span>
              <img
                class="w-6 h-6"
                src="../assets/svg/tiktok.svg"
                alt="tiktok"
              />
            </a>
          </li>
          <li class="flex items-center gap-4 py-2">
            <a href="/" class="flex items-center gap-4 py-2">
              <span>X</span>
              <img
                class="w-6 h-6"
                src="../assets/svg/X (formerly Twitter)_light.svg"
                alt="X"
              />
            </a>
          </li>
        </ul>
      </div>

      <!-- Ajoutez d'autres sections ici si nécessaire -->

      
      <div class="text-center text-blue-950 py-4">
        <h2 class="text-2xl font-semibold">Account</h2>
        <ul>
          <li>
            <a href="/" class="flex flex-col items-center gap-4 py-2">
              <p>Account</p>
              <p>Login</p>
              <p>Register</p>
              <p>credit note</p>
            
            </a>
          </li>
          </ul>
      </div>
      <div class="flex text-blue-950 py-4 justify-center items-center">
        <p>© <span class="font-bold">2024 ShareBloob</span> - All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
