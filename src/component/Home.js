import Notes from './Notes';


function Home() {

  return (
    <div className='container my-3'>
      <h3>Add Notes</h3>
      <form className="w-50">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
      <h3 className='mt-3'>Your Notes</h3>

      <Notes />

    </div>
  )
}

export default Home
