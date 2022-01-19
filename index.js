import _ from 'lodash';
import printMe from './print.js';

let o = { 
  carId: 123,
  getId: function() {
      console.log(this);
      return this.carId;
  }
};
console.log( o.getId() );
