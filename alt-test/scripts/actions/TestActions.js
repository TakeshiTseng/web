'use strict';
import {flux} from '../shared';


class TestActions {
  constructor() {
    this.generateActions([]);
  }
}


export default flux.createActions(TestActions);
