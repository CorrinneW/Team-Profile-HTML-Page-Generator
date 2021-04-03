# Work Team Profile Generator
Node.js command line application.

## The Goal
A command line application which takes information about the manager, engineers and interns on a software development team and returns an HTML page with a brief employee profile for each.

## What I Did 
1. Created a series of prompts using inquirer to receive information about the manager, as well as any engineers or interns that are on the team. 
  • After each prompt question has been answered for one employee, the user is offered the choice to add a new employee or to finish and generate the HTML file.
2. Created a base Employee class, as well as Manager, Engineer and Intern subclasses to manage which prompts are given and how the received data is used.
3. Created unit tests for each class to ensure they fulfilled their purposes.
4. Organized returned data into template literals containing an HTML template which is used to write a functioning HTML file.

## Demo Video
[![Demo Video](https://github.com/CorrinneW/Team-Profile-HTML-Page-Generator/blob/main/assets/Slide_1.jpg)](https://www.youtube.com/watch?v=z_v2XS58nZI "Demo for Team Profile HTML Page Generator")

## Credits
### Resources:
https://www.npmjs.com/package//inquirer

https://jestjs.io/

https://bulma.io/

https://fontawesome.com/

### Music:
Life by Roa https://soundcloud.com/roa_music1031
Creative Commons — Attribution 3.0 Unported — CC BY 3.0
Free Download / Stream: https://bit.ly/_-life
Music promoted by Audio Library https://youtu.be/dXqEepAme-M
