<template>
  <section class="flex justify-center items-center flex-wrap md:flex-nowrap flex-row text-white">
    <div class="w-full md:w-2/5">
      <!-- <div class="bg-green-500 h-90 w-50 mx-auto" /> -->
      <div class="mx-auto p-4 xs:p-0 md:p-12">
        <picture>
          <source srcset="/img/tomas/tdb1.webp" type="image/webp">
          <source srcset="/img/tomas/tdb1.jpg" type="image/jpeg">
          <img src="/img/tomas/tdb1.jpg" class="rounded-lg shadow-lg border-2 border-secondary">
        </picture>
      </div>
    </div>
    <div class="w-full md:w-2/3 px-4">
      <h3 class="font-sans font-weight-bold text-2xl py-2">
        Tomas De Backer
      </h3>
      <p class="font-sans font-weight-light w-full md:w-4/5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse at hendrerit purus, sit amet malesuada leo.
        Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Ut purus ipsum, convallis vitae facilisis sed,
        tristique a orci. Maecenas imperdiet scelerisque sapien, id vehicula leo mollis in.
        Morbi orci enim, auctor sit amet ultricies id, cursus ac augue.
        In hac habitasse platea dictumst. Aliquam maximus ex id dui cursus,
        non elementum est posuere. Cras eu leo non nunc porttitor iaculis vitae ac ex.
      </p>

      <div class="text-center md:text-left">
        <NuxtLink to="/about" class="btn my-5 mx-auto">
          Read full story.
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
