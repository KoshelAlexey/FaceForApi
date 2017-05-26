import React from "react";
import ReactDOM from "react-dom";

export default class Popup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {api:this.props.api};
        this.off = this.off.bind(this);
        this.wait = "";
        this.genr = "";
        this.casts = "";
    };
    off(e){
        if(e.target.id === "backpop"){
            document.getElementById("pop").style.visibility = "collapse";
        }
    };
    genres(){
        if(this.props.api.details.genres !== undefined){
            let res = "";
            for(let i = 0;i<this.props.api.details.genres.length;i++){
                res += `${this.props.api.details.genres[i].name} `;
            };
            this.genr = res;
        };
    };
    credits(){
        if(this.props.api.credits.cast !== undefined){
            let res = "";
            for(let i = 0;i<5;i++){
                if(this.props.api.credits.cast[i] !== undefined){
                    res += `${this.props.api.credits.cast[i].name}, `;
                }
            };
            this.casts = res;
        };
    };
    componentWillMount(){
        this.wait = "popwait"
    };
    componentDidMount(){
        setInterval(()=>{if(this.props.api.details.id !== undefined){
            this.genres();
            this.credits()
            this.wait = "popdone";
            this.setState({api:this.props.api});
        }},500);
    };
    render(){
        return(
                <div className="backpop" id="backpop" onClick={this.off}>
                    <div className="frontpop">
                        <div id="poster">
                            <img src={`https://image.tmdb.org/t/p/w342/${this.props.obj.poster_path}?api_key=${this.props.api.access.user.apiKey}`}/>
                        </div>
                        <div id="title">{this.props.obj.title}</div>
                        <div id="popularity">
                            <span style={{fontWeight:"bold"}}>Popularity rating:</span> {this.props.api.details.popularity}
                        </div>
                        <div id="genres">
                            <span style={{fontWeight:"bold"}}>Genres:</span> {this.genr}
                        </div>
                        <div id="release">
                            <span style={{fontWeight:"bold"}}>Release date:</span> {this.props.api.details.release_date}
                        </div>
                        <div id="cast">
                            <span style={{fontWeight:"bold"}}>Cast:</span> {this.casts}
                        </div>
                        <div id="over">
                            <span style={{fontWeight:"bold"}}>Overview:</span> <br/>{this.props.api.details.overview}
                        </div>
                    <div  className={this.wait}></div>
                    </div>
                </div>);
    };

};
