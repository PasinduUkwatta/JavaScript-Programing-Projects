const person ={
    name: "pasindu",
    address: {
        line1: "John Doe",
        city: "Sain",
        country: "United States",
    },
}

function LearningJavaScript(){
return(
    <div>
        <div>
            {person.name}

        </div>
        <div>
            {person.address.line1}
            {person.address.city}
            {person.address.country}

        </div>
    </div>
)
}

export default LearningJavaScript
