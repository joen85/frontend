import React from 'react'
import { MainMenu } from 'components'
import { withRouter } from 'react-router-dom'

class MenuContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home"
    }
  }

  handleItemClick = (e, { name }) => {
    // 상태 설정
    this.setState({ activeItem: name });
    
    // 화면이동
    const clickUrl =  e.currentTarget.getAttribute("data-url");
    this.props.history.push(clickUrl);
  }

  render() {
    const { activeItem } =  this.state;
    const { handleItemClick } = this;
    return (
      <MainMenu activeItem={activeItem} handleItemClick={handleItemClick} /> 
    )
  }
}

export default withRouter(MenuContainer)