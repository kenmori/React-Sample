import {AppDispatcher} from '../dispatcher/AppDispatcher';
import {SenApiClient} from '../utils/SenApiClient';
import {SenConstants} from '../constants/SenConstants';


 export var SenAction = {
     init(condition) {
         AppDispatcher.dispatch({
             actionType: SenConstants.DISPATCH_INIT,
             condition
         });
     },
     getSen(senPosition, condition) {
        AppDispatcher.dispatch({
            actionType: SenConstants.DISPATCH_LOAD_OVERLAY,
            condition
        });
        SenApiClient.get(senPosition, condition, this._getSuccess, this._getFailure);
    },

    _getSuccess(condition, result) {
        AppDispatcher.dispatch({
            actionType: SenConstants.DISPATCH_GET_SUCCESS,
            condition: condition,
            payload: result
        });
    },

    _getFailure(condition, result, status) {
        AppDispatcher.dispatch({
            actionType: SenConstants.DISPATCH_GET_FAILURE,
            condition: condition,
            payload: result,
            status: status
        });
    }
};
