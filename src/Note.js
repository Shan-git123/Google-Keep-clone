const Note = (props) => {
  const short_note = () => {
    props.deletenote(props.id);
  };

  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button onClick={short_note}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </>
  );
};

export default Note;
