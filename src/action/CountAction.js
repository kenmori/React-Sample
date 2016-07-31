import {AppDispatcher} from '../dispatcher/AppDispatcher';
import {CountConstants} from '../constants/CountConstants';


export const CountAction = {
  getApi : function (){
    AppDispatcher.dispatch({
      actionType: CountConstants.STATE_KEY_GET
    });
  },
  onChangeDown : function (){
    AppDispatcher.dispatch({
      actionType: CountConstants.DISPATCH_CHANGE_DOWN
    });
  },
  onChangeReset : function (){
    AppDispatcher.dispatch({
      actionType: CountConstants.DISPATCH_CHANGE_RESET
    });
  }
};
