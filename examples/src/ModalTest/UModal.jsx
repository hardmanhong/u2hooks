import React from 'react'
import { Modal } from 'antd'
import { useToggleCom, useToggleComWithPayload } from 'up-use'

const UModal = ({ children, onOk, onCancel, ...props }) => {
  const [visible, { handleOk, onShow, onHide }] = useToggleCom({
    Component: UModal,
    onOk,
    onCancel
  })
  console.log('handleOk', handleOk)
  return (
    <Modal {...props} visible={visible} onOk={onShow} onCancel={onHide}>
      {children}
    </Modal>
  )
}
const useVisible = (Component, defaultPayload) =>
  useToggleComWithPayload(UModal, Component, defaultPayload)
UModal.useVisible = useVisible

export default UModal
