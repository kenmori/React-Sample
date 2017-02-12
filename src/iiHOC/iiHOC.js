import React from 'react';
import ReactDOM from 'react-dom'

function ExtraPropsComponent(WrappedComponent){
    return class iiHOC extends WrappedComponent{
        constructor(props){
            super(props)
            this.state = {fields: {}}
        }
        render() {
            let r = React.createElement(WrappedComponent, Object.assign({}, this.props, {
                    fields: 'fafa',
            }));
            let i = this.refs.test;
            console.log(r);
            return r
        }
    }
}


class Example extends React.Component {
    constructor(props) {
        super(props)
    }
    method() {}
    render() {
        return (
            <form>
            <input type="email" name="nemail"/>
            <input type="text" name="something" required/>
        </form>
    )
}
}

export const faf = ExtraPropsComponent(Example);
