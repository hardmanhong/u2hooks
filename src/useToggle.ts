import { useState, useEffect } from 'react'
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

const useToggle = ({
  Component,
  onOk,
  onCancel
}: ParamsType): useToggleReturn => {
  const [visible, toggle] = useBoolean()

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
      Component.show = onShow
      Component.hide = onHide
      Component.toggle = toggle
      return () => {
        Component.show = () => {}
        Component.hide = () => {}
        Component.toggle = () => {}
        Component.toggle = () => {}
      }
    }
    const destroy = init()
    return () => {
      destroy()
    }
  }, [])
  return [visible, { onShow, onHide }]
}
const useToggleWithPayload = <T>(
  Component: ToggleComponent,
  Wrapper: ToggleComponent,
  defaultPayload: T
): [boolean, T] => {
  const [visible, toggle] = useBoolean()
  const [payload, setPayload] = useState(defaultPayload)
  useEffect(() => {
    const initInstance = () => {
      const showCache = Component.show
      const hideCache = Component.hide
      const toggleCache = Component.toggle

      Wrapper.show = (payload: T) => {
        showCache()
        toggle(true)
        setPayload(payload)
      }
      Wrapper.hide = () => {
        hideCache()
        toggle(false)
        setPayload(defaultPayload)
      }
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
  return [visible, payload]
}
export { useToggle, useToggleWithPayload }
