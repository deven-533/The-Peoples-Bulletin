console.log("JS Running...")
let apikey = `80febde389ec40ab8f25ecbf3fda5883`;


let newscont = document.getElementById('accordionExample');

console.log(newscont)

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apikey}`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)

        let articles = json.articles;

        let newshtml = "";
        articles.forEach((element) => {
            let news = `<div class="card">
            <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                        ${element["title"]}
                    </button>
                </h2>
            </div>
            
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                ${element["description"]}
 
                <a href="${element.url}">Read More Here</a>
                </div>
               

            </div>
            </div>`;

            newshtml = newshtml + news;



        });
        newscont.innerHTML = newshtml;


    }
    else {
        alert("API Fetch Error")
    }
}
xhr.send();


