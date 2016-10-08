import { takeEvery, delay, takeEvery } from 'redux-saga'
import { put, call, fork } from 'redux-saga/effects'

export function * helloSaga() {
    console.log('Hello Sagas!')
}

//Saga
export function* incrementAsync(){
    yield call(delay, 1000)//Promiseが帰ってくるまで遅らせている call(delay, 1000)とdelay(1000)の違い.delayはnextが渡ってくる前に計算される
    //callerはコード実行中のミドルウェアである可能性があります。また、返されたジェネレータを超えるジェネレータ関数と反復処理を実行するテストコードもまたミドルウェアである可能性がある。
    //callerが取得したPromiseは何なのかをテストする必要がある(??)

    yield put({ type: 'INCREMENT' })//sotoreへのactionをdispatch
}
//yield objects are a kind of instruction to be interpreted by the middleware
//Saga is suspended until the Promise returned by delay resolves, whitch will happen after 1 second

export function* watchIncrementAsync() {
    yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
    //INCREMENT_ASYNCのactionがdispathcされることに対してListenerし、される毎にincrementAsyncを実行する
}


//the task that will perform the asynchronous action:
export function* fetchData(action) {
    try {
        const data = yield call(Api.fetchUser, action.payload.url)
        yield put({type: 'FETCH_SUCCEEDED', data})
    } catch (error) {
        yield put({type: 'FETCH_FAILED', error})
    }
}


function * watchFetchData() {
    yiel* takeEvery('FETCH_REQUESTED', fetchData)
}


//Sagaを一回でスタートさせる必要がある
//single entry point

export default function * rootSaga() {
    yield [//結果を格納する
        helloSaga(),
        watchIncrementAsync()//結果として生じるGeneratorは並列でスタートする
    ]
}



