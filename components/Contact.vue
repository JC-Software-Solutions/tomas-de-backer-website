<template>
  <section id="contact" class="px-4">
    <h3 class="font-sans font-weight-bold text-xl md:text-4xl py-2">
      Contact
    </h3>

    <div class="flex justify-center">
      <form class="w-full md:w-1/3 text-primary">
        <input type="text" placeholder="Name" class="w-full p-2 mb-2 rounded-md">
        <input type="email" placeholder="Email" class="w-full p-2 mb-2 rounded-md">
        <textarea placeholder="Message" class="w-full p-2 mb-2 rounded-md min-h-5" rows="5" />
        <div class="text-center">
          <button class="btn w-full md:w-4/5 text-white">
            Send
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
