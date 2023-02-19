<template>
  <section id="contact" class="px-4 py-20">
    <div class="flex justify-around">
      <div class="hidden w-1/2 md:block" data-aos="fade-right">
        <NuxtPicture
          src="/img/action/spa-rain-1.jpg"
          format="webp"
          :img-attrs="{
            class: 'rounded-lg shadow-lg mx-auto max-h-1xl',
            alt: $t('img-alt.spa-rain'),
          }"
        />
      </div>
      <div class="w-full sm:w-4/5 md:w-1/3 mx-auto my-auto" data-aos="fade-left">
        <h3 class="font-sans font-weight-bold text-xl md:text-4xl py-2">
          Contact
        </h3>

        <p class="my-4 text-sm">
          {{ $t('enquiries') }}
        </p>

        <div v-if="success" class="rounded-lg my-5 bg-green-500">
          <p class="text-center text-white p-2">
            {{ $t('contact-success') }}
          </p>
        </div>

        <div v-if="failed" class="rounded-lg my-5 bg-red-500">
          <p class="text-center text-white p-2">
            {{ $t('contact-failed') }}
          </p>
        </div>

        <form name="contact" ref="form" class="w-full text-primary w-full" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>

          <input v-model="formData.name" name="name" type="text" :placeholder="$t('name')" class="w-full p-2 mb-2 rounded-md" required>
          <input v-model="formData.email" name="email" type="email" placeholder="e-mail" class="w-full p-2 mb-2 rounded-md" required>
          <textarea v-model="formData.message" name="message" :placeholder="$t('message')" class="w-full p-2 mb-2 rounded-md min-h-5" rows="5" required />
          <div class="text-center">
            <button @click.prevent="onSubmit" :disabled="notAllRequiredFieldsFilledIn" class="btn btn-ghost w-full md:w-4/5 text-white capitalize">
              {{ $t('send') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const success = ref(false);
const failed = ref(false);

const formData = reactive({
  name: '',
  email: '',
  message: '',
})

const notAllRequiredFieldsFilledIn = computed(() => {
  return !formData.name || !formData.email || !formData.message
})

const form = ref<HTMLFormElement>();
async function onSubmit() {
  success.value = false;
  failed.value = false;

  const isValid = form.value?.reportValidity();
  if (!isValid) {
    return;
  }

  const formData = new FormData(form.value)

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    });
    success.value = true;
  } catch (err) {
    console.error(err);
    failed.value = true;
  }
}
</script>
