//render movies <div class="btm_padding_30px col-12 col-sm-6 col-md-3 col-lg-2 col-xl-2" style="display:flex">
const renderMovie = (movie) => {
	return `<div class="movie_card style_1">
                    <div class=" bg_grey clearfix" style=" flex: 1;">
					<div class="postergrid clearfix">
                            <div class="grid">
                                <figure class="effect-jazz mb-0" title="${movie.original_title}">
                                    <a href="movie-details.html?id=${movie.id}" target="_blank"><img
                                            src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" class="w-100 img-responsive" alt="poster"></a>
                                </figure>
                            </div>
                        </div>
                        
                        <div class="p-2">
                            <div class="p-0">
								<b class="card_movie_title"><a href="movie-details.html?id=${movie.id}" target="_blank" title="${movie.original_title}"><span style="color:white">${movie.movieIndex}.</span> ${movie.original_title}</a></b>
                            </div>
                            <div class="p-1"><p class="mb-0"><em>Release Date</em><br>${ new Date(movie.release_date).toLocaleString('default', { month: 'short', day: "numeric",year: "numeric" })}</p></div>
                            <div class="p-1"><span class="col_rating"> <i class="fa fa-star"></i> ${movie.vote_average}</span><a href="https://www.themoviedb.org/movie" target="_blank"> (Tmdb) </a></div>
                            <div class="p-1"><p class="mb-0"> ${movie.vote_count} Votes</p></div>
                        </div>
                    </div>
                </div>`;
}

const renderTvShow = (tvShow) => {
	return `<div class="movie_card style_1">
                    <div class=" bg_grey clearfix" style=" flex: 1;">
					<div class="postergrid clearfix">
                            <div class="grid">
                                <figure class="effect-jazz mb-0" title="${tvShow.name}">
                                    <a href="tv-show-details.html?id=${tvShow.id}" target="_blank"><img
                                            src="https://image.tmdb.org/t/p/w300/${tvShow.poster_path}" class="w-100 img-responsive" alt="poster"></a>
                                </figure>
                            </div>
                        </div>
                        
                        <div class="p-2">
                            <div class="p-0">
								<b class="card_movie_title"><a href="tv-show-details.html?id=${tvShow.id}" target="_blank" title="${tvShow.name}"><span style="color:white">${tvShow.movieIndex}.</span> ${tvShow.name}</a></b>
                            </div>
                            <div class="p-1"><p class="mb-0"><em>Release Date</em><br>${new Date(tvShow.first_air_date).toLocaleString('default', { month: 'short', day: "numeric", year: "numeric" })}</p></div>
                            <div class="p-1"><span class="col_rating"> <i class="fa fa-star"></i> ${tvShow.vote_average}</span><a href="https://www.themoviedb.org/movie" target="_blank"> (Tmdb) </a></div>
                            <div class="p-1"><p class="mb-0"> ${tvShow.vote_count} Votes</p></div>
                        </div>
                    </div>
                </div>`;
}


//renders landing page  banner
const homePageBannerLeftSide = () => { 
    return ``;
}
const homePageBannerRightSide = (movie) => {
  return `<div class="popular_2i row" id="0">
					<div class="col-12">
						<div class="popular_2i1 row">
							<div class="col-md-4 col-4">
								<div class="popular_2i1lm position-relative clearfix">
									<div class="popular_2i1lm1 clearfix">
										<div class="grid">
											<figure class="effect-jazz mb-0">
												<a href="#"><img src="img/18.jpg" class="w-100" alt="img25"></a>
											</figure>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-8 col-8">
								<div class="popular_2i1r">
									<h6><a class="col_red" href="#">Semp Porta</a></h6>
									<h6>Action, Thriller</h6>
									<h6> Imdb 8.2 <span class="ms-2"><i class="fa fa-star col_red me-1"></i></span>
										Year : 2022 <span class="ms-2">Runtime: 1h 49m</span></h6>
									<h6 class="mb-0"><a class="buttont" href="#"> More Info - Trailer</a></h6>
								</div>
							</div>
						</div>
					</div>
				</div>`
}