<script setup lang="ts">
const target = ref<HTMLVideoElement | null>(null);

// unref(target)?.addEventListener("loadstart", (event) => {
//   console.log(
//     "bla"
//   );
// });
// unref(target)?.addEventListener("loadeddata", (event) => {
//   console.log(
//     "Yay! The readyState just increased to  " +
//       "HAVE_CURRENT_DATA or greater for the first time.",
//   );
// });
</script>

<template>
  <div class="w-full bg-black">
    <div class="max-w-[480px] mx-auto">
      <header class="pt-16 flex flex-row justify-center">
        <img src="~/assets/img/logos.png" alt="Rurban X Nat Geo" style="zoom:50%;" />
      </header>
      <main>
        <div class="flex flex-col gap-8 py-8">
          <p
            class="text-center text-white text-sm font-medium font-nils"
          >
            Combining Craftsmanship, Impact, and Intention
          </p>
          <video
            poster="~assets/img/video-poster.jpg"
            playsinline
            loop
            autoplay
            muted
            controls
            ref="target"
          >
          <source src="~/assets/video/weaving.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

          <div class="px-8 sm:px-12">
            <p
              class="text-center text-white text-base font-normal font-nils"
            >
              Perched high in one of the world’s remaining biodiversity
              hotspots, Chizami village lies in the hilly forests of Nagaland,
              one of the "Seven Sisters" states in Northeast India. Home to the
              Chakhesang Naga tribe, the local lifestyle in Chizami is largely
              agrarian, centered around terrace farming in the&nbsp;mountainous&nbsp;terrains.
            </p>
          </div>
          <div>
            <img
              src="~/assets/img/Nagaland_July_2016.jpg"
              alt="Nagaland July 2016"
            />
          </div>
          <div class="px-8 sm:px-12">
            <p
              class="text-center text-white text-base font-normal font-nils"
            >
              The Chakhesang Nagas are practitioners of weaving their heritage
              loin cloth. From growing their own cotton, hand-spinning the yarn
              to weaving, Chizami women have great intergenerational expertise
              in weaving heritage textiles on the backstrap loin loom — one of
              the oldest looms still used&nbsp;by&nbsp;humans.
            </p>
          </div>
          <div class="flex flex-row gap-3">
            <div class="flex flex-col gap-3">
              <div><img src="~/assets/img/weaving-1.jpg" alt="weaving" /></div>
              <div><img src="~/assets/img/weaving-2.jpg" alt="weaving" /></div>
            </div>
            <div>
              <img src="~/assets/img/weaving-3.jpg" alt="weaving" />
            </div>
          </div>

          <div class="px-8 sm:px-12">
            <p
              class="text-center text-white text-base font-normal font-nils"
            >
              This portable device is characterized by a strap fixed to one end
              of the loom which the weavers wear around their waist, while
              individual straps on the other end are anchored to a tree&nbsp;or&nbsp;pole.
            </p>
          </div>
          <img
            src="~/assets/img/Chizami logo.png"
            alt=""
            class="h-16 w-auto mx-auto"
          />
          <div class="flex flex-row gap-3 w-full">
            <div><img src="~/assets/img/weaving-4.jpg" alt="weaving" /></div>
            <div><img src="~/assets/img/weaving-5.jpg" alt="weaving" /></div>
          </div>
          <div class="px-8 sm:px-12">
            <p
              class="text-center text-white text-base font-normal font-nils"
            >
              This special product is created in collaboration between Rurban by
              Roots Studio and National Geographic, to celebrate the masterful
              Indigenous Chizami weaves from Nagaland, India. It has been
              handwoven using 100% cotton yarn. It will keep you steady wherever
              life takes you, interwoven with National Geographic’s flag colors
              representing sea, land,&nbsp;and&nbsp;sky.
            </p>
          </div>
          <div>
            <img src="~/assets/img/map.svg" alt="Rurban X Nat Geo" />
          </div>
          <div class="px-8 sm:px-12">
            <p
              class="text-center text-white text-base font-normal font-nils"
            >
              Roots Studio reimagines cultural preservation and authorship by
              bridging Indigenous artists from around the world and global
              markets, with respect, reciprocity, and remuneration. For 10
              years, they have built an IP protected library of traditional art
              and knowledge, with royalties traceable back to every artist&nbsp;and&nbsp;community.
            </p>
          </div>
          <div>
            <img src="~/assets/img/weaving-6.jpg" alt="Rurban X Nat Geo" />
          </div>
        </div>
      </main>
      <footer class="flex flex-row justify-center pb-16">
        <div class="flex-col justify-center items-center gap-2 flex mx-auto font-nils">
          <span
            class="block text-center text-white text-base font-normal"
          >
            Follow our journey
          </span>
          <a
            href="https://www.instagram.com/rootsstudio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="flex flex-row gap-1.5">
              <div>
                <img src="~/assets/img/instagram.svg" alt="Rurban X Nat Geo" />
              </div>
              <span
                class="block text-white text-base font-normal"
              >
                <span class="text-[12px]">@</span>rootsstudio
              </span>
            </div>
          </a>

          <a
            href="https://www.rootsstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            class="block text-white text-base font-normal font-nils"
          >
            www.rootsstudio.com</a
          >
        </div>
      </footer>
    </div>
  </div>
</template>
