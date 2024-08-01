const user = {
  fristname : "Rohit",
  lastname : "Singh"
};

function formatName(user) {
  return user.fristname + ' ' + user.lastname;
}

function App() {
  const URL = "https://google.com";
  const link = <a href={URL}> Google</a>

 
  
  return (

    <>
      <h2>Hello, {formatName(user)}, Search me on {link} . </h2>
      
    </>
  )
}

export default App
