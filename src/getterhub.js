export class GetterHub{
    constructor(access){
        this.access = access;
        this.popular = {};
        this.details = {};
        this.credits = {};
        this.upcoming = {};
        this.movie = {};
        this.saveMovie = this.saveMovie.bind(this);
        this.savePopular = this.savePopular.bind(this);
        this.saveDetails = this.saveDetails.bind(this);
        this.saveCredits = this.saveCredits.bind(this);
        this.saveUpcoming = this.saveUpcoming.bind(this);
    };
    getPopularMovie(id="",param = ""){
        let urn = `/movie/popular`;
        this.access.accessGet(urn, this.savePopular, id, param);
    };
    getUpcomingMovie(id="",param = ""){
        let urn = `/movie/upcoming`;
        this.access.accessGet(urn, this.saveUpcoming, id, param);
    };
    getMovieDetails(id="",param = ""){
        let urn = `/movie/`;
        this.access.accessGet(urn, this.saveDetails, id, param);
    };
    getMovieCredits(id="",param = ""){
        let urn = `/movie/`;
        this.access.accessGet(urn, this.saveCredits, id, param);
    };
    searchMovie(id="",param = ""){
        let urn = `/search/movie`;
        this.access.accessGet(urn, this.saveMovie, id, param);
    };
    saveMovie(data){
        this.movie = data;
    };
    saveCredits(data){
        this.credits = data;
    };
    saveDetails(data){
        this.details = data;
    };
    savePopular(data){
        this.popular = data;
    };
    saveUpcoming(data){
        this.upcoming = data;
    };
};