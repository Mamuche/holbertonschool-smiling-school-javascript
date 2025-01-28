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
