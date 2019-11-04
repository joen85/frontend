import React from 'react'
import {
  Header,
  Segment
} from 'semantic-ui-react'
import style from 'style/style'

/** [헤더 컴포넌트] */

const MainHeader = () => (
    <div>
        <Segment inverted color='teal'>
        <Header as='h1' content='Green Connect' style={style.h1_mainheader} textAlign='center' />
        <Header as='h2' content='with JJH' style={style.h2_mainheader} textAlign='center' />
        </Segment>
    </div>
)

export default MainHeader