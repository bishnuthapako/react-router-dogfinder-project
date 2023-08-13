## **Part 1: React Router Dog Finder**

Build an app that routes to different dogs and displays information on that dog when you’re at that route.

The routes should look like this:

- */dogs* is the homepage and shows all three dogs
- Clicking on a dog from the homepage takes you to that dog’s route. For example, clicking on Whiskey will take you to */dogs/whiskey*.
- every other endpoint not listed should redirect you to */dogs.*
In this example:

- *<DogList />* takes all the dog info from the props of *<App />*
- *<DogDetails />* shows all of the info about a single dog
- In *<DogDetails />*, how will you derive the current dog, e.g. *whiskey*?
- Bonus: is there a way to get the current dog *before* you render the component, passing *dog* instead of the entire list of dog data?