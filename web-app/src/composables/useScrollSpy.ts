import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useScroll } from '@vueuse/core'

export function useScrollSpy(sectionIds: string[], options = { offset: 80 }) {
  const activeSection = ref<string | null>(null)
  const scrollParent = ref<HTMLElement | Window | null>(null)

  onMounted(async () => {
    await nextTick()

    const vuetifyScrollContainer = document.querySelector('.v-main__wrap') as HTMLElement | null

    if (vuetifyScrollContainer !== null) {
      scrollParent.value = vuetifyScrollContainer
    } else {
      scrollParent.value = window
    }

    const scroll = useScroll(scrollParent)
    const verticalScrollPosition = scroll.y

    const updateActiveSection = () => {
      const currentScrollY = verticalScrollPosition.value
      let currentlyVisibleSectionId = sectionIds[0]

      for (let index = sectionIds.length - 1; index >= 0; index--) {
        const sectionId = sectionIds[index]
        const sectionElement = document.getElementById(sectionId)

        if (sectionElement === null) {
          continue
        }

        const sectionTopPosition = sectionElement.getBoundingClientRect().top + currentScrollY

        const offsetScrollPosition = currentScrollY + options.offset

        if (offsetScrollPosition >= sectionTopPosition) {
          currentlyVisibleSectionId = sectionId
          break
        }
      }

      let scrollContainer: HTMLElement
      let isUsingWindowScroll;

      if (scrollParent.value === window) {
        scrollContainer = document.documentElement
        isUsingWindowScroll = true
      } else {
        scrollContainer = scrollParent.value as HTMLElement
        isUsingWindowScroll = false
      }

      let visibleScrollAreaHeight: number

      if (isUsingWindowScroll) {
        visibleScrollAreaHeight = window.innerHeight
      } else {
        visibleScrollAreaHeight = scrollContainer.clientHeight
      }

      const totalContentHeight = scrollContainer.scrollHeight
      const currentVisibleBottom = currentScrollY + visibleScrollAreaHeight

      const isScrolledToBottom = currentVisibleBottom >= totalContentHeight - 1

      if (isScrolledToBottom) {
        currentlyVisibleSectionId = sectionIds[sectionIds.length - 1]
      }

      activeSection.value = currentlyVisibleSectionId
    }

    updateActiveSection()

    if (scrollParent.value !== null) {
      scrollParent.value.addEventListener('scroll', updateActiveSection, { passive: true })
    }

    onBeforeUnmount(() => {
      if (scrollParent.value !== null) {
        scrollParent.value.removeEventListener('scroll', updateActiveSection)
      }
    })
  })

  return {
    activeSection
  }
}
