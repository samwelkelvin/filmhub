"use strict"

//DECLARE SOME VARIABLES

const API_KEY = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTVkNzgxOTU4MzUxN2E4ODQwYzAwMzIwZTg5ZDRlNiIsIm5iZiI6MTcyMDY4NTk1Ni4wMzg5Nywic3ViIjoiNjY4ZjkxNjY4OGIwM2Q1MmE4NGE4NjQ0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.EAiclaAGjDpu0cBCoHJMhjY-_LKTUIh5DWz64wGaXXY`;

const OPTIONS = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
};
let id = 11
const BASE_URL = `https://api.themoviedb.org/3/`
const API_KEY_PARAM = `api_key=${API_KEY}`
const POPULAR_MOVIES_PATH = `movie/popular`
const MOVIE_TOP_RATED = `movie/top_rated`;
const SEARCH_MOVIES_PATH = `search/movie`
const MOVIE_PLAYING_NOW = `movie/now_playing`;
const UPCOMING_MOVIES = `movie/upcoming`;
const TRENDING_MOVIES = `trending/movie/day`
const STREAMING_PROVIDERS = `watch/providers/movie`;
const MOVIE_GENRES = `genre/movie/list`;
const MOVIES_DISCOVER = `discover/movie`;

const TRENDING_TV_SHOWS = `trending/tv/day`;

const MOVIE_DETAILS_PATH = `movie/${id}`
const MOVIE_CREDITS_PATH = `movie/${id}/credits`
const MOVIE_RECOMMENDATIONS_PATH = `movie/${id}/recommendations`
const MOVIE_REVIEWS_PATH = `movie/${id}/reviews`
const MOVIE_VIDEOS_PATH = `movie/${id}/videos`
const MOVIE_IMAGES_PATH = `movie/${id}/images`

const TV_DISCOVER = `discover/tv`;
const POPULAR_TV_PATH = `tv/popular`
const TV_AIRING_TODAY = `tv/airing_today`;
const TV_SHOWS_ON_AIR = `tv/on_the_air`;
const TV_TOP_RATED = `tv/top_rated`;
const SEARCH_TV_PATH = `search/tv`

const TV_DETAILS_PATH = `tv/${id}`
const TV_CREDITS_PATH = `tv/${id}/credits`
const TV_RECOMMENDATIONS_PATH = `tv/${id}/recommendations`
const TV_REVIEWS_PATH = `tv/${id}/reviews`
const TV_VIDEOS_PATH = `tv/${id}/videos`
const TV_IMAGES_PATH = `tv/${id}/images`
const MOVIE_IMAGE_URL = `https://image.tmdb.org/t/p/original/`;


//get genres
const getGenre = async() => {
  return  await fetch(`${BASE_URL}${MOVIE_GENRES}`,OPTIONS)
        .then(response => response.json())
        .then(data => {

            if (data.genres) 
                return {status:true,resp:data.genres}
             else 
                 return {status:false,resp:data}
        })
        .catch(error => {
            console.log(error);
            return { status: false, resp: "Error" }
        } );
}

//get single movie details
const getSingleMovieDetails = async (id) => {
  return  await fetch(`${BASE_URL}movie/${id}`,OPTIONS)
        .then(response => response.json())
        .then(data => {

            if (data.id) 
                return {status:true,resp:data}
             else 
                 return {status:false,resp:data}
        })
        .catch(error => {
            console.log(error);
            return { status: false, resp: "Error" }
        } );
}

//get popular tv shows
const getPopularTvShows = async (pageNo) => {
  console.log(pageNo);
  return  await fetch(`${BASE_URL}${POPULAR_TV_PATH}?language=en&page=${pageNo}`,OPTIONS)
        .then(response => response.json())
        .then(data => {

            if (data.results) 
                return {status:true,resp:data.results}
             else 
                 return {status:false,resp:data}
        })
        .catch(error => {
            console.log(error);
            return { status: false, resp: "Error" }
        });
}

//get popular movies
const getPopularMovies = async (pageNo) => {
  console.log(pageNo);
  return  await fetch(`${BASE_URL}${POPULAR_MOVIES_PATH}?language=en&page=${pageNo}`,OPTIONS)
        .then(response => response.json())
        .then(data => {

            if (data.results) 
                return {status:true,resp:data.results}
             else 
                 return {status:false,resp:data}
        })
        .catch(error => {
            console.log(error);
            return { status: false, resp: "Error" }
        });
}

//get popular tv shows
const getTvShowsAiringToday = async (pageNo) => {
  console.log(pageNo);
  return  await fetch(`${BASE_URL}${TV_AIRING_TODAY}?language=en&page=${pageNo}`,OPTIONS)
        .then(response => response.json())
        .then(data => {

            if (data.results) 
                return {status:true,resp:data.results}
             else 
                 return {status:false,resp:data}
        })
        .catch(error => {
            console.log(error);
            return { status: false, resp: "Error" }
        });
}

//get popular tv shows
const getTvShowsOnAir = async (pageNo) => {
  console.log(pageNo);
  return  await fetch(`${BASE_URL}${TV_SHOWS_ON_AIR}?language=en&page=${pageNo}`,OPTIONS)
        .then(response => response.json())
        .then(data => {

            if (data.results) 
                return {status:true,resp:data.results}
             else 
                 return {status:false,resp:data}
        })
        .catch(error => {
            console.log(error);
            return { status: false, resp: "Error" }
        });
}

//get top rated movies
const getTopRatedMovies = async (pageNo = 1) => {

 return  await fetch(`${BASE_URL}${MOVIE_TOP_RATED}?language=en&page=${pageNo}`,OPTIONS)
        .then(response => response.json())
        .then(data => {

            if (data.results) 
                return {status:true,resp:data.results}
             else 
                 return {status:false,resp:data}
        })
        .catch(error => {
            console.log(error);
            return { status: false, resp: error }
        });
    
    
}


//get top rated TV SHOWS
const getTopRatedTvShows = async (pageNo = 1) => {

 return  await fetch(`${BASE_URL}${TV_TOP_RATED}?language=en&page=${pageNo}`,OPTIONS)
        .then(response => response.json())
        .then(data => {

            if (data.results) 
                return {status:true,resp:data.results}
             else 
                 return {status:false,resp:data}
        })
        .catch(error => {
            console.log(error);
            return { status: false, resp: error }
        });
    
    
}


//get  movies by genres (Discover)
const discoverMovies = async (pageNo = 1, searchQuery) => {
    
    const query = (searchQuery && searchQuery !== '') ? `${searchQuery}` : '';

 return  await fetch(`${BASE_URL}${MOVIES_DISCOVER}?page=${pageNo}&with_genres=${query}`,OPTIONS)
        .then(response => response.json())
     .then(data => {
            
         console.log(data);

            if (data.results) 
                return {status:true,resp:data.results,currentPage:data.page}
             else 
                 return {status:false,resp:data}
        })
        .catch(error => {
            console.log(error);
            return { status: false, resp: error }
        });
}


//get  tv shows by genres (Discover)
const discoverTvShows = async (pageNo = 1, searchQuery) => {
    
    const query = (searchQuery && searchQuery !== '') ? `${searchQuery}` : '';

    console.log(query);

 return  await fetch(`${BASE_URL}${TV_DISCOVER}?page=${pageNo}&with_genres=${query}`,OPTIONS)
        .then(response => response.json())
     .then(data => {
            
         console.log(data);

            if (data.results) 
                return {status:true,resp:data.results,currentPage:data.page}
             else 
                 return {status:false,resp:data}
        })
        .catch(error => {
            console.log(error);
            return { status: false, resp: error }
        });
}

//search for movie
const searchForMovie = async (moviename) => {

 return  await fetch(`${BASE_URL}${SEARCH_MOVIES_PATH}?query=${moviename}`,OPTIONS)
        .then(response => response.json())
        .then(data => {

            if (data.results) 
                return {status:true,resp:data.results}
             else 
                 return {status:false,resp:data}
        })
        .catch(error => {
            console.log(error);
            return { status: false, resp: error }
        });
}

//search for tv show
const searchForTvShow = async (tvshow) => {

 return  await fetch(`${BASE_URL}${SEARCH_TV_PATH}?query=${tvshow}`,OPTIONS)
        .then(response => response.json())
        .then(data => {

            if (data.results) 
                return {status:true,resp:data.results}
             else 
                 return {status:false,resp:data}
        })
        .catch(error => {
            console.log(error);
            return { status: false, resp: error }
        });
}



//get playing now (movies currently in theatres)
const getMoviesInTheatre = async (pageNo) => {
    console.log(pageNo);
  return  await fetch(`${BASE_URL}${MOVIE_PLAYING_NOW}?language=en&page=${pageNo}`,OPTIONS)
        .then(response => response.json())
        .then(data => {

            if (data.results) 
                return {status:true,resp:data.results}
             else 
                 return {status:false,resp:data}
        })
        .catch(error => {
            console.log(error);
            return { status: false, resp: "Error" }
        });
}


//Upcoming movies (movies being released soon)
const getUpcomingMovies = async (pageNo = 1) => {
    
 return  await fetch(`${BASE_URL}${UPCOMING_MOVIES}?language=en&page=${pageNo}`,OPTIONS)
        .then(response => response.json())
        .then(data => {

            if (data.results) 
                return {status:true,resp:data.results}
             else 
                 return {status:false,resp:data}
        })
        .catch(error => {
            console.log(error);
            return { status: false, resp: "Error" }
        });
    
    
}

//get trending movies

const getTrendingMovies = async (pageNo = 1) => {
    
 return  await fetch(`${BASE_URL}${TRENDING_MOVIES}?language=en&page=${pageNo}`,OPTIONS)
        .then(response => response.json())
        .then(data => {

            if (data.results) 
                return {status:true,resp:data.results}
             else 
                 return {status:false,resp:data}
        })
        .catch(error => {
            console.log(error);
            return { status: false, resp: "Error" }
        });
}


const getStreamingProviders = async (pageNo = 1) => {
    
 return  await fetch(`${BASE_URL}${STREAMING_PROVIDERS}?language=en&page=${pageNo}`,OPTIONS)
        .then(response => response.json())
        .then(data => {

            if (data.results) 
                return {status:true,resp:data.results}
             else 
                 return {status:false,resp:data}
        })
        .catch(error => {
            console.log(error);
            return { status: false, resp: "Error" }
        });
}


//get movie videos
const getMovieVideos = async (id) => {

  return  await fetch(`${BASE_URL}movie/${id}/videos`,OPTIONS)
        .then(response => response.json())
        .then(data => {
            if (data.results) 
                return {status:true,resp:data.results}
             else 
                 return {status:false,resp:data}
        })
        .catch(error => {
            console.log(error);
            return { status: false, resp: "Error" }
        });
}

//get movie videos
const getMovieProviders = async (pageNo) => {

  return  await fetch(`${BASE_URL}${STREAMING_PROVIDERS}?language=en&page=${pageNo}`,OPTIONS)
        .then(response => response.json())
        .then(data => {

            if (data.results) 
                return {status:true,resp:data}
             else 
                 return {status:false,resp:data}
        })
        .catch(error => {
            console.log(error);
            return { status: false, resp: "Error" }
        });
}


//get trending tv showa 
const getTrendingTvShows = async (pageNo) => {

  return  await fetch(`${BASE_URL}${TRENDING_TV_SHOWS}?language=en&page=${pageNo}`,OPTIONS)
        .then(response => response.json())
        .then(data => {

            if (data.results) 
                return {status:true,resp:data.results}
             else 
                 return {status:false,resp:data}
        })
        .catch(error => {
            console.log(error);
            return { status: false, resp: "Error" }
        });
}



const getData = async (url) => {
     
    let data;
  await fetch(url,OPTIONS)
        .then(response => response.json())
    .then(json => data = { time: new Date(), value: json });

    return data.value;
}

/*
            async function getData(url,options) {

                let result = "";
                if (cache[url] !== undefined) return cache[url].value;

                await fetch(url, options)
                    .then(response => response.json())
                    .then(json => cache[url] = { time: new Date(), value: json });

                return cache[url].value;
            }

            // Interval to clear cache;
            setInterval(function () {
                if (Object.keys(cache).length > 0) {
                    let currentTime = new Date();
                    Object.keys(cache).forEach(key => {
                        let seconds = currentTime - cache[key].time;

                        if (seconds > 10000) {
                            delete cache[key];
                            console.log(`${key}'s cache deleted`)
                        }
                    })
                }
            }, 8000);

            */

