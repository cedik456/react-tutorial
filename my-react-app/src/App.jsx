import Student from "./Student";

function App() {
    return(
        <>
          <Student name="Cedric" age={22} isStudent={true} />
          <Student name="Charles" age={23} isStudent={true} />
          <Student name="Joshua" age={24} isStudent={false} />
          <Student/>
        </>
    );
}

export default App     
