import React from 'react'
import {
  Container,
  Header,
  Item,
  Icon, Table, Segment
} from 'semantic-ui-react'
import style from 'style/style'
//import { SampleList } from 'components'
//import axios from  'axios'
//import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
//import * as listActions from 'modules/list'


/** [마이리스트 컨테이너] */

class MyContainer extends React.Component {
 
  //화면 그리기
  render() {
//      const { list } = this.props;
      return (
          <div>
          <Segment textAlign='center'>
            <Header as='h2' icon textAlign='center'>
                <Icon name='paw' /> 예약내역
            </Header>
            <Table celled textAlign='center'>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>예약일시</Table.HeaderCell>
                    <Table.HeaderCell>업체명</Table.HeaderCell>
                    <Table.HeaderCell>전화번호</Table.HeaderCell>
                    <Table.HeaderCell>물품내역</Table.HeaderCell>
                    <Table.HeaderCell>찜확인</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                <Table.Row>
                    <Table.Cell>2019년10월9일 20:00</Table.Cell>
                    <Table.Cell>주공할인마트</Table.Cell>
                    <Table.Cell>031-123-1234</Table.Cell>
                    <Table.Cell>계란(2),대파(1)</Table.Cell>
                    <Table.Cell><Icon name='heart outline' color='teal'/></Table.Cell>
                </Table.Row>  
                <Table.Row>
                    <Table.Cell>2019년10월10일 09:03</Table.Cell>
                    <Table.Cell>우리마트</Table.Cell>
                    <Table.Cell>031-000-9999</Table.Cell>
                    <Table.Cell>우유(2)</Table.Cell>
                    <Table.Cell><Icon name='heart outline' color='teal'/></Table.Cell>
                </Table.Row>                  
                </Table.Body>
            </Table>    
          </Segment>
          </div>
      )
  }
}

export default MyContainer