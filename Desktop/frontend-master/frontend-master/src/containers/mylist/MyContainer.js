import React from 'react'
import {
  Container,
  Header,
  Item,
  Icon, Table, Segment
} from 'semantic-ui-react'
import style from 'style/style'
//import { SampleList } from 'components'
import axios from  'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as listActions from 'modules/mylist'


/** [마이리스트 컨테이너] */

class MyContainer extends React.Component {
  
  //렌더링 이후 실행되는 함수
  componentDidMount() {
    console.log("componentDidMount");
    this.handleGetMyList();
  }

  //저장된 리스트 조회
  handleGetMyList = () => {
    console.log("handleGetMyList")
    const { MyAction } = this.props;
    axios({
      url: "http://116.120.58.40:9090/api/customer/users/reservationList",
      method:"get",
      headers: { "Pragma": 'no-cache' }  
    })
    .then( (response) => {
      console.log(response)
      if (response == null){
          console.log('response is null!');
      }else {
          //조회한 데이터 store에 셋팅
          console.log(response.data.myList)
          MyAction.setMylist(response.data.myList);
      }
    }).catch(function(error) {
      console.log(error.response);
    });
  }

  //화면 그리기
  render() {
      const { mylist } = this.props;

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

//export default MyContainer


export default connect(
  (state) => ({ 
      myList: state.mylist.get('myList')
  })
  , (dispatch) => ({ 
      MyAction : bindActionCreators(myActions, dispatch)
  })
)(MyContainer); 