function Score(props){
    const{score} = props
    console.log(score.date);
return (
    <div>

        <h1>{score.date}</h1>
        <h1>{score.score}</h1>

    </div>
)
}
export default Score