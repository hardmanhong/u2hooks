import React from 'react'
import { useEffect } from 'react'
import UModal from './UModal'
import { Button } from 'antd'

const ModalTest = (props) => {
  const [visible, payload] = UModal.usePayload(ModalTest, {})
  useEffect(() => {
    console.log('ModalTest', visible, payload)
  }, [visible, payload])
  return (
    <UModal title='111' {...props} onCancel={ModalTest.hide}>
      {payload.data}
      <ModalTest2 />
      <Button
        onClick={() => {
          ModalTest2.show({ name: '222' })
        }}
      >
        show222
      </Button>
    </UModal>
  )
}
ModalTest.show = (payload: any) => {}
ModalTest.hide = () => {}

const ModalTest2 = (props) => {
  const [visible, payload] = UModal.usePayload(ModalTest2, {})

  useEffect(() => {
    console.log('ModalTest2', visible, payload)
  }, [visible, payload])
  return (
    <UModal title='222' {...props} onCancel={ModalTest2.hide}>
      {payload.data}
    </UModal>
  )
}
ModalTest2.show = (payload: any) => {}
ModalTest2.hide = () => {}
export default ModalTest
