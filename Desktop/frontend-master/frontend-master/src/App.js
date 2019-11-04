import React from 'react'
import { Segment, Card } from 'semantic-ui-react'
import { StoreList } from 'components'
import axios from  'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as listActions from 'modules/list'

class App extends React.Component {

  //렌더링 이후 실행되는 함수
  componentDidMount() {
    this.handleGetStoreList();
  }

  //저장된 리스트 조회
  handleGetStoreList = () => {
    const { ListAction } = this.props;
    axios({
      url: "http://116.120.58.40:9090/api/customer/main?lat=37.264054942277696&lng=127.47453904514336",
      method:"get",
      headers: { "Pragma": 'no-cache' }  
    })
    .then( (response) => {
     
      if (response == null){
          console.log('response is null!');
      }else {
          //조회한 데이터 store에 셋팅
          ListAction.setList(response.data.storeList);
      }
    }).catch(function(error) {
      console.log(error.response);
    });
  }

  handleClick = (e) => {    
    // 화면이동
    const clickUrl =  e.currentTarget.getAttribute("data-url");
    this.props.history.push(clickUrl);
  }

  render() {
    const { list } = this.props;
    return (
      <div> 
        <Segment>
        <Card.Group centered>        
          <StoreList storelist={list} handleClick={this.handleClick}></StoreList>
        </Card.Group>
        </Segment>  
      </div>
    )
  }
}

App.defaultProps = {
  list : [
    {
      "storeSeq": 363,
      "storeName": "롯데슈퍼 이천점",
      "freeYn": "Y",
      "storeAddr": "경기 이천시 부발읍 경충대로 2269",
      "storeAddrDtl": "롯데슈퍼",
      "mainImage": "http://116.120.58.40:8090/20191021/STORE_PIC11571653620756.jpg",
      "storeStTm": "8",
      "storeEdTm": "0",
      "distance": "0.33 km",
      "distanceVal": "0.33358477883463405",
      "storeLat": "37.261054942277696",
      "storeLng": "127.47453904514336",
      "storeDescription": "이천시 롯데슈퍼 입니다.",
      "addrGu": "이천시",
      "addrDong": "부발읍 신하리",
      "addrGuDong": "이천시 부발읍 신하리"
      }       
  ]
};

export default connect(
  (state) => ({ 
      list: state.list.get('list'),
  })
  , (dispatch) => ({ 
      ListAction : bindActionCreators(listActions, dispatch)
  })
)(App); 
