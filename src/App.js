import React from 'react'
import Card from './styles/Card'


class App extends React.Component {
    state = {
        margin : '0px',
        width : '400px',
        padding : 'p-4'
    }
    handleOnMouseEnter = () => {
        this.setState({margin : `${Math.floor(Math.random() * 500)}px`})
    }
    render() {
        let title = '30 days of React'
        return (
            <div>
                <Card class = {this.state.padding} style = {{width : this.state.width ,margin : this.state.margin}} onMouseEnter = {this.handleOnMouseEnter} title={title} />
            </div>
        )
    }

}




export default App