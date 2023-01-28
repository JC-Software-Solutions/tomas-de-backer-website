<script lang="ts" setup>
const { $i18n } = useNuxtApp()

const { data: palmares } = useAsyncData('palmares', async () => queryContent(`/${$i18n.localeProperties.value.code}/palmares`).findOne())
</script>

<template>
  <div class="container flex flex-col mx-auto p-4">
    <div class="flex flex-wrap mt-5">
      <div class="w-1/2" data-aos="fade-right" />
      <div class="w-1/2" data-aos="fade-left">
        <article>
          <h3 class="font-sans font-weight-bold text-xl md:text-4xl py-2 capitalize">
            {{ $t('mystory') }}
          </h3>
          <p>
            Tomas heeft al vanaf zijn eerste bezoek aan het Circuit van Zolder en Spa-Francorchamps het racevirus goed te pakken.
            Dit begon al op 2 jarige leeftijd. Sinds dat moment is hij niet meer weg te slaan van het race gebeuren.
            Wat begon met kijken en helpen waar kon, bij de auto’s en piloten die voor het team van zijn vader Eddy De Backer reden,
            groeide het uit tot het zelf opstarten van zijn carrière. Eerst in de kartsport en vervolgens in de autosport.
            In 2009 begon Tomas met karten bij de kartclub Antwerp Karting te Wilrijk.
            Na een tijdje les te hebben gevolgd, startte Tomas met clubkampioenschappen.
            Vervolgens volgde het Belgisch/Nederlands GK4 Kampioenschap en Benelux kampioenschap IAME.
            Tomas groeide hier doorheen de jaren en werd, tussen 2010 en 2016, 5 keer kampioen in 5 verschillende categorieën.
          </p>

          <p>
            In 2011 wist Tomas zich eveneens te plaatsen voor de finale van een door de energydranken fabrikant Red Bull georganiseerde wedstrijd, met huurkarts te Eupen als jongste deelnemer.
          </p>

          <p>
            Een ander hoogtepunt kwam er in 2014.
            Tomas raakte eveneens als jongste deelnemer in de finale van een simulatorwedstrijd georganiseerd door Renault België/Luxemburg waar hij met een Renault Clio Cup
            op het grote F1 circuit van Spa-Francorchamps mocht rijden.
          </p>

          <p>
            In 2017 en 2018 kwam de grote sprong naar de autosport, de Conrad Mazda MX-5 Cup.
            De grootste en meest competitieve merken cup van Nederland op dat ogenblik.
            Al vanaf zijn eerste wedstrijd kon Tomas meteen met de kopgroep van het veld mee. Hij kon in zijn eerste seizoen dan ook met grote voorsprong de rookie titel binnenhalen.
            In 2018 finishte Tomas op een 3de plaats in het algemeen klassement met maar liefst 11 podium plaatsen.
          </p>

          <p>
            Seizoen 2019 werd Tomas een mooie kans aangeboden door een Italiaans kartmerk namelijk Haase Kart.
            Hij was de enige binnen de Benelux in zijn leeftijdscategorie die deze ondersteuning kreeg dat jaar.
            Het was voor het ontwikkelen van het chassis dat Tomas wedstrijden reed in het Belgisch/Nederlands GK4 kampioenschap.
            Vanaf seizoen 2020 verscheen Tomas aan de start in de Belgische Ford Fiesta Sprint Cup.
            De cup die hoog aangeschreven staat voor jonge talenten om hun carrière te lanceren.
            Na het behalen van de junior titel in zijn eerste seizoen en mogen af te sluiten als Vice-kampioen algemeen was dit een mooi begin van een zeer succesvolle periode.
          </p>

          <p>
            In seizoen 2021 volgde er helaas heel wat mechanische pech waardoor Tomas niet verder geraakte dan een 3de plaats algemeen,
            maar wel met de meeste overwinningen en pole positions op zijn naam schreef.
          </p>

          <p>
            Seizoen 2022 werd dan de ultieme bekroning van al het harde werk de afgelopen seizoenen.
            Met zowel de titel in het algemene Belgische klassement als bij de Belgische junioren.
            Tevens mocht Tomas ook de algemene titel van de Dutch/Belgium Superstar op zijn naam schrijven!
            Met 10 overwinningen en 13 podia op 14 wedstrijden was dit een ongezien resultaat in het bestaan van de Belgische Fiesta Cup!
          </p>
        </article>
      </div>
    </div>

    <div class="flex flex-wrap mt-48">
      <div class="w-full xl:w-1/2 text-sm md:text-base" data-aos="fade-right">
        <h3 class="font-sans font-weight-bold text-xl md:text-4xl py-2 capitalize" data-aos="fade-right">
          {{ $t('palmares') }}
        </h3>
        <ul class="ml-5">
          <li v-for="{ year, title } in palmares?.body" :key="title" class="flex flex-col flex-wrap md:flex-row my-3 md:my-1">
            <div class="font-weight-bold text-secondary inline-block w-28">
              {{ year }}
            </div>
            <div>
              {{ title }}
            </div>
          </li>
        </ul>
      </div>

      <div class="w-full xl:w-1/2" data-aos="fade-left">
        <NuxtPicture
          src="/img/tomas/podium.jpg"
          :img-attrs="{
            class: 'rounded-lg shadow-lg mx-auto md:mt-10 md:max-w-700px w-auto',
            alt: $t('img-alt.podium'),
          }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
article p {
  @apply my-4;
}
</style>
