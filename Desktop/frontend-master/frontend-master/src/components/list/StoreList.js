import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const StoreList = ({storelist, handleClick}) => {

    return (
        storelist.map((object ,i) => (
            <Card key={object.storeSeq}>
            <Image src={object.mainImage} wrapped ui={false} as='a' onClick={handleClick} data-url={'/detail/'+object.storeSeq} />
            <Card.Content>
              <Card.Header>{object.storeName}</Card.Header>
              <Card.Meta>
                <span className='date'>{object.storeAddr}</span>
              </Card.Meta>
              <Card.Description>
                {object.storeDescription}
              </Card.Description>
            </Card.Content>
            {object.freeYn === "Y" ?
                <Card.Content extra>
                    <Icon name='check' color='green' />
                    무료물품 제공
                </Card.Content>
                :
                <Card.Content extra>
                    <Icon name='spinner' />
                    무료물품 준비중
                </Card.Content>                
            }
          </Card>
        ))
    )
}

export default StoreList