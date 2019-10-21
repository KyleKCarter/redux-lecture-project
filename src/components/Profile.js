import React, {Component} from 'react';
import store, {UPDATE_FAVSHOW} from '../redux/store';

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            username: store.getState().username,
            FavShow: store.getState().FavShow
        };
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({FavShow: store.getState().FavShow})
        })
    }

    handleFavShowChange = (e) => {
        // console.log("Running");
        let action = {
            type: UPDATE_FAVSHOW,
            payload: e.target.value
        };
        // console.log(action)
        store.dispatch(action);
    }

    render() {
        console.log(this.state.FavShow)
        return(
            <div>
                <h1>Welcome, {this.state.username}</h1>
                <input placeholder="Favorite Show" onChange={this.handleFavShowChange}/>
                <input placeholder="Favorite Movie" />
                <input placeholder="Favorite Color" />
                <input placeholder="Favorite Food" />
                <input placeholder="Favorite Band" />
                <h1>Favorite Show: {this.state.FavShow}</h1>
            </div>
        )
    }
}