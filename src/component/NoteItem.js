
const NoteItem = (props) => {
    const { note } = props;
    const shadow = {
        boxShadow: "0.5px 0.5px black"
    }
    return (
        <div className='col-md-3 my-2'>
            <div className="card" style={shadow}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda odit aliquid, asperiores natus qui veniam, earum eligendi rem sapiente error voluptas doloribus quisquam nisi obcaecati soluta, sit quibusdam vero consequuntur cum maxime aspernatur.</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
