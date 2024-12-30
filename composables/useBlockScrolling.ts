export function useBlockScrolling(isLoading: Ref<boolean>) {
  watch(isLoading, (loading) => {
    if (loading) {
      document.body.style.overflow = 'hidden'
      return
    }
    document.body.style.overflow = 'auto'
  })
}
