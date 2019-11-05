import React from 'react';
import greyImage from 'public/assets/img/grey-image.png';
import { Item } from 'semantic-ui-react'
import style from 'style/style'

/** [리스트 컴포넌트 - 반복영역] */

const MItemList = ({list}) => {

    return (
      
            <Table.Body>
              {list.map((object ,i) => (      
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
        )
   

}

export default MItemList;