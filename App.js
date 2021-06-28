import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

function App() {

    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState("")
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(responce => responce.json())
            .then(users => {
                setRobots(users)
            })
        console.log(count)
    }, [count])

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }


    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    console.log(filterRobots)
    if (!robots.length) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div className="tc ">
                <h1>RoboFriends</h1>
                <button onClick={()=>setCount(count+1)}>Click Me!</button>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterRobots}/>

                    </ErrorBoundry>

                </Scroll>
            </div>

        )
    }


}

export default App