/* 
first code of API

var http= new XMLHttpRequest;
http.open('GET','https://forkify-api.herokuapp.com/api/search?q=pizza')
http.send();
http.addEventListener('readystatechange',function()
{
    if(http.readyState==4)
    {
        console.log(JSON.parse(http.response));
    }
})

*/

//==============================================================================
/*
var http=new XMLHttpRequest;
http.open('GET','https://jsonplaceholder.typicode.com/posts');
http.send();
var addData=[];
http.addEventListener('readystatechange',function()
{
    if(http.readyState==4)
    {
        addData=JSON.parse(http.response);
        showData();
    }
})

function showData()
{
    for(var i=0;i<addData.length;i++)
    {
        console.log(addData[i].body);
    }
}
*/
//================================================================================

var addValue = [];

function traveler(q) {
    var http = new XMLHttpRequest;
    http.open('GET', `https://forkify-api.herokuapp.com/api/search?q=${q}`);
    http.send();

    http.addEventListener('readystatechange', function () {
        if (http.readyState == 4) {
            addValue = JSON.parse(http.response).recipes;
            showData();
        }
    })

}
traveler('salad');

function showData() {
    var box = ``;
    for (var i = 0; i < addValue.length; i++) {
        box += `
        <div class="col-md-4">
        <div class="item">
        <img w-100 height="200" src="${addValue[i].image_url}" alt="pasta">
            <h3>${addValue[i].title}</h3>
            <p>${addValue[i].publisher}</p>
            <a target="_blank" href="${addValue[i].source_url}" class="btn btn-warning my-2" id="visit">Visit</a>
        </div>
    </div>
        `
    }
    document.getElementById('repeated').innerHTML = box;
}

var searchInput =document.getElementById('searchInput');
var searchButton =document.getElementById('searchButton');
 
searchButton.addEventListener('click',function()
{
    traveler(searchInput.value);
})

 nightOn.addEventListener('click',function()
{
  nightOn.classList.replace('d-flex','d-none');
  nightOff.classList.replace('d-none','d-flex');
  bodybg.classList.add('bg-dark');
  bodybg.classList.add('text-white')
  searchButton.classList.replace('btn-outline-dark','btn-outline-warning')
})

nightOff.addEventListener('click',function()
{
    nightOn.classList.replace('d-none','d-flex');
    nightOff.classList.replace('d-flex','d-none');
    bodybg.classList.remove('bg-dark')
    bodybg.classList.remove('text-white')
    searchButton.classList.replace('btn-outline-warning','btn-outline-dark')
})

//==================================================================================

/*

var addValue = [];

async function traveler(q) {

    var x = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${q}`);
    addValue = await x.json().recipes;
    showData();
}

traveler('salad');

function showData() {
    var box = ``;
    for (var i = 0; i < addValue.length; i++) {
        box += `
        <div class="col-md-4">
        <div class="item">
        <img w-100 height="200" src="${addValue[i].image_url}" alt="pasta">
            <h3>${addValue[i].title}</h3>
            <p>${addValue[i].publisher}</p>
            <a target="_blank" href="${addValue[i].source_url}" class="btn btn-warning my-2" id="visit">Visit</a>
        </div>
    </div>
        `
    }
    document.getElementById('repeated').innerHTML = box;
}

var searchInput =document.getElementById('searchInput');
var searchButton =document.getElementById('searchButton');
 
searchButton.addEventListener('click',function()
{
    traveler(searchInput.value);
})

 nightOn.addEventListener('click',function()
{
  nightOn.classList.replace('d-flex','d-none');
  nightOff.classList.replace('d-none','d-flex');
  bodybg.classList.add('bg-dark');
  bodybg.classList.add('text-white')
  searchButton.classList.replace('btn-outline-dark','btn-outline-warning')
})

nightOff.addEventListener('click',function()
{
    nightOn.classList.replace('d-none','d-flex');
    nightOff.classList.replace('d-flex','d-none');
    bodybg.classList.remove('bg-dark')
    bodybg.classList.remove('text-white')
    searchButton.classList.replace('btn-outline-warning','btn-outline-dark')
})
*/