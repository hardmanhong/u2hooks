import { useEffect } from 'react'
import useToggle from './useBoolean'

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

type useToggleComReturn = [boolean, { onShow: () => void; onHide: () => void }]

const useToggleCom = ({
  Component,
  onOk,
  onCancel
}: ParamsType): useToggleComReturn => {
  const [visible, toggle] = useToggle()
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
  return [visible, { onShow, onHide }]
}
export default useToggleCom
