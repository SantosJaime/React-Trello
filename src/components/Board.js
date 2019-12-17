import React from 'react'
import List from './List'
import data from '../sampleData'

class Board extends React.Component {
    state = {
        currentLists: []
    }
    componentDidMount() {
        this.setState({ currentLists: data.lists })
    }
    createNewList = () => {
        const list = {
            id: Math.random(),
            title: "Ma fantastique liste",
            board: 300,
            createdAt: new Date()
        }
        this.setState({ currentLists: [...this.state.currentLists, list] })
    }
    render() {
        return (
            <div className="lists-wrapper">
                
                {Object.keys(this.state.currentLists).map(key => (
                    <List 
                    key={this.state.currentLists[key].id} 
                    list={this.state.currentLists[key]}
                    />
                ))}
                <button onClick={this.createNewList}>Nouvelle Liste</button>
            </div>
        )
    }
}

export default Board