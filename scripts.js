$( document ).ready(function() {
    $.ajax({
        url: "https://smileschool-api.hbtn.info/quotes",
    })
    .done((res) => {
        for (let i = 0; i < res.length; i++) {
            let contentQuotes = `
            <div class="carousel-item ${i == 0 ? "active" : ""}">
                <div class="row mx-auto align-items-center">
                    <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                        <img
                            src="${res[i].pic_url}"
                            class="d-block align-self-center"
                            alt="Carousel Pic 1"
                        />
                    </div>
                    <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                        <div class="quote-text">
                            <p class="text-white">
                            ${res[i].text}
                            </p>
                            <h4 class="text-white font-weight-bold">${res[i].name}</h4>
                            <span class="text-white">${res[i].title}</span>
                        </div>
                    </div>
                </div>
            </div>
            `;
            $(".quotes .carousel-inner").append(contentQuotes);
            $(".loader").hide();
        }    
    })
});

$( document ).ready(function() {
    $.ajax({
        url: "https://smileschool-api.hbtn.info/popular-tutorials",
    })
    .done((res) => {
      console.log(res);
        for (let i = 0; i < res.length; i++) {
            let $stars = "";
            for (let j = 0; j < res[i].star; j++) {
                $stars += `<img src="images/star_on.png" alt="star on" width="15px"/>`;
            }
            for (let j = 0; j < 5 - res[i].star; j++) {
                $stars += `<img src="images/star_off.png" alt="star off" width="15px"/>`;
            }
            let $contentVideos = `
               <div class="col-12 col-sm-6 col-md-3" id="${response[i].id}">
                  <div class="carousel-item ${res[i].id > 0 && res[i].id < 5 ? "active" : ""}"></div>
                    <div class="card">
                      <img
                        src="${res[i].thumb_url}"
                        class="card-img-top"
                        alt="Video thumbnail"
                      />
                      <div class="card-img-overlay text-center">
                        <img
                          src="images/play.png"
                          alt="Play"
                          width="64px"
                          class="align-self-center play-overlay"
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title font-weight-bold">
                        ${res[i].title}
                        </h5>
                        <p class="card-text text-muted">
                        ${res[i]["sub-title"]}
                        </p>
                        <div class="creator d-flex align-items-center">
                          <img
                            src="${res[i].author_pic_url}"
                            alt="Creator of
                            Video"
                            width="30px"
                            class="rounded-circle"
                          />
                          <h6 class="pl-3 m-0 main-color">${res[i].author}</h6>
                        </div>
                        <div class="info pt-3 d-flex justify-content-between">
                          <div class="rating">
                          ${$stars}
                          </div>
                          <span class="main-color">${res[i].duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
           `;
           $(".popular .carousel-inner").append($contentVideos);
           $(".loader").hide();
        }
    })
})
          

