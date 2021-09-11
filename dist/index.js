const quoteAuthor = document.querySelector('.card__author');
const quote = document.querySelector('.card__quote');
const audioButton = document.querySelector('.card__play-btn')
        
        let affirmation1 = {quote:"We all see how much effort you’re constantly putting into your streams. You’re always doing a great job. Don’t doubt yourself!", quoteAuthor: "TheTrue_DV", quoteAudio: "./assets/media/affirmation1.mp3" };
        let affirmation2 = {quote:"Congrats on Partner! We always knew you could do it!", quoteAuthor: "TheTrue_DV", quoteAudio: "./assets/media/affirmation2.mp3"};
        let affirmation3 = {quote:"You ARE beautiful. No matter what anyone says. Ignore the people trying to put you down!", quoteAuthor: "TheTrue_DV", quoteAudio: "./assets/media/affirmation3.mp3"};
        let affirmation4 = {quote:"26 thousand people have seen your 'How to grow as a VTuber' video. We can assume that at least one of them have gained success and a great community now. That might not have happened without your advice. You can be proud of that!", quoteAuthor: "TheTrue_DV", quoteAudio: "./assets/media/affirmation4.mp3"};
        let affirmations = [affirmation1, affirmation2, affirmation3, affirmation4];

        let affirmationID = 0;
        let previousAffirmationID = parseInt(localStorage['lastAffirmationID']);;
        let affirmationAudio;

        function getAffirmationID(previousAffirmationID) {
            affirmationID = Math.floor(Math.random() * affirmations.length);
            // console.log(affirmationID);
            
            // return affirmationID;
        }
        document.addEventListener('DOMContentLoaded', _ => {
            // console.log(localStorage['lastAffirmationID']);
            // let affirmationID = getAffirmationID(previousAffirmationID);
            while(affirmationID == previousAffirmationID){
                getAffirmationID(previousAffirmationID);
            } 
            localStorage['lastAffirmationID'] = affirmationID.toString()            
            const affirmation = affirmations[affirmationID];
            // console.log(affirmation);
            // console.log(localStorage['lastAffirmationID']);
            quoteAuthor.innerHTML = affirmation.quoteAuthor;
            quote.innerHTML = affirmation.quote;
            affirmationAudio = affirmation.quoteAudio;
        })


        audioButton.addEventListener('click', _ => {
            var audio = new Audio(affirmationAudio);
            audio.play();
        })

