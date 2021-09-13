import { useState, useEffect } from 'react'
import { ToggleComponent } from './useToggleCom'

const useToggleComWithPayload = <T>(
  Component: ToggleComponent,
  Wrapper: ToggleComponent,
  defaultPayload: T
): T => {
  const [payload, setPayload] = useState(defaultPayload)
  useEffect(() => {
    const initInstance = () => {
      const showCache = Component.show
      const hideCache = Component.hide
      const toggleCache = Component.toggle
      Wrapper.show = (payload = defaultPayload) => {
        setPayload(payload)
        showCache()
      }
      Wrapper.hide = hideCache
      Wrapper.toggle = toggleCache
      return () => {
        Wrapper.show = () => {}
        Wrapper.hide = () => {}
        Wrapper.toggle = () => {}
      }
    }
    const destroy = initInstance()
    return () => {
      destroy()
    }
  }, [])
  return payload
}
export default useToggleComWithPayload
