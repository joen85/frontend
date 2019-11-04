import React from 'react'
import {
  Container,
  Header,
  Item,
} from 'semantic-ui-react'
import style from 'style/style'
import { SampleList } from 'components'
import axios from  'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as listActions from 'modules/list'

/** [리스트 컨테이너] */

class ListContiner extends React.Component {
    
  //생성자
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  //렌더링 이후 실행되는 함수
  componentDidMount() {
    this.handleGetList();
  }

  //저장된 리스트 조회
  handleGetList = () => {
    const { ListAction } = this.props;

    axios({
      url:"/sample",
      method:"get",
      headers: { "Pragma": 'no-cache'}  
    })
    .then( (response) => {
      if (response == null){
          console.log('response is null!');
      }else {
          //조회한 데이터 store에 셋팅
          ListAction.setList(response.data);
      }
    }).catch(function(error) {
      console.log(error.response);
    });
  }
  //화면 그리기
  render() {
      const { list } = this.props;
      return (
          <div>
          <Header as='h3' content='Sample Contents' style={style.h3_list} textAlign='center' />
          <Container style={style.container_list}>
              <Item.Group divided>
                  <SampleList list={list}></SampleList>
              </Item.Group>
          </Container>
        
        </div>
      )
  }
}

//connect(mapStateToProps, mapDispatchToProps)(Component)
//Store와 Reducer를 연결시킬 수 있도록 만들어진 Component가 반환된다
export default connect(
  (state) => ({ //Store가 가진 state를 어떻게 props와 연동할 지 정한다
      list: state.list.get('list'),
  })
  , (dispatch) => ({  //Reducer에 action을 알리는 함수 dispatch를 어떻게 props와 연동할 지 정한다
      ListAction : bindActionCreators(listActions, dispatch)
  })
)(ListContiner);  //위 두가지가 적용된 props를 받을 Component를 정한다
