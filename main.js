const node = document.querySelectorAll('.node');
const board = document.querySelector('.board');
let node_num = 0
let nodes_on_board = [];
let BOARD = [[],[],[],[],[],[]]


// let new_node = document.createElement('div');
// new_node.className = 'node';
// board.appendChild(new_node);

for (let i=0; i < node.length; i++){
    node[i].addEventListener('click' ,() => {
        if (node_num < 2){
            node[i].style.backgroundColor = 'red';
            node_num ++;
        }
        console.log(i);
    })
    
}

function update_board(){
    let count = 0
    let start = 0
    let stop_ = 10
    while (count < BOARD.length){
        for (let row=start; row < stop_; row++)
        {
            BOARD[count].push(node[row]);
        }
        temp = start
        start = stop_
        stop_ += 10
        count += 1
    }
    console.log(BOARD);
}
function getstart(){
    for(let i=0; i<BOARD.length; i++){
        for(let j=0; j< BOARD[0].length; j++){
            if (BOARD[i][j].style.backgroundColor == 'red') {
                return (i,j);
            }
        }
    }
}
function isValid(pos) {

}
function border(pos) {

}
function update_pos(initial_pos){
    // look up down left and right 
    // if (pos is reached) {
    //     return true;

    // }
    pos = [
        (0,1),
        (1,0),
        (-1,0),
        (0,-1)
    ]
    let x = initial_pos[0];
    let y = initial_pos[1];
    for(let i=0; i<positions.length; i++){
        let new_x = x + pos[i];
        let new_y = y + pos[i];

        // if(is the rght pos){
        //     return true;
        // }

        if(isValid((new_x,new_y)) && !border((new_x,new_y))){
            new_pos = (new_x,new_y);
            BOARD[new_pos[0]][new_pos[1]].style.backgroundColor = 'red';
            update_pos(new_pos);
        }
        else if(!isValid((new_x,new_y)) || border((new_x,new_y))) {
            continue;
        }
        
    }
}



function main(pos){
    update_board();
    update_pos(pos);
}



// main();