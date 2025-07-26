<template>
  <div class="page">
    <section id="section1">
      <Home/>
    </section>

    <section id="section2">
      <Behandlungen/>
    </section>

    <section id="section3">
      <h2>Section 3</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sem felis, egestas id varius vitae, faucibus
        sagittis ipsum. Cras aliquam pellentesque sollicitudin. In viverra, urna et condimentum ultrices, nibh libero
        dictum velit, a imperdiet orci nibh et libero. Phasellus fringilla malesuada pretium. Aliquam at pretium odio,
        in lacinia augue. Nunc rutrum ut nibh ac accumsan. Aenean sed urna metus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Pellentesque at massa tortor.

        Nullam tempor, mauris nec varius auctor, nisi lorem vehicula turpis, ut iaculis leo mi in odio. Aliquam volutpat
        faucibus lectus dictum sollicitudin. Nunc tincidunt nisl est, a placerat velit malesuada eu. Praesent non nisi
        iaculis, ultrices lectus et, fermentum massa. Nullam interdum arcu mauris, ac pellentesque erat pellentesque
        quis. Nulla volutpat pharetra placerat. Nunc tincidunt rhoncus odio, a bibendum odio convallis sit amet.

        Nullam ut lacus arcu. Donec in neque vel libero imperdiet hendrerit. Morbi nec pulvinar neque. Donec ut eleifend
        odio. Cras sit amet ultrices augue. Donec ultrices, metus a lacinia aliquam, enim velit iaculis turpis, eget
        porta nisl quam ut arcu. Proin gravida porta arcu et sodales. Pellentesque id congue eros. Aenean consectetur
        enim eget elit condimentum dignissim.

        Sed auctor nunc nec lacus vestibulum facilisis. Duis mattis nulla ut posuere dignissim. Maecenas metus lorem,
        sodales et massa quis, varius pellentesque nulla. Donec viverra eget ligula sit amet blandit. Pellentesque vel
        porta augue, nec euismod ipsum. Curabitur iaculis non mauris dignissim dictum. Nam lobortis venenatis neque sit
        amet consectetur. Mauris placerat vestibulum libero, et mattis metus rhoncus ut. Aenean gravida vehicula
        pharetra. Cras rhoncus posuere pulvinar. Pellentesque semper lobortis ex sed rhoncus. Mauris euismod congue nisi
        sed sodales.

        Integer commodo ipsum quis velit pharetra, ullamcorper tempus ante consectetur. Aenean ac diam et leo laoreet
        dictum. Sed eros arcu, pretium ut elit non, molestie fringilla dui. Vivamus pretium, lorem quis maximus
        ultricies, elit sapien sodales sapien, sed maximus nunc mauris quis ligula. Donec at urna vitae lorem ultrices
        mollis. Suspendisse ac pharetra tortor. Vestibulum nec felis tortor. Ut ut leo a magna egestas auctor eu ut
        elit. Etiam eget tortor tempor, convallis massa dignissim, hendrerit dui. Quisque sit amet purus diam. Nam
        venenatis sodales suscipit. Aenean sed turpis commodo, commodo quam at, iaculis leo. Phasellus vel fringilla
        dolor. Maecenas nec est vel velit molestie accumsan.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sem felis, egestas id varius vitae, faucibus
        sagittis ipsum. Cras aliquam pellentesque sollicitudin. In viverra, urna et condimentum ultrices, nibh libero
        dictum velit, a imperdiet orci nibh et libero. Phasellus fringilla malesuada pretium. Aliquam at pretium odio,
        in lacinia augue. Nunc rutrum ut nibh ac accumsan. Aenean sed urna metus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Pellentesque at massa tortor.

        Nullam tempor, mauris nec varius auctor, nisi lorem vehicula turpis, ut iaculis leo mi in odio. Aliquam volutpat
        faucibus lectus dictum sollicitudin. Nunc tincidunt nisl est, a placerat velit malesuada eu. Praesent non nisi
        iaculis, ultrices lectus et, fermentum massa. Nullam interdum arcu mauris, ac pellentesque erat pellentesque
        quis. Nulla volutpat pharetra placerat. Nunc tincidunt rhoncus odio, a bibendum odio convallis sit amet.

        Nullam ut lacus arcu. Donec in neque vel libero imperdiet hendrerit. Morbi nec pulvinar neque. Donec ut eleifend
        odio. Cras sit amet ultrices augue. Donec ultrices, metus a lacinia aliquam, enim velit iaculis turpis, eget
        porta nisl quam ut arcu. Proin gravida porta arcu et sodales. Pellentesque id congue eros. Aenean consectetur
        enim eget elit condimentum dignissim.

        Sed auctor nunc nec lacus vestibulum facilisis. Duis mattis nulla ut posuere dignissim. Maecenas metus lorem,
        sodales et massa quis, varius pellentesque nulla. Donec viverra eget ligula sit amet blandit. Pellentesque vel
        porta augue, nec euismod ipsum. Curabitur iaculis non mauris dignissim dictum. Nam lobortis venenatis neque sit
        amet consectetur. Mauris placerat vestibulum libero, et mattis metus rhoncus ut. Aenean gravida vehicula
        pharetra. Cras rhoncus posuere pulvinar. Pellentesque semper lobortis ex sed rhoncus. Mauris euismod congue nisi
        sed sodales.

        Integer commodo ipsum quis velit pharetra, ullamcorper tempus ante consectetur. Aenean ac diam et leo laoreet
        dictum. Sed eros arcu, pretium ut elit non, molestie fringilla dui. Vivamus pretium, lorem quis maximus
        ultricies, elit sapien sodales sapien, sed maximus nunc mauris quis ligula. Donec at urna vitae lorem ultrices
        mollis. Suspendisse ac pharetra tortor. Vestibulum nec felis tortor. Ut ut leo a magna egestas auctor eu ut
        elit. Etiam eget tortor tempor, convallis massa dignissim, hendrerit dui. Quisque sit amet purus diam. Nam
        venenatis sodales suscipit. Aenean sed turpis commodo, commodo quam at, iaculis leo. Phasellus vel fringilla
        dolor. Maecenas nec est vel velit molestie accumsan.
      </p>
    </section>
  </div>
</template>

<script lang="ts" setup>
import {useScrollSpy} from "@/composables/useScrollSpy.ts";

const emit = defineEmits(['update-sections', 'update-active-section'])

const sections = [
  {id: 'section1', icon: 'mdi-home', label: 'Home'},
  {id: 'section2', icon: 'mdi-foot-print', label: 'Behandlungen'},
  {id: 'section3', icon: 'mdi-map-marker', label: 'Anfahrt'},
]

emit('update-sections', sections)

const { activeSection } = useScrollSpy(sections.map(s => s.id), { offset: 80 })

watch(activeSection, (id) => {
  if (id) emit('update-active-section', id)
})
</script>

<style scoped>

</style>
