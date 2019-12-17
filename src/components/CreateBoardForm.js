import React from 'react'
import PropTypes from 'prop-types'

class CreatedBoardForm extends React.Component {
    state = {
        title: '',
        background: '#80ccff'
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const board = {
            title: this.state.title,
            background: this.state.background,
            createAt: new Date(),
            user: 'abc123'
        }
        if(board.title && board.background){
            this.props.createNewBoard(board)
        }
    }

    
    render() {
        return (
            <form 
                className="create-board-wrapper"
                onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nom du Tableau"
                    onChange={(e) => this.setState({ title: e.target.value })}
                />
                <select name="background"
                onChange={(e) => this.setState({ background: e.target.value })}
                >
                    <option value="80ccff">Bleu</option>
                    <option value="80ffaa">Vert</option>
                    <option value="f94a1e">Rouge</option>
                    <option value="ffb3ff">Rose</option>
                    <option value="bf00ff">Violet</option>
                    <option value="ffad33">Orange</option>
                </select>
                <button type="submit">Créez nouveau tableau</button>
            </form>
        )
    }
}

CreatedBoardForm.propTypes = {
    createNewBoard: PropTypes.func.isRequired
}

export default CreatedBoardForm