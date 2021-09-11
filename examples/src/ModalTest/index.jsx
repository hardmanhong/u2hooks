import React from 'react'
import { useEffect } from 'react'
import UModal from './UModal'

const ModalTest = (props) => {
  const payload = UModal.useVisible(ModalTest, {})
  useEffect(() => {
    console.log('useEffect', payload)
  }, [payload])
  return <UModal {...props}>{payload.data}</UModal>
}
export default ModalTest
