import React from "react";
import ReactDOM from "react-dom";
import Popup from "./popup";

export default class Movie extends React.Component{
    constructor(props){
        super(props);
        this.state = {obj:this.props.obj};
        this.on = this.on.bind(this);
        this.over = this.over.bind(this);
        this.out = this.out.bind(this);
        this.style = {};
        this.wait = "";
    };
    on(){
        document.getElementById("pop").style.visibility = "visible";
        this.props.api.getMovieDetails(this.props.obj.id);
        this.props.api.getMovieCredits(this.props.obj.id+"/credits");
        ReactDOM.render(<Popup obj={this.props.obj} api={this.props.api}/>, document.getElementById('pop'));
    };
    over(){
        this.style={backgroundColor:"lightblue",
            border:"2px solid lightblue",
            opacity:"0.8"};
    };
    out(){
        this.style = {border:"2px solid transparent"};
    };
    render(){
        return(
            <div className="movie" id="movie" onClick={this.on} onMouseOver={this.over} onMouseOut={this.out} style={this.style}>
                <div className="poster" >
                    <img src={`https://image.tmdb.org/t/p/w154/${this.props.obj.poster_path}?api_key=${this.props.api.access.user.apiKey}`}/>
                </div>
                <div className="filmname">{this.props.obj.title}</div>
            </div>
            )
    };
};