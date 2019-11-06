import React from 'react'
import {
  Container,
  Header,
  Item,
  Table,
  Segment,
} from 'semantic-ui-react'
import style from 'style/style'
import { MItemList } from 'components'
import axios from  'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as DetailActions from 'modules/detail'


/** [리스트 컨테이너] */

class MItemContainer extends React.Component {
    
  //생성자
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  //렌더링 이후 실행되는 함수
  componentDidMount() {
    //this.handleGetList();
  }

  //저장된 리스트 조회
  handleGetList = () => {
    const { DetailAction } = this.props;

    // const param = window.location.pathname.replace('/detail/', '');
    // const { DetailAction } = this.props;
    // axios({
    //   url: "http://116.120.58.40:9090/api/customer/stores/"+param+"?lat=37.264054942277696&lng=127.47453904514336",
    //   method:"get",
    //   headers: { "Pragma": 'no-cache' } 
////api/customer/users/reservation/{storeSeq}
//업체 예약 하기
    var param = "363";
    axios({
      url:"http://116.120.58.40:9090/api/customer/users/reservation/"+param+"?lat=37.264054942277696&lng=127.47453904514336",
      method:"get",
      headers: { "Pragma": 'no-cache'}  
    })
    .then( (response) => {
      if (response == null){
          console.log('response is null!');
      }else {
          //조회한 데이터 store에 셋팅
          console.log(response.data);
          DetailAction.setList(response.data.menuList);
      }
    }).catch(function(error) {
      console.log(error.response);
    });
  }
  //화면 그리기
  render() {
      const { menuList } = 	this.props;
      return (
        <div> 
        <div>
        <Segment textAlign='center'>
            <Table celled textAlign='center'>
                <Table.Header>
                <Table.Row>                  
                    <Table.HeaderCell>품목</Table.HeaderCell>
                    <Table.HeaderCell>남은수량</Table.HeaderCell>
                    <Table.HeaderCell>1개당가격</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
  
                <Table.Body>
                {menuList.map((object ,i) => (      
                  <Table.Row key={object.menuSeq} >
                    <Table.Cell >{object.menuName}</Table.Cell>
                    <Table.Cell>{object.menuCnt}</Table.Cell>
                    <Table.Cell>{object.menuAmt}
                    <div class="ui vertical animated button" tabindex="0" >
                      <div class="hidden content">예약</div>
                      <div class="visible content">
                        <i class="shop icon"  ></i>
                      </div>
                    </div>
                           
                    </Table.Cell>
                    
                  </Table.Row>
                    
                ))}                  
                </Table.Body>
                 
            </Table>        
        </Segment>
        </div> 
        </div>
      )
  }
}

//connect(mapStateToProps, mapDispatchToProps)(Component)
//Store와 Reducer를 연결시킬 수 있도록 만들어진 Component가 반환된다
export default connect(
  (state) => ({ //Store가 가진 state를 어떻게 props와 연동할 지 정한다
      // list: state.list.get('list'),
      menuList: state.detail.get('menuList')
  })
  , (dispatch) => ({  //Reducer에 action을 알리는 함수 dispatch를 어떻게 props와 연동할 지 정한다
      DetailAction : bindActionCreators(DetailActions, dispatch)
  })
)(MItemContainer);  //위 두가지가 적용된 props를 받을 Component를 정한다

MItemContainer.defaultProps = {
  MItemList:[
    {
    "storeSeq": 363,
    "menuSeq": "2093",
    "menuName": "계란",
    "menuAmt": "300",
    "menuCnt": 52
    },
    {
    "storeSeq": 363,
    "menuSeq": "2094",
    "menuName": "파",
    "menuAmt": "900",
    "menuCnt": 15
    }
    ]
  }