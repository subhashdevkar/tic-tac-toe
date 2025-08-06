export function Square({value,onSquareClick}){
    return(
        <button className={value==="X"?"btn border text-success fs-4 fw-bold":"btn border text-danger fs-4 fw-bold"} style={{width:"50px",height:"50px"}} onClick={onSquareClick}>{value}</button>
    )
}