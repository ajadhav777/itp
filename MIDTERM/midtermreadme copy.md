#midterm proj

started with the code that was on the repository

i added two more functions to the code to make 2 new keys
I was not able to link the sounds to their respective keys - it would only play 'p' (the first sound) this is so weird ..

i took the help of my aunt and uncle (they are coders). i understood the process and we were able to link the keys !

so basically the thought process was - keypressed is a function that is invoked when system triggers an event of pressing a key such as a letter, punctuation, etc. we defined our custom implementation of the action to be carried out on this trigger event. so we defined a function - playcustomsound - which has a logic to play different sounds when the respective keys, p,k,l, are pressed. 

so i've used an if else loop to check the condition for those 3 keys to be equivalent to the information stored in element key. 

the logic resides in playcustomsound. however, we have a function called preload which loads the sound data from the sound files having the extension .mp3. 

for the display window we have defined a function called setup which displays the button to play the sounds 

now i am desiging the front end to make it more interactive. my idea is to have 3 buttons, p,k,l which upon clicking will play their respective sounds. 

i googled p5 ui and stumbled upon the library for ui elements. i am using their createbutton function to create a button, and i learnt more about other such functions, such as canvas.

defined each sound seperately to be reused by two different events - keypressed  and buttonpressed. 

IT WORKED !!! im so happy :)

im trying to change the color of the text. 

found the function to change text font, size and color!

now i want to add a few images to make it look cute

drew a flower just for fun

its not the best aesthetically but i like it !
