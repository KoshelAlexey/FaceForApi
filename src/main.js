import React from "react";
import ReactDOM from "react-dom";

import ReactMain from "./components/reactmain";

import {User} from "./user";
import {AccessApi} from "./accessapi";
import {GetterHub} from "./getterhub";

import "./css/components.css";

let user = new User();
let access =new AccessApi(user);
let getterhub = new GetterHub(access);


ReactDOM.render(<ReactMain id="main" api={getterhub}/>, document.getElementById('body'));
