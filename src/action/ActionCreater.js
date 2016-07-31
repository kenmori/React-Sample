import { AppDispatcher } from '../dispatcher/AppDispatcher';
import { ListApiClient } from '../utils/ListApiClient';
import { ListConstants } from '../constants/ListConstants';

/**
 * Action class
 */
export var ListAction = {

  // init(condition) {
  //   AppDispatcher.dispatch({
  //     actionType: ListConstants.DISPATCH_INIT,
  //     condition
  //   });
  // },
  //
  // getList(watash_id, condition) {
  //   // Top view loading image  befor API call
  //   AppDispatcher.dispatch({
  //     actionType: ListConstants.DISPATCH_LOAD_OVERLAY,
  //     condition
  //   });
  //   // ListAPI(GET)call
  //   ListApiClient.get(watash_id, condition, this._getSuccess, this._getFailure);
  // },
  //
  // // when success ListAPI(GET) callback
  // _getSuccess(condition, result) {
  //   AppDispatcher.dispatch({
  //     actionType: ListConstants.DISPATCH_GET_SUCCESS,
  //     condition: condition,
  //     payload: result
  //   });
  // },
  //
  // // when fall ListAPI(GET) callback
  // _getFailure(condition, result, status) {
  //   AppDispatcher.dispatch({
  //     actionType: ListConstants.DISPATCH_GET_FAILURE,
  //     condition: condition,
  //     payload: result,
  //     status: status
  //   });
  // }
};
