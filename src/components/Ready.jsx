function Ready (props){
    let finish= new Date();
    console.log(props.finalTime.getTime())
    console.log(props.time)

    finish=(props.finalTime.getTime()-props.time.getTime())/(1000);
    console.log(finish)
    
    return(
        <div>
        <h1>Поздравляю,вы справились за {finish} секунд</h1>
        <button type="button" className="btn btn-primary btn-lg" 
          onClick={props.newStart}>Начать заново</button>
          </div>
    )
}
export default Ready;