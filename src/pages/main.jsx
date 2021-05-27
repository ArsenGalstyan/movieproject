import React, { Component } from 'react'
import style from '../css/main.module.css'
import Searchbar from '../components/Searchbar'
import {zapros,GET_MOVIES,GET_IMAGE} from '../provider/lib'
import Movies from '../components/Movies'

export default class main extends Component {
    constructor(props){
        super(props)

        this.state = {
            movie: []
        }

        this.getvalue = this.getvalue.bind(this)
    }

    async getvalue(inputvalue){
        const data = await zapros(GET_MOVIES(inputvalue))
        this.setState({movie:data.results})
        console.log(this.state.movie);
    }
    render() {
        console.log(this.state.movie);
        return (
            <div className={style.main}>
                <header>
                    <h1>search</h1>
                    <Searchbar getvalue={this.getvalue}/>
                </header>
                <div className="content">
                    {
                        this.state.movie.map((el,i)=>{
                            return <Movies img={GET_IMAGE(el.backdrop_path)} name={el.original_title}/>
                        })
                    }
                </div>
            </div>
        )
    }
}
