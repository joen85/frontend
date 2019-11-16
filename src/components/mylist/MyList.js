import React from 'react';
import greyImage from 'public/assets/img/grey-image.png';
import { Item } from 'semantic-ui-react'
import style from 'style/style'

/** [리스트 컴포넌트 - 반복영역] */

const MyList = ({mylist}) => {
  /* 같은형태의 component는 .map을 이용해서 반복적으로 그린다 */
  /* .map 사용시 주의사항 가장 parent tag에 unique key가 반드시 들어가야함  */
    return (
      
            <Table.Body>
              {mylist.map((object ,i) => (      
                <Table.Row key={object.resvSeq} >
                  <Table.Cell>{object.resvDt}</Table.Cell>
                  <Table.Cell>{object.storeName}</Table.Cell>
                  <Table.Cell>{object.resvPhone}</Table.Cell>
                  <Table.Cell>{object.menuName}</Table.Cell>                  
                </Table.Row>
                  
              ))}                  
              </Table.Body>
        )
   

}

export default MyList;
