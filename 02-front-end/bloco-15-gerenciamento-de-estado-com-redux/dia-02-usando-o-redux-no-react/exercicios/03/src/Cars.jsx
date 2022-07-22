import React from 'react';
import { connect } from 'react-redux';
import { moveCar } from './redux/actionCreators';

import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

class Cars extends React.Component {
  render() {
    const { redCar, blueCar, yellowCar, moveCar } = this.props;
    return (
      <div>
        <div>
          <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
          <button onClick={() => moveCar('red', !redCar)} type="button">move</button>
        </div>
        <div>
          <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
          <button onClick={() => moveCar('blue', !blueCar)} type="button">move</button>
        </div>
        <div>
          <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
          <button onClick={() => moveCar('yellow', !yellowCar)} type="button">move</button>
        </div>
      </div>
    );
  }
}

const estadoParaPropriedades = ({ carReducer: { cars: { red, blue, yellow } } }) => ({
  redCar: red, blueCar: blue, yellowCar: yellow,
});

const dispatchParaPropriedades = (dispatch) => ({
  moveCar: (car, side) => dispatch(moveCar(car, side)),
});

export default connect(estadoParaPropriedades, dispatchParaPropriedades)(Cars);
