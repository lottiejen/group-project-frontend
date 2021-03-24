const Stars = ( {stars} ) => {
    
        const starStyle= {
            height: 25,
            width : 25,
            padding: 5
        }

        const starsArray= [];
        for(let i = 0; i < parseInt(stars); i += 1){
             starsArray.push(i)
        }

    return (<>
        {starsArray.map( (star, index) => {
        return <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" alt = "star icon" style = {starStyle} key={index}/>})}
    </>)
}

export default Stars;