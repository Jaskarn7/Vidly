import React, { Component } from "react";

import { getMovies } from "./../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/Pagination";
import { paginate } from '../utils/paginate';
import ListGroup from "./common/ListGroup";
import { getMovie } from "./../services/fakeMovieService";
import _ from 'lodash';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: null,
    currentPage: 1,
    sortColumn: {path: 'title', order: 'asc'}
  };

  componentDidMount() {
    const genres = [{_id: "-1", name: "All Genres"}, ...getGenres()]
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    this.setState({
      movies: this.state.movies.filter((m) => {
        return m._id != movie._id;
      }),
    });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  onPageChange = page => {
    this.setState({currentPage: page});
  };

  handleGenreSelect = (genre) => {
    this.setState({ currentPage: 1, selectedGenre: genre });
  }

  getPagedData = () => {
    const { movies: allMovies } = this.state;
    const filtered = this.state.selectedGenre && this.state.selectedGenre._id != -1 ? allMovies.filter(m => m.genre._id == this.state.selectedGenre._id) : allMovies;
    const sorted = _.orderBy(filtered, [this.state.sortColumn.path], [this.state.sortColumn.order]);
    const movies = paginate(sorted, this.state.currentPage, 4);
    
    return { totalCount: filtered.length, data: movies};
  }
  
  render() {    
    const { totalCount, data: movies } = this.getPagedData(); 
    
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup 
            selectedItem={this.state.selectedGenre}
            items={this.state.genres}
            onItemSelect={genre => this.handleGenreSelect(genre)}
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} movies in the database. </p>
          <MoviesTable
            movies={movies}
            sortColumn={this.state.sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination itemCount={totalCount} pageSize={4} currentPage={this.state.currentPage} onPageChange={this.onPageChange}/>
        </div>
      </div>
    );
  }
}

export default Movies;
