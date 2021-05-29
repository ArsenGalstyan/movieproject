import React, { Component, useState } from 'react'
import style from '../css/main.module.css'
import Searchbar from '../components/Searchbar'
import {zapros,GET_MOVIES,GET_IMAGE} from '../provider/lib'
import MovieInfo from '../components/MovieInfo'

// export default class main extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             movie: []
//         }

//         this.getvalue = this.getvalue.bind(this)
//     }

//     async getvalue(inputvalue){
//         const data = await zapros(GET_MOVIES(inputvalue))
//         this.setState({movie:data.results})
//         console.log(this.state.movie);
//     }
//     render() {
//         return (
//             <div className={style.main}>
//                 <header>
//                     <h1>search</h1>
//                     <Searchbar getvalue={this.getvalue}/>
//                 </header>
//                 <div className="content">
//                     {
//                         this.state.movie.filter(movie=>movie.backdrop_path != null).map((el,i)=>{
                           
//                             return <MovieInfo id={el.id} img={GET_IMAGE(el.backdrop_path)} name={el.original_title}/>
//                         })
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

export default function Main(props){

    const [ movie , setmovie ] = useState([])
 
 async  function getvalue(inputvalue){
        const data = await zapros(GET_MOVIES(inputvalue))
        setmovie(data.results)
        console.log(movie);
    }

          return (
                    <div className={style.main}>
                        <header>
                            <h1>search</h1>
                            <Searchbar getvalue={getvalue}/>
                        </header>
                        <div className="content">
                            {
                                movie.filter(movie=>movie.backdrop_path != null).map((el,i)=>{
                                    return <MovieInfo id={el.id} img={GET_IMAGE(el.backdrop_path)} name={el.original_title}/>
                                })
                            }
                        </div>
                    </div>
                )

}