<script>

if (window.location.href == 'https://www.maguro.one/') {
    index_page_init()
}

var FEED = '';
var FEED_loaded = false;
var HTML_loaded = false;
var ELEMENTS = [];
var months = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

// Get post feed, parse, fill some data
function LoadTheArchive(TotalFeed) {
    // Loads the feed, parses it, does stuff with it
    let fallback = document.getElementById('fallbackdiv');
    if ("entry" in TotalFeed.feed) {
        let PostEntries = TotalFeed.feed.entry.length;
        console.log('Received ' + PostEntries + ' post entries');

        for (let PostNum = 0; PostNum < PostEntries; PostNum++) { //go through posts
            let ThisPost = TotalFeed.feed.entry[PostNum];

            // get data about the post
            let title = ThisPost.title.$t;
            let text = ThisPost.content.$t;
            let date = ThisPost.published.$t.substring(0, 10);
            date = months[Number(date.substring(5, 7))] + ' ' + date.substring(8, 11) + ', ' + date.substring(0, 4);
            let start = text.search('<p');
            let extract = text.substr(start, text.length - start);
            let finish = extract.search('</p>');
            extract = extract.substr(0, finish+4).replace(/\s+/g, ' ');

            // Find url
            let url;
            for (let LinkNum = 0; LinkNum < ThisPost.link.length; LinkNum++) { //find the url
                if (ThisPost.link[LinkNum].rel == "alternate") {
                    url = ThisPost.link[LinkNum].href;
                    break
                }
            }
            // Find fallback image
            let img = '';
            if ("media$thumbnail" in ThisPost) {
                img = ThisPost.media$thumbnail.url;
            }

            // Check if this post is present on this page already
            let found = false;
            for (let i = 0; i < Object.keys(ELEMENTS).length; i++) {
                let item_url = Object.keys(ELEMENTS)[i];

                if (url == item_url) {
                    found = true;
                    if (extract != '>') {
                        ELEMENTS[Object.keys(ELEMENTS)[i]].innerHTML = ELEMENTS[Object.keys(ELEMENTS)[i]].innerHTML + '<div class="desc">' + extract + '</div>';
                        ELEMENTS[Object.keys(ELEMENTS)[i]].getElementsByClassName('postdate')[0].innerHTML = date
                    }
                    break
                }
            }
            // If not, create a fallback
            if (!found) {
                console.log(title + ' NOT in elements ' + url);
                img = img.replace('s72-c', 's675');
                fallback.innerHTML = fallback.innerHTML + '<a class="itemlink" style="display: block" href="' + url + '"><p class="postdate">' + date + '</p><div style="background-image: url(\'' + img + '\')"><p>'  + '</p></div>' + '<div class="desc">' + extract + '</p>' + '</a>';
            }
        }

        // Make the rest visible as well
        for (let i = 0; i < Object.keys(ELEMENTS).length; i++) {
            ELEMENTS[Object.keys(ELEMENTS)[i]].style.display = 'block';
        }

        // change those that do not have descriptions
        let items = document.getElementsByClassName('itemlink');
        for (let i = 0; i < items.length; i++) {
            let desc = items[i].getElementsByClassName('desc');
            let div = items[i].getElementsByTagName('div')[0]
            if (desc.length == 0) {
                items[i].classList.add('small');
                items[i].style.display = 'inline-block';
            }
        }
    }
}

function get_shown_posts() {
    // Finds all posts and corresponding elements on this page                          
    let items = document.getElementsByClassName('itemlink');
    let out = {};
    for (let i = 0; i < items.length; i++) {
        let url = items[i].href;
        out[url] = items[i];
    }
    return out
}

function index_page_init(){
    // LOAD HTML
    let request = new XMLHttpRequest();
    request.open('GET', 'https://raw.githubusercontent.com/FluffyMaguro/HTML_files/main/html/all_posts.html', true);
    request.send(null);
    request.onreadystatechange = function () {
        
    if (request.readyState === 4 && request.status === 200) {
        document.getElementsByClassName("blog-posts")[0].innerHTML = request.response;
        ELEMENTS = get_shown_posts();
        HTML_loaded = true;
        console.log('HTML loaded..');
        checkLoaded();
        }
    }
}

function SaveArchive(response) {
    FEED = response;
    FEED_loaded = true;
    console.log('FEED loaded..');
    checkLoaded();
}

// IF BOTH LOADED
function checkLoaded() {
    if (HTML_loaded && FEED_loaded) {
        LoadTheArchive(FEED)
    }
}

</script>
<script src="https://www.maguro.one/feeds/posts/default?max-results=6&amp;alt=json-in-script&amp;callback=SaveArchive"></script>