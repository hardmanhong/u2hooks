import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Button } from 'antd'
import ModalTest from './ModalTest'

const App = () => {
  const onShow = () => {
    ModalTest.show({ data: 'App' })
  }

  return (
    <div>
      <ModalTest />
      <Button onClick={onShow}>show</Button>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
