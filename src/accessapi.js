export class AccessApi{
    constructor(user){
        this.user = user;
        this._url = "https://api.themoviedb.org/3";
    };
    get url(){
        return this._url;
    };
    accessGet(urn,callback,id="",param = ""){
        fetch(this._url+urn+id+this.user.apiKey+param, {method:"get"})
            .then(
                (response)=> {
                    if (response.status === 404){
                        alert(`Response failed. Please try again leter. Status Code: ${response.status}`);
                        return;
                    }
                    else{
                        response.json()
                            .then((data)=> {
                            callback(data);
                        });

                    }
                }
            )

            .catch(function(err) {
                console.log('Fetch Error :', err);
            });
    };
    accessPost(urn,callback,id="",param = ""){
        fetch(this._url+urn+id+this.user.apiKey+param, {method:"post"})
            .then(
                (response)=> {
                    if (response.status === 404) {
                        alert(`Response failed. Please try again leter. Status Code: ${response.status}`);
                        return;
                    }
                    else{
                        response.json()
                            .then((data)=> {
                            callback(data);
                        });

                    }
                }
            )

            .catch(function(err) {
                console.log('Fetch Error :', err);
            });
    };
};

