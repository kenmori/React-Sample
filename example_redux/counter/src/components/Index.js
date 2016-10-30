import React, {Component} from 'react'
import { Link } from 'react-router'


export default class Index extends Component {
    render(){
        return (
                <div>
                    <div><Link to='/counter'>counter</Link></div>
                    <div><Link to='/input'>input</Link></div>
                </div>
        )
    }
}
