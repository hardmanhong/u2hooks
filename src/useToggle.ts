import { useState, useEffect, useRef } from 'react'
import useBoolean from './useBoolean'

export type ToggleComponent = any & {
  show: () => void
  hide: () => void
  toggle: (value: boolean) => void
}

type ParamsType = {
  Component: ToggleComponent
  onOk?: () => void
  onCancel?: () => void
}

type useToggleReturn = [boolean, { onShow: () => void; onHide: () => void }]
type useVisibleCallback = (visible: boolean) => void

const useToggle = ({
  Component,
  onOk,
  onCancel
}: ParamsType): useToggleReturn => {
  const [visible, toggle] = useBoolean()
  const useVisibleRef = useRef<useVisibleCallback>(Component.onVisibleChange)
  const onShow = () => {
    if (typeof onOk === 'function') {
      onOk()
    } else {
      toggle(true)
    }
  }
  const onHide = () => {
    if (typeof onCancel === 'function') {
      onCancel()
    } else {
      toggle(false)
    }
  }
  useEffect(() => {
    const init = () => {
      Component.show = () => {
        toggle(true)
      }
      Component.hide = () => {
        toggle(false)
      }
      Component.toggle = toggle
      return () => {
        Component.show = () => {}
        Component.hide = () => {}
        Component.toggle = () => {}
      }
    }
    const destroy = init()
    return () => {
      destroy()
    }
  }, [])
  useEffect(() => {
    if (typeof useVisibleRef.current === 'function') {
      useVisibleRef.current(visible)
    }
  }, [visible])
  return [visible, { onShow, onHide }]
}
const useToggleWithPayload = <T>(
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
export { useToggle, useToggleWithPayload }
