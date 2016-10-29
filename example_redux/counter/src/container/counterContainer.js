
import { connect } from 'react-redux'
import * as counterAction from '../actionCreaters/counterAction'
import Counter from '../components/Counter'
import { bindActionCreators } from 'redux'



//コンポーネントはここのstateをreduxStoreから更新の購読をする
//返す値はプレーンなobjectでなければならない
//component内でマージされる
//省略した場合購読しない
//ownPropsの値はコンポーネに渡されるpropsとなる
//mapStateToPropsはコンポーネントが新しい値を取得したら実行される(親からのprops変更や
// ownPropsを使った時、に再実行される)
function mapStateToProps(state, ownProps){
    return state
}

//objectか関数を返さないといけない
//もしObjectならその中にActionCreaterと仮定される関数を記入(直接dispatchを実行することができる)
//もしfunctionが渡されたら、dispatchが与えられる
//もし省略されたらデフォルトの実装がコンポーネントの中のpropsにdispatchをインジェクトする
//ownPropsはコンポーネントのpropsにわたされ、値が新しく渡ってくるたび実行される
//return : dispatchProps
function mapDispatchToProps(dispatch, ownProps) {
    return {
        increment : bindActionCreators(counterAction.incrementActionCreator, dispatch),
        decrement: bindActionCreators(counterAction.decrementActionCreator, dispatch)
        }
    }

const ConnectedCounter = connect(mapStateToProps,
    mapDispatchToProps)(Counter)

export default ConnectedCounter

//connect
//reduxのstoreとreactComponentを繋げる
//3番目はmergeProps
//4番目はoption

//渡されたclassComponenntは変更されない
//新しい接続されたコンポーネントを返す
