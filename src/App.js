import User from "./components/user.jsx";
function App ()  {
    return (
        <div>
            <h1>USERS</h1>
            <User name="Vaibhav" description="FSWD" />
            <User name="Vipin" description="FSWD" />
        </div>
    );
}

export default App;

// Props -> A data that is being passeed form one component to another

// state -> A set of data that an individual component holds