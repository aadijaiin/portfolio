const quoteHeadings = [
    "Daily Dose of Wisdom",
    "Inspiration Injection",
    "Thoughtful Tidbits",
    "Words to Live By",
    "Motivational Morsels",
    "Today's Enlightenment",
    "Pearls of Wisdom",
    "Inspiring Insights",
    "Daily Reflection",
    "Wisdom Nuggets",
    "Mindful Moments",
    "Today's Spark",
    "Insightful Inspirations",
    "Daily Dose of Positivity",
    "Thought Provokers",
    "Inspiration Infusion",
    "Wisdom for the Soul",
    "Daily Encouragement",
    "Today's Thoughtful Quote",
    "Inspiration for the Day"
];

const famousQuotes = [
    "The only limit to our realization of tomorrow is our doubts of today: Franklin D. Roosevelt",
    "In the end, we will remember not the words of our enemies, but the silence of our friends: Martin Luther King Jr.",
    "The best way to predict the future is to create it: Peter Drucker",
    "Life is what happens when you're busy making other plans: John Lennon",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment: Buddha",
    "The only thing we have to fear is fear itself: Franklin D. Roosevelt",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment: Ralph Waldo Emerson",
    "If you want to live a happy life, tie it to a goal, not to people or things: Albert Einstein",
    "Success is not final, failure is not fatal: It is the courage to continue that counts: Winston Churchill",
    "You miss 100% of the shots you don't take: Wayne Gretzky",
    "The journey of a thousand miles begins with one step: Lao Tzu",
    "That which does not kill us makes us stronger: Friedrich Nietzsche",
    "In three words I can sum up everything I've learned about life: it goes on: Robert Frost",
    "The only true wisdom is in knowing you know nothing: Socrates",
    "To live is the rarest thing in the world. Most people exist, that is all: Oscar Wilde",
    "The purpose of our lives is to be happy: Dalai Lama",
    "Get busy living or get busy dying: Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you: Brian Tracy",
    "Believe you can and you're halfway there: Theodore Roosevelt",
    "The only impossible journey is the one you never begin: Tony Robbins"
];





const randomno = () => {

    return Math.floor(Math.random()*20)
}

a = randomno();
b = randomno();





document.querySelector(".heading").innerHTML = `<u><h2 style="color: white;">${quoteHeadings[a]}</h2></u>`;
document.querySelector(".quote").innerHTML = `<p style="color: white;">${famousQuotes[b]}</p>`;
