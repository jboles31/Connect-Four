
/////gameboard
let GameBoard = ({placeToken}) => {
    return (
        <div>GameBoard
            <tbody>
                <tr className="row5">
                    <td x={0} y = {5} onClick={() => placeToken(0)}></td>
                    <td x={1} y = {5} onClick={() => placeToken(1)}></td>
                    <td x={2} y = {5} onClick={() => placeToken(2)}></td>
                    <td x={3} y = {5} onClick={() => placeToken(3)}></td>
                    <td x={4} y = {5} onClick={() => placeToken(4)}></td>
                    <td x={5} y = {5} onClick={() => placeToken(5)}></td>
                    <td x={6} y = {5} onClick={() => placeToken(6)}></td>
                </tr>
                <tr className="row4">
                    <td x={0} y = {4} onClick={() => placeToken(0)}></td>
                    <td x={1} y = {4} onClick={() => placeToken(1)}></td>
                    <td x={2} y = {4} onClick={() => placeToken(2)}></td>
                    <td x={3} y = {4} onClick={() => placeToken(3)}></td>
                    <td x={4} y = {4} onClick={() => placeToken(4)}></td>
                    <td x={5} y = {4} onClick={() => placeToken(5)}></td>
                    <td x={6} y = {4} onClick={() => placeToken(6)}></td>
                </tr>
                <tr className="row3">
                    <td x={0} y = {3} onClick={() => placeToken(0)}></td>
                    <td x={1} y = {3} onClick={() => placeToken(1)}></td>
                    <td x={2} y = {3} onClick={() => placeToken(2)}></td>
                    <td x={3} y = {3} onClick={() => placeToken(3)}></td>
                    <td x={4} y = {3} onClick={() => placeToken(4)}></td>
                    <td x={5} y = {3} onClick={() => placeToken(5)}></td>
                    <td x={6} y = {3} onClick={() => placeToken(6)}></td>
                </tr>
                <tr className="row2">
                    <td x={0} y = {2} onClick={() => placeToken(0)}></td>
                    <td x={1} y = {2} onClick={() => placeToken(1)}></td>
                    <td x={2} y = {2} onClick={() => placeToken(2)}></td>
                    <td x={3} y = {2} onClick={() => placeToken(3)}></td>
                    <td x={4} y = {2} onClick={() => placeToken(4)}></td>
                    <td x={5} y = {2} onClick={() => placeToken(5)}></td>
                    <td x={6} y = {2} onClick={() => placeToken(6)}></td>
                </tr>
                <tr className="row1">
                    <td x={0} y = {1} onClick={() => placeToken(0)}></td>
                    <td x={1} y = {1} onClick={() => placeToken(1)}></td>
                    <td x={2} y = {1} onClick={() => placeToken(2)}></td>
                    <td x={3} y = {1} onClick={() => placeToken(3)}></td>
                    <td x={4} y = {1} onClick={() => placeToken(4)}></td>
                    <td x={5} y = {1} onClick={() => placeToken(5)}></td>
                    <td x={6} y = {1} onClick={() => placeToken(6)}></td>
                </tr>
                <tr className="row0">
                    <td x={0} y = {0} onClick={() => placeToken(0)}></td>
                    <td x={1} y = {0} onClick={() => placeToken(1)}></td>
                    <td x={2} y = {0} onClick={() => placeToken(2)}></td>
                    <td x={3} y = {0} onClick={() => placeToken(3)}></td>
                    <td x={4} y = {0} onClick={() => placeToken(4)}></td>
                    <td x={5} y = {0} onClick={() => placeToken(5)}></td>
                    <td x={6} y = {0} onClick={() => placeToken(6)}></td>
                </tr>
            </tbody>
        </div>
    )
}


////class App
class App extends React.Component {
    constructor(props){
        super(props)

        this.state={
            redsTurn: true, 
            matrix: [[],[],[],[],[],[],[]]
        }
        this.placeToken = this.placeToken.bind(this)
        this.turn = this.turn.bind(this)
        this.updateBoard = this.updateBoard.bind(this)
        this.checkForWins = this.checkForWins.bind(this)
        this.compareCol = this.compareCol.bind(this)
        this.checkCol = this.checkCol.bind(this)
        this.checkRow = this.checkRow.bind(this)
        this.checkUpLeft = this.checkUpLeft.bind(this)
        this.checkUpRight = this.checkUpRight.bind(this)
        this.checkDiagonal = this.checkDiagonal.bind(this)

    }

    turn() {
        if(this.state.redsTurn === true){
            this.setState({
                redsTurn: false
            })
        } else {
            this.setState({
                redsTurn: true
            })
        }
    }

    updateBoard() {
        let matrix = this.state.matrix
        for(let i = 0; i <matrix.length; i++) {
            if(matrix[i].length) {
                for(let j = 0; j < matrix[i].length; j++) {
                    if(matrix[i][j] === true) {
                        var match = document.querySelectorAll(`td[x='${i}'][y='${j}']`)
                        match[0].setAttribute('style', 'background-color:red')
                    } else {
                        var match = document.querySelectorAll(`td[x='${i}'][y='${j}']`)
                        match[0].setAttribute('style', 'background-color:blue')
                    }
                }
            }
        }
    }

    compareCol(arr, i) {
        if(arr[i] === arr[i+1] && arr[i] === arr[i+2] && arr[i] === arr[i+3]){
            return true
        } else {
            return false
        }
    }

    checkCol() {
        let matrix = this.state.matrix;
        for(let i = 0; i <matrix.length; i++) {
            if(matrix[i].length > 3) {
                for(let j = 0; j < matrix[i].length; j++) {
                    if(this.compareCol(matrix[i], j)){
                        if(this.state.redsTurn){
                            alert('Player Blue wins!')
                        } else {
                            alert('Player Red Wins!')
                        }
                    }   
                }
            }
        }
    }

    checkRow() {
        let matrix = this.state.matrix
        let j = 0
        while(j < 8){
            let arr = [];
            for(let i = 0; i < matrix.length; i++) {
                if(matrix[i][j] !== undefined) {
                    arr.push(matrix[i][j]);
                } else {
                    arr.push(1)
                }
            }
            for(let k = 0; k < arr.length; k++) {
                if(arr[k] !== 1){
                    if(arr[k] === arr[k+1] && arr[k] === arr[k+2] && arr[k] === arr[k+3]) {
                        if(this.state.redsTurn){
                            alert('Player Blue wins!')
                        } else {
                            alert('Player Red Wins!')
                        }
                    }
                }
            }
            j++;
        }
    }

    checkUpLeft() {
        let matrix = this.state.matrix
        for(let i = 0; i < matrix.length; i++) {
            for(let j = 0; j < matrix[i].length; j++) {
                if(matrix[i][j] !== undefined && matrix[i+1] !== undefined && matrix[i+2] !== undefined && matrix[i+3] !== undefined){
                    if(matrix[i][j] === matrix[i + 1][j + 1] && matrix[i][j] === matrix[i + 2][j + 2] && matrix[i][j] === matrix[i + 3][j + 3]){
                        if(this.state.redsTurn){
                            alert('Player Blue wins!')
                        } else {
                            alert('Player Red Wins!')
                        }
                    }
                }    
            }
        }
    }

    checkUpRight() {
        let matrix = this.state.matrix
        for(let i = 0; i < matrix.length; i++) {
            for(let j = 0; j < matrix[i].length; j++) {
                if(matrix[i][j] !== undefined && matrix[i-1] !== undefined && matrix[i-2] !== undefined && matrix[i-3] !== undefined){
                    if(matrix[i][j] === matrix[i - 1][j + 1] && matrix[i][j] === matrix[i - 2][j + 2] && matrix[i][j] === matrix[i - 3][j + 3]){
                        if(this.state.redsTurn){
                            alert('Player Blue wins!')
                        } else {
                            alert('Player Red Wins!')
                        }
                    }
                }    
            }
        }
    }

    checkDiagonal() {
        this.checkUpLeft();
        this.checkUpRight();
    }

    checkForWins() {
        this.checkCol();
        this.checkRow();
        this.checkDiagonal();
    }

    placeToken(x) {
        let arr = this.state.matrix[x];
        if(arr.length !== 6) {
            arr.push(this.state.redsTurn);
            this.updateBoard();
            window.setTimeout(() => this.checkForWins(), 200)
            this.turn();
        } else {
            alert('You can not go there ya big dummy')
        }
        
        
    }

    render() {
        return (
            <div>
                <div>App</div>
                <GameBoard placeToken={this.placeToken}/>
            </div>
        )
    }
}

export default App;

//matrix[i][j] === matrix[i][j+1] && matrix[i][j] === matrix[i][j+2] && matrix[i][j] === matrix[i][j+3]

