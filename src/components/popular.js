import React from "react";
import ReactDOM from "react-dom";

import Movie from "./movie";

export default class Popular extends React.Component{
    constructor(props){
        super(props);
        this.state = {api:this.props.api};
        this.load = this.load.bind(this);
        this.wait = "";
    };
    load(){
        if(this.props.api.popular.results === undefined){
            this.props.api.getPopularMovie();
        }
        else{
            return this.props.api.popular.results.map(
                    (obj,ind)=><Movie obj={obj}
                                      key={ind}
                                      api={this.props.api}/>
                    )
        };
    };
    componentWillMount(){
        this.wait = "wait"
    };
    componentDidMount(){
        setInterval(()=>{if(this.props.api.popular.results !== undefined){
            this.wait = "done";
            this.setState({api:this.props.api});
        }},500);
    };
    render(){
        return(
            <div className={this.wait} >
                <div className="data" >
                    {this.load()}
                </div>
            </div>
            )
    };
};