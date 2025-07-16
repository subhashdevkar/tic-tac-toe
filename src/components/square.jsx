export function Square({value,onSquareClick}){
    return(
        <button className="btn border border-1" style={{width:"50px",height:"50px"}} onClick={onSquareClick}>{value}</button>
    )
}