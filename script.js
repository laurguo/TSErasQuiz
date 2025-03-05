let eras = {
    s1: 0,
    s2: 0,
    s3: 0,
    s4: 0,
    s5: 0,
    s6: 0,
    s7: 0,
    s8: 0,
    s9: 0,
    s10: 0,
    s11: 0,

    1: "Taylor Swift/Debut",
    2: "Fearless",
    3: "Speak Now",
    4: "Red",
    5: "1989",
    6: "Reputation",
    7: "Lover",
    8: "Folklore",
    9: "Evermore",
    10: "Midnights",
    11: "The Tortured Poets Department",

    getEra: function(i) {
        return this[i];
    },

    getScore: function(i) {
        return this["s" + i];
    }
};

let selected = false;

function addPoints(d, f, s, r, n, rep, l, folk, e, m, t) {
    eras.s1 += d;
    eras.s2 += f;
    eras.s3 += s;
    eras.s4 += r;
    eras.s5 += n;
    eras.s6 += rep;
    eras.s7 += l;
    eras.s8 += folk;
    eras.s9 += e;
    eras.s10 += m;
    eras.s11 += t;
}

function selectedA(d, f, s, r, n, rep, l, folk, e, m, t, qnum) {
    if (selected == false) {
        button = document.getElementById("A" + qnum);
        button.style.background = "rgb(150, 88, 201)";
        button.style.color = "lavender";
        addPoints(d, f, s, r, n, rep, l, folk, e, m, t);
    }
    
    selected = true;
}

function selectedB(d, f, s, r, n, rep, l, folk, e, m, t, qnum) {
    if (selected == false) {
        button = document.getElementById("B" + qnum);
        button.style.background = "rgb(150, 88, 201)";
        button.style.color = "lavender";
        addPoints(d, f, s, r, n, rep, l, folk, e, m, t);
    }
    
    selected = true;
}

function selectedC(d, f, s, r, n, rep, l, folk, e, m, t, qnum) {
    if (selected == false) {
        button = document.getElementById("C" + qnum);
        button.style.background = "rgb(150, 88, 201)";
        button.style.color = "lavender";
        addPoints(d, f, s, r, n, rep, l, folk, e, m, t);
    }
    
    selected = true;
}

function selectedD(d, f, s, r, n, rep, l, folk, e, m, t, qnum) {
    if (selected == false) {
        button = document.getElementById("D" + qnum);
        button.style.background = "rgb(150, 88, 201)";
        button.style.color = "lavender";
        addPoints(d, f, s, r, n, rep, l, folk, e, m, t);
    }
    
    selected = true;
}

function getResults() {
    let maxscore = eras.getScore(1);
    let maxEra = "";
    for(let i = 2; i <= 11; i++) {
        if (eras.getScore(i) > maxscore) {
            maxEra = eras.getEra(i);
            maxscore = eras.getScore(i);
        }
    }
    document.getElementById("eraresult").innerHTML = maxEra + "!!";
}

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active');

    // Reset the answer buttons
    selected = false;

    if (pageId == 'results') {
        getResults();
    }
  }