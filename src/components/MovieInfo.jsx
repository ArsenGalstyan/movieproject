import React, { Component } from 'react'
import { withRouter } from 'react-router'
import style from '../css/MovieInfo.module.css'

class MovieInfo extends Component {
    constructor(props){
        super(props);

        this.goToMoviePage = this.goToMoviePage.bind(this);
    }

    goToMoviePage() {
        this.props.history.push(`/movie/${this.props.id}`)
    }

    render() {
        return (
            <div onClick={this.goToMoviePage} className={style.movies}>
                <img src={this.props.img} className={style.nkar}/>
                <p className={style.text}>{this.props.name}</p>
            </div>
        )
    }
}

export default withRouter(MovieInfo)