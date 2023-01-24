import { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cover, title } = this.props;

    return (
      <div className='HomePageCard'>
        <div className='HomePageCard__image'>
          <img
            className='HomePageCard__image--img'
            src={cover}
            alt='Appartement à louer'
          ></img>
        </div>
        <div className='HomePageCard__title'>{title}</div>
      </div>
    );
  }
}
