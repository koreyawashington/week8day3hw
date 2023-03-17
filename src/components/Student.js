import Data from "../data/Data";
import Score from "./Score";

function Student(props){
    console.log(props);
    const {Data} = props
    return(
        <div>
        {/* <h1>Student</h1> */}
        <h1>{Data.name}</h1>
        <h1>{Data.bio}</h1>
        {Data.scores.map((score)=>(
            
            <Score score= {score}/>
        ))}
        </div>
    )
}
export default Student