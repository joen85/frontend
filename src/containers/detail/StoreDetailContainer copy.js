import React from 'react'
import { Segment, Header, Icon, Image, Message, Table  } from 'semantic-ui-react'
import axios from  'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as detailActions from 'modules/detail'
import { GooleMap, withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

function Map(){
  return(
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.421532, lng: -75.697189}}
    />
  );
}

class StoreDetailContainer extends React.Component {

  //렌더링 이후 실행되는 함수
  componentDidMount() {
    this.handleGetStoreDetail();
  }

  handleClick = (e) => {    
    // 화면이동
    const clickUrl =  e.currentTarget.getAttribute("data-url");
    this.props.history.push(clickUrl);
  }

  //저장된 리스트 조회
  handleGetStoreDetail = () => {
    const param = window.location.pathname.replace('/detail/', '');
    const { DetailAction } = this.props;
    axios({
      //url: process.env.API_URL +"/api/customer/stores/"+param+"?lat=37.264054942277696&lng=127.47453904514336",
      url: "http://116.120.58.40:9090/api/customer/stores/"+param+"?lat=37.264054942277696&lng=127.47453904514336",
      method:"get",
      headers: { "Pragma": 'no-cache' }  
    })
    .then( (response) => {
     
      if (response == null){
          console.log('response is null!');
      }else {
          //조회한 데이터 store에 셋팅
          console.log(response.data.storeList)
          console.log(response.data.menuList)
          console.log(response.data.fileList)
          DetailAction.setStore(response.data.storeList);
          DetailAction.setMenu(response.data.menuList);
          DetailAction.setFile(response.data.fileList);
      }
    }).catch(function(error) {
      console.log(error.response);
    });
  }
//<Image src={object.mainImage} wrapped ui={false} as='a' onClick={handleClick} data-url={'/detail/'+object.storeSeq} />
  render() {
    const WrappedMap = withScriptjs(withGoogleMap(Map))
    const { storeList, menuList, fileList } = this.props;
    const { handleClick} = this;
    return (
      <div>
      <div> 
      <Segment textAlign='center'>
          <Header as='h2' icon textAlign='center'>
              <Icon name='shop' />
              {storeList[0].storeName}
              <Header.Subheader>
              {storeList[0].storeAddr} ({storeList[0].distance})
              </Header.Subheader>
          </Header>
          <Header as='h4' textAlign='center'>
            <Header.Content><Icon name='clock'/>{storeList[0].storeStTm}시 ~ {storeList[0].storeEdTm}시</Header.Content> 
            <Header.Subheader><Icon name='phone'/>{storeList[0].storePhone}</Header.Subheader>
          </Header>       

          <Image.Group size='large'>
          {fileList.map((object ,i) => (      
            <Image centered  src={object.url} />
          ))}
          </Image.Group>

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
                  <div class="ui vertical animated button" tabindex="0"  onClick={handleClick} data-url={'/mitem/'+object.storeSeq} >
                    <div class="hidden content">Shop</div>
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
        <div style={{ width: "50vw", height: "100vh"}}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: "100%"}} />}
          containerElement={<div style={{ height: "100%"}} />}
          mapElement={<div style={{ height: "100%"}} />}
        />
      </div>
      </div>

      
    )
  }
}

StoreDetailContainer.defaultProps = {
  menuList:[
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
    ],
  storeList:[
    {
    "storeSeq": 363,
    "storeName": "롯데슈퍼 이천점",
    "storeRegiNum": "777-77-77777",
    "storeAddr": "경기 이천시 부발읍 경충대로 2269",
    "storeAddrDtl": "롯데슈퍼",
    "distance": "0.33 km",
    "storeLat": "37.261054942277696",
    "storeLng": "127.47453904514336",
    "storePhone": "031-226-2828",
    "storeStTm": "8",
    "storeEdTm": "0",
    "url": null,
    "addrGu": "이천시",
    "addrDong": "부발읍 신하리",
    "addrGuDong": "이천시 부발읍 신하리"
    }
  ],
  fileList:[
    {
    "storeSeq": 363,
    "fileSeq": 1308,
    "fileTpCd": "M",
    "order": 1,
    "url": "http://116.120.58.40:8090/20191021/STORE_PIC11571653620756.jpg",
    "title": null,
    "link": null,
    "source": null,
    "cclType": null,
    "createDt": "2019-10-21 19:27:00",
    "updateDt": "2019-10-21 19:27:00"
    },
    {
    "storeSeq": 363,
    "fileSeq": 1309,
    "fileTpCd": "S",
    "order": 2,
    "url": "http://116.120.58.40:8090/20191021/STORE_PIC21571653620772.jpg",
    "title": null,
    "link": null,
    "source": null,
    "cclType": null,
    "createDt": "2019-10-21 19:27:00",
    "updateDt": "2019-10-21 19:27:00"
    }
    ]
};

export default connect(
  (state) => ({ 
      storeList: state.detail.get('storeList'),
      menuList: state.detail.get('menuList'),
      fileList: state.detail.get('fileList')
  })
  , (dispatch) => ({ 
      DetailAction : bindActionCreators(detailActions, dispatch)
  })
)(StoreDetailContainer); 