<script lang="ts">
    import {onMount} from "svelte";
    import {pieces} from "./piece";
    let stringColors = "obgrypu"
    let colors = {"0": "bg-white","o": "bg-orange-500", "b": "bg-blue-500", "g": "bg-green-500", "r": "bg-red-500", "y": "bg-yellow-500", "p": "bg-pink-500", "u": "bg-purple-500"}
    let table = []

    for (let i = 0; i < 25; i++) {
        table.push([])
        for (let j = 0; j < 12; j++) {
            table[i][j] = '0'
        }
    }
    function generatePiece(): [string[][], string] {
        let piece: string[][] = pieces[Math.floor(Math.random() * pieces.length)]
        console.log(piece)
        return [piece, stringColors[Math.floor(Math.random() * stringColors.length)]]
    }
    function insertPieceInTab(row: number, col: number, piece: [string[][], string]){
        console.log(piece)
        console.log("on insert la pièce dans le tableau à la position "+row+" "+col)
        let tempTable = table
        for (let i = 0; i < piece[0].length; i++) {
            for (let j = 0; j < piece[0][i].length; j++) {
                if (piece[0][i][j] !== 0) {
                    tempTable[row + i][col + j] = piece[1]
                }
            }
        }
        $: table = tempTable
        console.log(table);
    }

    onMount(() => {
        let piece : [string[][], string] = generatePiece()
        insertPieceInTab(0, 4, piece)
    })

    
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
