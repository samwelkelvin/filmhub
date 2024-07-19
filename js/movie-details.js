"use strict";

//render general movie information
const showMovieDetails = (obj) => {
            document.getElementById("releaseDate").insertAdjacentHTML("beforeend", ` Release  ${new Date(obj.release_date).toLocaleString('default', { month: 'short', day: "numeric", year: "numeric" })}`);
            document.getElementById("budget").insertAdjacentHTML("beforeend",`Budget ${obj.budget}`);
            document.getElementById("duration").insertAdjacentHTML("beforeend", ` Duration  ${obj.runtime} min`);
            document.getElementById("rating").insertAdjacentHTML("beforeend", ` ${obj.vote_average}`);

            document.getElementById("overview").innerText = obj.overview;
            document.getElementById("tagline").innerText = obj.tagline;
            document.getElementById("total_votes").insertAdjacentHTML("beforeend", ` ${obj.vote_count} Votes`);
            
            const title = document.getElementById("title");
            title.innerText = `${obj.title}  - ${obj.status}`;
            title.href = obj.homepage
            const homepagelink = document.getElementById("homepagelink").href = obj.homepage
            document.getElementById("posterimg").src = `https://image.tmdb.org/t/p/original/${obj.poster_path}`;
}

//render languages used in the movie
const showMovieSpokenLanguages = (languages) => {

    const languagesEl = document.getElementById("languages");

    if(languages){
        for(let el in languages){
                languagesEl.insertAdjacentHTML("beforeend", ` <li class="d-inline-block"><a class="d-block" href="javascript:void(0)">${languages[el].name}</a>
                        </li>`)
        }
    }else{
        languagesEl.insertAdjacentHTML("beforeend", ` <li class="d-inline-block"><a class="d-block" href="javascript:void(0)">Unknown</a>
                        </li>`)
    }
}

//render movie production companies
const showProductionCompanies = (companies) => {

    const productionCompaniesEl = document.getElementById("productionCompanies");

    if(companies){
        for(let element of companies){
            productionCompaniesEl.insertAdjacentHTML("beforeend",
            `<div class="blog_1r1i row">
                        <div class="col-md-4 col-4">
                            <div class="blog_1r1il">
                                <div class="grid clearfix">
                                    <figure class="effect-jazz mb-0" style="background-color: white;color:black">
                                        <a href="blog_detail.html"><img src="https://image.tmdb.org/t/p/w300/${element.logo_path}" class="w-100" alt="Company Logo" style="color:black"></a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 ps-0 col-8">
                            <div class="blog_1r1ir">
                                <h6 class="mb-1"><a class="col_red" href="blog_detail.html">${element.name}</a></h6>
                                <p class="mb-0">Origin Country - ${element.origin_country}</p>
                            </div>
                        </div>
                    </div>
                    <hr>`)
        }
    }else{
        genreEl.insertAdjacentHTML(
            "beforeend",
            `<li class="d-inline-block"><a class="d-block" href="javascript:void(0)">Not specified</a></li>`
        )
    }
    
}

//render movie production countries
const showProductionCountries = (countries) => {
    const productionCountries = document.getElementById("productionCountries");
    if(countries){
        for(let element of countries){
                productionCountries.insertAdjacentHTML("beforeend", `<li class="d-inline-block"><a class="d-block" href="javascript:void(0)">
                ${element.name}</a>
        </li>`)
        }
    }else{
        productionCountries.insertAdjacentHTML("beforeend", `<li class="d-inline-block"><a class="d-block" href="javascript:void(0)">Unspecified</a>
        </li>`)
    }
}

//render movie genres
const showgenres = (genres) => {

    const genreEl = document.getElementById("genres");
    if(genres){
        for( let element of genres){
            genreEl.insertAdjacentHTML(
                "beforeend", 
                `<li class="d-inline-block"><a class="d-block" href="javascript:void(0)">${element.name}</a></li>`
            )
        }
    }else{
        genreEl.insertAdjacentHTML(
            "beforeend",
            `<li class="d-inline-block"><a class="d-block" href="javascript:void(0)">Unknown</a></li>`
        )
    }
}

//render movie teasers
const showMovieVideos = (obj) => {

    const videoEl = document.getElementById("show_movie_Videos");

    console.log(videoEl);
    
    if (obj) {
        let count = 1;
            for (let element of obj) {
                if (element.site === "YouTube" && count <= 10) {
                    count += 1;
                    videoEl.insertAdjacentHTML(
                        "beforeend",
                            `<div class="col-md-4" style="margin-bottom:20px">
                                    <div class="serv_pg1i bg_dark p-4 pt-3">
                                     <iframe type="text/html" style="background-color: #000;" width="100%" height="100%"
                                    src="https://www.youtube.com/embed/${element.key}?autoplay=0&amp;origin=https%3A%2F%2Fwww.themoviedb.org&amp;hl=en&amp;modestbranding=1&amp;fs=1&amp;autohide=1"
                                    frameborder="0" allowfullscreen="" __idm_id__="1015809"></iframe>

                                        <!--<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${element.key}"
                                        allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>-->
                                    </div>
                                </div>`
                    )
                }
            }
    } else {
        videoEl.insertAdjacentHTML(
            "beforeend",
            `<li class="d-inline-block"><a class="d-block" href="javascript:void(0)">Unknown</a></li>`
        )
    }
    
}
