
let quote = document.getElementById("quote");
let authur_name = document.getElementById("authur_name");
let random_btn = document.getElementById("random_btn");
let icon_btn = document.getElementById("icon");
let icon_btn2 = document.getElementById("icon2");

console.log(icon_btn);

let conntainer = document.getElementById("cont");

const quote_arr = [
    {quotes: "Patience is bitter, but it bears sweet fruit.", authurs: "--Li Gee."}, {quotes: "Good habits result from resisting temptation.", authurs: "--Mave K."},
    {quotes: "They are rich who have true friends.", authurs: "Frank Gena."}, {quotes: "All things are difficult before they are easy.",authurs: "--Oyebola."},
    {quotes: "Try to leave everything a little better than you found it.", authurs: "--Pst. Oyebola."},{quotes: "Never look back except to learn.", authurs: "--Pst Oyebola."},  
    {quotes: "To succeed we need flexibility in this ever changing World.", authurs: "--Oyebola."}, {quotes: "Nobody knows what he can do until he tries.", authurs: "--The Wise Man."},
    {quotes: "In all things it is better to hope than to despair.", authurs: "--a Wise Man."}, {quotes: "He who never fell, never climbed.", authurs: "--Indian adage."},
    {quotes: "Any manager can reduce costs and prices but it takes intelligence to increase profit.", authurs: "--Daramola."}, {quotes: "Trust in the Lord Jesus Christ, not in men.", authurs: "--Esther M."},
    {quotes: "BE WISE: Don't let men rob you, because you love and trust them.", authurs: "--Esther Mopelola Daramola."}, {quotes: "An error gracefully acknowledged is a victory won.", authurs: "--the wise men."},
    {quotes: "Leadership is not a popularity contest.", authurs: "--the wise."}, {quotes: "Miracles do occur, but one has to work hard for them to happen.", authurs: "--Esther M."},
    {quotes: "Beware of little expenses, a small leak will sink a greate ship.", authurs: "Oyebola O."}, {quotes: "Books and friends should be few but god.", authurs: "--Pastor Oyebola"},
    {quotes: "It is painful to be shameful of what is gainful.", authurs: "--Bishop David Oyedepo O."}, {quotes: "There is always more to learn and experience is our greatest teacher.", authurs: "--Pst Oyebola"},
    {quotes: "Carelessness does more harm than a want of knowledge.", authurs: "Esther Daramola."}, {quotes: "Every great achievement was once considered impossible.", authurs: "--Oyebola"},
    {quotes: "DON'T TEASE OTHERS: Use your humour to please, never never to hurt.", authurs: "--Esther M."},
    {quotes: "Enthusiasm is contagious-it's caught not taught.", authurs: "--Oyebola."}, {quotes: "Always Improve on yourself every day", authurs: "--the wise"},
    {quotes: "Cheerfulness cost nothing, yet it is beyond price.", authurs: "--Oyebola"},{quotes: "Learning is discovering what's possible.", authurs: "Oyebola."},
    
    ]

    //---------Toggle to dark mode--------\\

    icon_btn.addEventListener("click", () =>{
        document.body.classList.toggle("toggle-class");
        //--------Hides moon icon/shows sun icon--------\\
        icon_btn2.style.visibility = 'visible';
        icon_btn.style.visibility = 'hidden';
    })

    // --------Toggles to bright-mode--------------\\
    icon_btn2.addEventListener("click", () =>{
        document.body.classList.toggle("toggle-class");
        icon_btn2.style.cssText = `visibility:hidden; background:rgba(20, 45, 60, 0.85)`
        icon_btn.style.visibility = 'visible';
    })


    random_btn.addEventListener("click", ()=>{
        let randoms = Math.floor(Math.random()*quote_arr.length);

        //---- generate random quote in p-ell -----\\
        let random_quotes = quote_arr[randoms];
        quote.innerHTML = random_quotes.quotes;
         
        //-----show corespomding author------\\
        authur_name.innerHTML = random_quotes.authurs 


    })