<script lang="ts">
    import {onMount} from "svelte";
    import type IPiece from "./Interface/IPiece";
    import {pieces} from "./Interface/IPiece";
    let stringColors = "obgrypu"
    let colors = {"0": "bg-white","o": "bg-orange-500", "b": "bg-blue-500", "g": "bg-green-500", "r": "bg-red-500", "y": "bg-yellow-500", "p": "bg-pink-500", "u": "bg-purple-500"}
    let table = []
    let piece: IPiece = {piece: [], color: "", x: 0, y: 0}

    for (let i = 0; i < 25; i++) {
        table.push([])
        for (let j = 0; j < 12; j++) {
            table[i][j] = '0'
        }
    }
    function generatePiece(){
        piece.piece = pieces[Math.floor(Math.random() * pieces.length)]
        piece.color =  stringColors[Math.floor(Math.random() * stringColors.length)]
        piece.x = 0
        piece.y = 4
        console.log(piece.piece)
    }
    function insertPieceInTab(piece: IPiece){
        for (let i = 0; i < piece.piece.length; i++) {
            for (let j = 0; j < piece.piece[i].length; j++) {
                if (piece.piece[i][j] !== 0) {
                    table[piece.x + i][piece.y + j] = piece.color
                }
            }
        }
        console.log(table);
    }

    function removePiece(){
        for (let i = 0; i < piece.piece.length; i++) {
            for (let j = 0; j < piece.piece[i].length; j++) {
                if (piece.piece[i][j] !== 0) {
                    table[piece.x + i][piece.y + j] = '0'
                }
            }
        }
    }

    function rotatePiece(){
        let tempPiece = piece
        tempPiece.piece = piece.piece[0].map((_, colIndex) => piece.piece.map(row => row[colIndex]).reverse())
        piece = tempPiece
    }


    onMount(() => {
        generatePiece()
        insertPieceInTab(piece)
    })

    function movePieceDown(){
        removePiece()
        piece.x++
        insertPieceInTab(piece)
    }

    function canGoRight(): boolean{
        let canGo = true
        console.log(piece.piece)
        for (let i = 0; i < 3; i++) {
            console.log(piece.y)
            if (piece.piece[i][2] == 1 && piece.y + 3 > 12){
                return false
            }
            if (piece.piece[i][1] == 1 && piece.y + 4 > 12){
                return false
            }
        }
        console.log(canGo)
        return canGo
    }

    document.addEventListener('keypress', (event) => {
        console.log(event.key)
        if (event.key === ' ') {
            removePiece()
            rotatePiece()
            insertPieceInTab(piece)
        }

        if (event.key === 'p') {
            if (canGoRight()){
                removePiece()
                piece.y++
                console.log(piece.y)
                insertPieceInTab(piece)
            }
        }

        if (event.key === 'l') {
            removePiece()
            piece.y--
            insertPieceInTab(piece)
        }
    });

    /*setInterval(() => {
        movePieceDown()
    }, 1000)*/





    
</script>

<div class="h-screen w-screen bg-white-200 overflow-hidden flex flex-col justify-between">
    <p class="w-screen flex justify-center">
        <span class="text-red-500">T</span>
        <span class="text-orange-500">E</span>
        <span class="text-yellow-500">T</span>
        <span class="text-green-500">R</span>
        <span class="text-blue-500">I</span>
        <span class="text-pink-500">S</span>
        <span class="w-4"></span>
        <span class="text-purple-500">4</span>
        <span class="text-red-500">0</span>
        <span class="text-orange-500">4</span>
    </p>
    <div class="flex justify-center w-full mb-5">
        <div class="grid grid-cols-30 grid-rows-10 border-2">
            {#each table as elem}
                <div class="flex ">
                    {#each elem as e}
                        <div class="case border-2 border-black-500 {colors[e]}">
                            <div class="h-full w-full"></div>
                        </div>
                    {/each}
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .case {
        height: 1.5vw;
        width: 1.5vw;
    }
</style>
