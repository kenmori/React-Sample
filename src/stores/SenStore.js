import {AppDispatcher} from '../dispatcher/AppDispatcher';
import {BasicStore} from './BasicStore';
import {SenConstants} from '../constants/SenConstants';

export class Store extends BasicStore {
    constructor(props){
        super(props);
    }
}

export var SenStore = new Store();


var setSen = (stateKey, condition, payload, hasError, error) => {
    SenStore.state[stateKey + '_' + condition] = {
        payload: payload,
        hasError: hasError,
        error: error || {}
    };
};

var setLoader = (isLoading, loaderCss, condition) => {
    SenStore.state[SenConstants.STATE_KEY_LOADER + "_" + condition] = {
        loaderCss: loaderCss,
        isLoading: isLoading
    };
};

AppDispatcher.register((action) => {
    switch (action.actionType) {
        case SenConstants.DISPATCH_INIT:
            setLoader(true, SenConstants.LOADER_CLASS_OVERLAY, action.condition);
            SenStore.emitChangeState(SenConstants.DISPATCH_CHANGE_STATE);
            break;

        case SenConstants.DISPATCH_LOAD_OVERLAY:
            setLoader(true, SenConstants.LOADER_CLASS_OVERLAY, action.condition);
            SenStore.emitChangeState(SenConstants.DISPATCH_CHANGE_STATE);
            break;

        case SenConstants.DISPATCH_GET_SUCCESS:
            //SenStore.stateキーにオブじぇくととを代入している
            setSen(SenConstants.STATE_KEY_GET, action.condition, action.payload, false);
            setLoader(false, SenConstants.LOADER_CLASS_NONE, action.condition);
            SenStore.emitChangeState(SenConstants.DISPATCH_CHANGE_STATE);
            break;

        case SenConstants.DISPATCH_GET_FAILURE:
            setSen(SenConstants.GET, action.condition, action.error.payload, true, action.error);
            setLoader(false, SenConstants.LOADER_CLASS_NONE, action.condition);
            SenStore.emitChangeState(SenConstants.DISPATCH_CHANGE_STATE);
            break;
    }
});
