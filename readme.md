# Groovy Tic Tac Toe 🕺

A classic Tic Tac Toe game brought to life with a funky, 70s-inspired visual theme! This project is built purely with vanilla HTML, CSS, and JavaScript, focusing on responsive design, modern CSS features, and a distinct retro aesthetic.

## Preview

![Groovy Tic Tac Toe Screenshot](img/Screenshot%202025-04-13%20211504.png)


## Description

This is a frontend implementation of the classic Tic Tac Toe game where two players (X and O) take turns marking spaces in a 3x3 grid. The goal was to create a fully functional game while experimenting with a specific visual style reminiscent of the 1970s, using CSS Custom Properties for theming and modern layout techniques like CSS Grid and Flexbox. The game is fully responsive and includes a session-based scoreboard.

## Features

* Classic Tic Tac Toe gameplay (Player X vs Player O).
* Clear indication of the current player's turn.
* Automatic detection of win conditions (rows, columns, diagonals).
* Automatic detection of draw conditions (board full, no winner).
* Responsive design that adapts to different screen sizes (desktop, tablet, mobile), including viewport height constraints.
* Scoreboard tracking wins for 'X', 'O', and draws within the current browser session.
* Groovy 70s theme featuring:
    * Custom color palette (mustard yellows, oranges, olive greens).
    * Rounded shapes and borders.
    * Retro-inspired typography using Google Fonts.
* "Restart Game" button to clear the board for a new round.

## Tech Stack

* **HTML5:** Semantic structure for content.
* **CSS3:**
    * **CSS Grid Layout:** For the 3x3 game board structure.
    * **Flexbox:** For overall layout and centering.
    * **CSS Custom Properties (Variables):** For easy theming and color management.
    * **`clamp()` function:** For fluid typography and responsive spacing.
    * **Media Queries:** For adapting layout and sizing based on viewport width and height.
    * **Transitions & Basic Animations:** For hover effects and visual feedback.
* **JavaScript (Vanilla ES6+):**
    * DOM Manipulation: Selecting elements, updating content and classes.
    * Event Handling: Listening for clicks on cells and the restart button.
    * Game State Management: Tracking the board state, current player, scores, and active game status.
    * Game Logic: Implementing turn handling, win/draw condition checking.

## Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/MAMcC0/groovy-tic-tac-toe.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd groovy-tic-tac-toe
  ```

3.  **Open the `index.html` file:**
    * Simply double-click the `index.html` file in your file explorer.
    * OR, use a simple local server (recommended for best compatibility):
        * **Using VS Code:** Install the "Live Server" extension, right-click `index.html`, and choose "Open with Live Server".
        * **Using Python:** Run `python -m http.server` (or `python3 ...`) in the terminal from the project directory and open `http://localhost:8000` in your browser.
        * **Using Node.js:** Run `npx serve` in the terminal from the project directory and open the provided `localhost` address.

## Project Goals & Learning

This project served as practice for:

* Implementing core game logic without relying on external libraries.
* Applying modern CSS techniques for layout, responsiveness, and theming.
* Utilizing CSS Custom Properties effectively.
* Creating fluid interfaces using `clamp()` and viewport units.
* Handling user interactions and updating the DOM with vanilla JavaScript.
* Debugging layout issues like overflow and alignment.

## Future Enhancements (Ideas)

* [ ] Implement a simple AI opponent (Minimax algorithm).
* [ ] Add more distinct animations for placing marks or winning lines.
* [ ] Introduce sound effects for moves, wins, and draws.
* [ ] Persist scores across sessions using Local Storage.
* [ ] Add a theme switcher (e.g., toggle between "Groovy" and "Sleek").

## License

This project is licensed under the MIT License - see the LICENSE file for details (optional - add a LICENSE file if you wish).