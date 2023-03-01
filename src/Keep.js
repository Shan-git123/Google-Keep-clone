import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";
import { useState } from "react";

const Keep = () => {
  const [addNotes, setAddNotes] = useState(
    JSON.parse(localStorage.getItem("notesInLocal"))
      ? JSON.parse(localStorage.getItem("notesInLocal"))
      : []
  );

  const addItem = (note) => {
   
    let myNotes = [];

    myNotes.push(...addNotes, note);

    localStorage.setItem("notesInLocal", JSON.stringify(myNotes));

    setAddNotes((oldData) => {
      return [...oldData, note];
    });
  };

  const onDelete = (id) => {
    setAddNotes((preData) => {
      preData.filter((curval, index) => {
        return index !== id;
      });
    });

    const newList = [...addNotes];
    newList.splice(id, 1);
    localStorage.setItem("notesInLocal", JSON.stringify(newList));
    setAddNotes(newList);
  };
  const x = JSON.parse(localStorage.getItem("notesInLocal"))
    ? JSON.parse(localStorage.getItem("notesInLocal"))
    : [];

  return (
    <>
      <Header />
      <CreateNote passItem={addItem} />

      {x.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deletenote={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default Keep;
