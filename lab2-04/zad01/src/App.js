// import React from "react";

// const App = () => <p>Zadania w plikach</p>;

// export default App;

import React, { useState, useEffect } from "react";

const App = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchRandomUser = async () => {
        try {
            setIsLoading(true);

            const response = await fetch("https://randomuser.me/api/");
            const data = await response.json();
            const [user] = data.results;

            setUser(user);
            setIsLoading(false);
        } catch (e) {
            setIsError(true);
            setIsLoading(false);
        }
    };

    //same as doing it in ComponentDidMount => upload data on first render
    useEffect(() => fetchRandomUser(), []);

    const handleReset = () => {
        fetchRandomUser();
    };

    if (isError) {
        return <h2>Error while loading... :(</h2>;
    }

    if (isLoading) {
        return <h2>Loading...</h2>;

    }

    return (
        <div>
            <img src={user.picture.medium} alt="img" />
            <p>
                Name: {user.name.first} {user.name.last}
            </p>
            <button onClick={handleReset}>reset</button>
        </div>
    );
}

export default App;
