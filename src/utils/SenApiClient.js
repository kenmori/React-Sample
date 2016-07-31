import  $ from '../lib/jquery-1.12.3.min';
export var SenApiClient = {
    GET_URL: 'http://localhost:3000/users',
    requests: {},
    get(senPosition, condition, success, failure) {
        var url = this._createUrl(senPosition);
        //APIコール
        this.requests['get' + condition] = $.ajax({
          type: 'GET',
          contentType: 'application/json',
          scriptCharset: 'utf-8',
          url: url
        });

        //結果ハンドリング
        this.requests['get' + condition].done((result) => {
            success(condition, result);
        }).fail((result, status) => {
            failure(result, status);
        });
    },

    //クエリを付け足してapiコール用のurlを作成
    _createUrl(senPosition) {
      return this.GET_URL + '/' + senPosition;
    }
};
