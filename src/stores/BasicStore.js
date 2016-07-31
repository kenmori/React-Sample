import EventEmitter from './EventEmitter';
import BaseConstants from '../constants/BaseConstants';

export class BaseStore extends EventEmitter {

	constructor(props) {
		super(props);
	}
	//dataを受け取って実行する
	emitChangeState(key) {
		this.emit(key);
	}
　//keyがhandlerのメソッドをcallするインデックスに登録する
	addChangeStateListener(key, callback) {
		this.on(key, callback);
	}

	removeChangeStateListener(key, callback) {
		this.removeListener(key, callback);
	}

  getState() {
			//ここのthis.stateは？どこが保有している？？
      return this.state;
  }
}
