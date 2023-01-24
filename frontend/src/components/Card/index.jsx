import { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cover, title } = this.props;

    return (
      <div className='card'>
        <div className='card__image'>
          <img
            className='card__image--img'
            src={cover}
            alt='Appartement à louer'
          ></img>
        </div>
        <div className='card__title'>{title}</div>
      </div>
    );
  }
}
