export default class BaseConstants {
	constructor(prefix) {
		console.log('prefix');
		this.DISPATCH_INIT			= prefix + '_' + 'init';
		this.DISPATCH_CHANGE_STATE	= prefix + '_' + 'change_state';
		this.DISPATCH_GET_SUCCESS	= prefix + '_' + 'get_success';
		this.DISPATCH_GET_FAILURE	= prefix + '_' + 'get_failure';
		this.DISPATCH_POST_SUCCESS	= prefix + '_' + 'post_success';
		this.DISPATCH_POST_FAILURE	= prefix + '_' + 'post_failure';
		this.DISPATCH_LOAD_OVERLAY	= prefix + '_' + 'loading_overlay';
		this.DISPATCH_LOAD_MORE		= prefix + '_' + 'loading_more';
		// state key
		this.STATE_KEY_LOADER	= 'loader';
		this.STATE_KEY_GET		= 'get';
		this.STATE_KEY_POST 	= 'post';
		// ローダータイプ
		// ローディングCSS名
		this.LOADER_CLASS_NONE		= '';
		this.LOADER_CLASS_OVERLAY	= 'overlay';
		this.LOADER_CLASS_MORE		= 'more';
    }
}
