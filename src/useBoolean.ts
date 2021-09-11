import { useState } from 'react'

export default function useBoolean(
  initialValue = false
): [boolean, (nextValue?: any) => void] {
  const [state, setState] = useState(initialValue)
  const toggle = (nextValue: boolean): void => {
    if (typeof nextValue === 'boolean') {
      setState(nextValue)
    } else {
      setState((s) => !s)
    }
  }
  return [state, toggle]
}
