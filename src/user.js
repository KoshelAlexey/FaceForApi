
export class User{
    constructor(name = "jastUser"){
        this.name = name;
        this._apiKey = "";
    };
    get apiKey(){
        return this._apiKey;
    };
    set apiKey(a){
        if(this._apiKey === ""){
            this._apiKey = `?api_key=${a}`;
        };
    };
};
