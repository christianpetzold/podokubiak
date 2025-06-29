export function useScrollRestore() {
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('restoreScrollY', String(window.scrollY))
  })

  onMounted(() => {
    const saved = localStorage.getItem('restoreScrollY')

    if (window.location.hash || !saved) return

    const html = document.documentElement
    const prevScrollBehavior = html.style.scrollBehavior
    html.style.scrollBehavior = 'auto'

    requestAnimationFrame(() => {
      window.scrollTo({ top: parseInt(saved, 10) })
      requestAnimationFrame(() => {
        html.style.scrollBehavior = prevScrollBehavior
      })
    })
  })
}
