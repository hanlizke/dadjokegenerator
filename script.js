let jokes = [
    'When does a joke become a dad joke? When it\'s apparent.',
    'Have you seen those new corduroy pillowcases? They\'re making headlines.',
    'What did the woman who was afraid of elevators do? She took steps to avoid them.',
    'Do you have a bookmark? My name is Steve.',
    'Why do cows wear cowbells? Because their horns don\'t work.',
    'What did one earthquake say to the other? It\'s not my fault!',
    'Why was the bullet out of work? It got fired.',
    'What did one rope say to the other when asked if it could help? I\'m a frayed not',
    'Why can\'t Elsa hold a balloon? She would let it go.',
    'Did you hear about the new band, 999 megabytes? They still haven\'t gotten a gig.',
    'How did the hipster burn her mouth? She ate her food before it was cool.',
    'What happened after the two antennas got married? The reception was great!',
    'Do you think this glass coffin will be successful? Remains to be seen.',
    'What do you call a dinosaur that knows a lot of words? A thesaurus.',
    'What did the photon say at the hotel check-in desk? No luggage, I\'m traveling light.',
    'Why is it warmer in a corner? Because it\'s 90 degrees.',
    'What happened when the grape got stepped on? It let out a little wine.',
    'How did the tree get online? It logged in.',
    'How does a motorcycle laugh? Yamahahahaha.',
    'If a T-Rex hits its head, what does it get? Dino-sore!',
    'What do you call a broken can opener? A can\'t opener.',
    'What was the windmill\'s favorite kind of music? It was a big metal fan.',
    'What happened when the baker accidentally swallowed some food coloring? They dyed a little inside.',
    'Why did the coffee report a crime? It was mugged.',
    'What do you call a horse who disagrees with you? A neigh-slayer.',
    'What happened when David had his ID stolen? We had to call him Dav.',
    'Why do actors say "break a leg" before a show? Because they\'re all part of the same cast.',
    'Why was the new chimney in trouble? It was too young to be smoking.',
    'Why can\'t a hand be twelve inches long? Because then it would be a foot.',
    'What do you call an avocado with a mohawk? Punk Guac.', 
    'What\'s another name for a toaster? A tanning bread.',
    'What did the man who walked into a bar with a piece of concrete say? I\'ll have a drink, and one for the road.',
    'Why are frogs so happy? They eat whatever bugs them.',
    'Why did the banana go to the doctor? Because it wasn\'t peeling well.',
    'What kind of career did the boat want to be in? Sails.',
    'What did the buffalo say when his boy went away for the weekend? Bison.',

]

function newJoke() {
    let randomNumber = Math.floor(Math.random() * (jokes.length));
    document.getElementById('jokeDisplay').innerHTML = jokes[randomNumber]
}