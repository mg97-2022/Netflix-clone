import React, { Fragment } from 'react'
import GeneralFooter from '../../../components/layout/GeneralFooter/GeneralFooter'
import GetStartedNav from '../GetStartedNav/GetStartedNav'
import Content from './Content/Content'

function FirstStepOne() {
  return (
    <Fragment>
      <GetStartedNav />
      <Content />
      <GeneralFooter borderTop='1px solid #e6e6e6' backgroundColor='#f3f3f3' />
    </Fragment>
  )
}

export default FirstStepOne
