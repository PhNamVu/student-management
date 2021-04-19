import useMedia from './use-media'

function useMediaQuery() {
  const isMobile = useMedia('(max-width: 543px)')
  const isTablet = useMedia('(min-width: 544px) and (max-width: 1023px)')
  const isDesktop = useMedia('(min-width: 1024px)')
  return [isMobile, isTablet, isDesktop]
}

export default useMediaQuery
