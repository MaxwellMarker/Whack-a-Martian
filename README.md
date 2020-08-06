# Whack-A-Martian
## Technologies used
- Javascript
- HTML
- CSS
- jQuery: JavaScipt library for DOM traversal and manipulation
## Live site link
- https://maxwellmarker.github.io/Whack-a-Martian/
## Approach
Basically, there are buttons all over the screen and at certain intervals a math function will choose a random one to reveal by either moving it from behind an element or moving it inside from the outside of an element with overflow set as hidden. Whenever a button is chosen to be revealed it gets an event listener for a click that will give the player points. The click listener is removed and the button is returned to its hiding position as soon as the player clicks the button once or the button times out. How many points a button gives as well as position data for its hidden and revealed states is kept in an array of objects with identifiers to find them by their html id. Leaderboard data is also kept in an array of objects. Each time a round is played, a new object is pushed into the array with your name and score and then the array is sorted by score values. Then the first five objects in the array are displayed on the actual leaderboard.
## Unsolved Problems

## Future Updates
- A way to stop the game at any time and cancel all intervals that are set to happen
- Local storage for leaderboard
## Images

- Background images and planet were drawn in GIMP-2.10

- PNGs for aliens are from Saiful Basor on pngtree.com: https://pngtree.com/freepng/green-aliens-with-a-gun-illustration_5435934.html, https://pngtree.com/freepng/purple-aliens-with-a-gun-illustration_5435936.html, https://pngtree.com/freepng/pink-aliens-with-a-gun-illustration_5435935.html