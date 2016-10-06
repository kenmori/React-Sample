import test from 'tape';
import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { incrementAsync } from './sagas'

test('incrementAsync Saga test', (assert) => {
    const gen = incrementAsync()

    assert.deepEqual(
        gen.next().value,
        call(delay, 1000),
        'incrementAsync should return a Promise that will resolve fter 1 second'
    )
    //gen.next() // => { done: boolean, value: any } value field contains the yielded expression i.e. the result of the expression after the yield

    //yield delay(1000)
    //yield put({type: 'INCREMENT'})
    //So if we invoke the next method of the generator 3 times consecutively we get the following results:
    // gen.next() // => { done: false, value: <result of calling delay(1000)> }//yield expressio result を返す
    // gen.next() // => { done: false, value: <result of calling put({type: 'INCREMENT'})> }//yield expressio result を返す
    // gen.next() // => { done: true, value: undefined }//何も返さない


    assert.deepEqual(
        gen.next().value,
        put({type: 'INCREMENT'}),
        'incrementAsync Saga must dispatch an INCREMENT action'
    )

    assert.deepEqual(
        gen.next(),
        { done: true, value: undefined },
        'incrementAsync Saga must be done'
    )

    assert.end()

})