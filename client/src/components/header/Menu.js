import React from 'react';
import MenuOptions from './MenuOptions';
import MenuMobile from './MenuMobile';


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaWidth: false
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }
  
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({mediaWidth: window.innerWidth <= 750});
  }

  render() {
    const mediaWidth = this.state.mediaWidth;

    return (
      <div>
        {mediaWidth ? <MenuMobile /> : 
          <MenuOptions 
            showAll={this.props.showAll}
            showModal={this.props.showModal} 
          />
        }
      </div>
    );
  }
}

export default Menu;
