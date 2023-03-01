import { useState } from "react";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const inputEvent = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setNote((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  const addNote = () => {
    if (note.title === "")   {
      alert("Title field is empty");
    }else if(  note.content === "") {
      alert("content field is empty");
    }else{
      props.passItem(note);
      setNote({
        title: "",
        content: "",
      });
    }
   
  };

  const expandIt = () => {
    setExpand(true);
  };
  const backToNormal = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="create_main" onDoubleClick={backToNormal}>
        {expand ? (
          <input
            type="text"
            autoComplete="off"
            name="title"
            value={note.title}
            placeholder="Title"
            onChange={inputEvent}
          />
        ) : null}

        <textarea
          name="content"
          rows=""
          cols=""
          value={note.content}
          onChange={inputEvent}
          onClick={expandIt}
          placeholder="Write a Note..."
        ></textarea>

        {expand ? (
          <button onClick={addNote}>
            <i className="fa-solid fa-plus"></i>
          </button>
        ) : null}
      </div>
    </>
  );
};

export default CreateNote;
