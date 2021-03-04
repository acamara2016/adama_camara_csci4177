import React from 'react';
import axios from 'axios';

export default class Movie extends React.Component{
    state = {
        movies: []
    }
    componentDidMount(){
        axios.get('https://api-tutorial4.herokuapp.com/movies?title_like=')
        .then(res => {
            const movies = res.data;
            console.log(movies)
            this.setState({movies});
        })
    }
    componentDidUpdate(){
        axios.get('https://api-tutorial4.herokuapp.com/movies?title_like=')
        .then(res => {
            const movies = res.data;
            this.setState({movies});
        })
    }
    render(){
        return(
            <div>
                
                <p>Filtering by {this.props.id}</p>
                <hr/>
                {this.state.movies.map(
                    movies => {
                        if(this.props.id === 'show_id'){
                            if(this.props.q===(movies.show_id).toString())
                                return <div style={{ margin:"10" }} class="card">
                                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <a href="#!">
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{ movies.title}</h5>
                                    <p class="card-text">ID: {movies.show_id}</p>
                                    <p class="card-text">{movies.description}</p>
                                    <a href={"/movie?id="+movies.show_id} class="btn btn-primary">More info</a>
                                </div>
                                <br/>
                            </div>
                            
                        }else if(this.props.id === 'title_like'){
                            if(movies.title.includes(this.props.q))
                                return <div style={{ margin:"10" }} class="card">
                                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <a href="#!">
                                    </a>
                                </div>
                                <div class="card-body">
                                <h5 class="card-title">{ movies.title}</h5>
                                    <p class="card-text">ID: {movies.show_id}</p>
                                    <p class="card-text">{movies.description}</p>
                                    <a href={"/movie?id="+movies.show_id} class="btn btn-primary">More info</a>
                                </div>
                            </div>
                        }else if(this.props.id === 'Release year'){
                            if((movies.release_year).toString()===(this.props.q))
                            return <div style={{ margin:"10" }} class="card">
                            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <a href="#!">
                                </a>
                            </div>
                            <div class="card-body">
                            <h5 class="card-title">{ movies.title}</h5>
                                <p class="card-text">ID: {movies.show_id}</p>
                                <p class="card-text">{movies.description}</p>
                                <a href={"/movie?id="+movies.show_id} class="btn btn-primary">More info</a>
                            </div>
                        </div>
                        }else if(this.props.id === ''){
                            return <div style={{ margin:"10" }} class="card">
                                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <a href="#!">
                                    </a>
                                </div>
                                <div class="card-body">
                                <h5 class="card-title">{ movies.title}</h5>
                                    <p class="card-text">ID: {movies.show_id}</p>
                                    <p class="card-text">{movies.description}</p>
                                    <a href={"/movie?id="+movies.show_id} class="btn btn-primary">More info</a>
                                </div>
                            </div>
                        }

                    }
                    
                )}
                <br/>
            </div>
        )
    }
}