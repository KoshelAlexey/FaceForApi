import React from "react";
import ReactDOM from "react-dom";

import Popular from "./popular";
import Upcoming from "./upcoming";
import SearchResult from "./searchresult";

export default class Center extends React.Component{
    constructor(props){
        super(props);
        this.state = {api:this.props.api};
        this.state.inpval = "";
        this.state.inpvalkey = "";
        this.onChange = this.onChange.bind(this);
        this.onChangekey = this.onChangekey.bind(this);
        this.clear = this.clear.bind(this);
        this.set = this.set.bind(this);
    };
    onChange(event){
        this.setState({inpval: event.target.value});
    };
    onChangekey(event){
        this.setState({inpvalkey: event.target.value});
    };
    set(){
       this.props.api.access.user.apiKey = this.state.inpvalkey;
       this.setState({inpvalkey: ""});
    };
    clear(){
        this.setState({inpval: ""});
    };
    search(){
        setInterval(()=>{if(this.state.inpval !== ""){this.props.api.searchMovie("",`&query=${this.state.inpval}`)}},500);
    };
    render(){
        {this.search()}
        return(
                <div >
                    <div className="row search">
                        <form id="key">
                           <input type="search"
                                  className="input"
                                  value={this.state.inpvalkey}
                                  onChange={this.onChangekey}
                                  placeholder="Type api key"/>
                           <button type="button" onClick={this.set}>Set key</button>
                        </form>
                        <form>
                           <input type="search"
                                  className="input"
                                  value={this.state.inpval}
                                  onChange={this.onChange}
                                  placeholder="Type text"/>
                           <button type="button" onClick={this.clear}>Search</button>
                        </form>
                    </div>
                    <div className="row ">
                        <div className="col-lg-2 col-md-2 col-sm-2"></div>
                        <div className="col-lg-8 col-md-8 col-sm-8 content">
                            <span className="h">Search Results</span>
                            <SearchResult api={this.props.api}/>
                            <hr style={{ backgroundColor:"red",height:"3px"}}/>
                            <span className="h">Popular</span>
                            <Popular api={this.props.api}/>
                            <hr style={{ backgroundColor:"red",height:"3px"}}/>
                            <span className="h">Upcoming</span>
                            <Upcoming api={this.props.api}/>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    </div>
                </div>

            )
    };
};