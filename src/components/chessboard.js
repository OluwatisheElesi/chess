
// import css
import { useState } from "react";
import "./chessboard.css";
// import "./game.js";


// chessboard layout 2 loops for x & y access
// y axis
const columns = ["1","2","3","4","5","6","7","8"];
// x axis
const rows = ["a","b","c","d","e","f","g","h"];


export default function Chessboard() {

// const game = useConst (() => new Game());
// const [state, setState] = useState({
// player: "1",
// chessboard: game.chessboard(),
// });


    let board  = [];

    for(let j =  columns.length - 1; j >= 0; j--) {
        for (let i = 0; i < rows.length; i++) {
            // adding column & rows to gether can give you the needed square color and position
            const number = j + i+ 2;
            // if even, then we can get the dark color
            if(number % 2 ===0) {
                board.push(
                    <span class="squares black-squares" data-row="" data-column="" width="80px" height="80px">[{rows[i]}{columns [j]}]
                    </span>
                    );
            
         // otherwise we get lite color
        } else {
         board.push(
            <span class="squares white-squares" width="80px" height="80px">[{rows[i]}{columns [j]}]
            </span>
            );

            // board.push(
            // <span class="squares" width="80px" height="80px">[{rows[i]}{columns [j]}]
            // </span>
            // );
         }
        }
    }
    return <div id="board">
        <div id="chessboard">
            <div id="field">
       {board}
       </div>
       </div> 
       <div id="score"></div>
       
       </div>;
}

