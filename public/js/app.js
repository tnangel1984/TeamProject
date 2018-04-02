const app = angular.module('MoviesApp', []);

app.controller('MainController', ['$http' , function($http) {

  this.formData = {};
  this.index;

  this.getMovies = () => {
    $http({
      method: 'GET',
      url: '/movies',
    }).then(response => {
      this.movies = response.data;
    }, error => {
      console.error(error)
    });
  }

  this.addMovie = () => {
    $http({
      method: 'POST',
      url: '/movies',
      data: {
        title: this.formData.title,
        madeBy: this.formData.madeBy
      }
    }).then(response => {
      this.getMovies()
      this.formData = {};
      console.log(response);
    })
  }

  this.editMovie = (movie) => {
    $http({
      method: 'PUT',
      url: '/movies/' + movie._id,
      data: {
        title: this.newTitle,
        madeBy: this.newMadeBy
      }
    }).then(response => {
      this.getMovies();
      this.index = null;
    })
  }

  this.deleteMovie = (movie) => {
    $http({
      method: 'DELETE',
      url: '/movies/'+ movie._id
    }).then(response => {
      console.log(response);
      this.getMovies()
    })
  }

  this.getMovies()

}]);
