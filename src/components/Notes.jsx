import { Trash2 } from "lucide-react";

function Notes({ notes, removeNote }) {
  return (
    <div className="allNotes">
      {notes.map((note) => {
        return (
          <div className="notes" key={note.id}>
            <p>{note.text}</p>
            <div className="bottomNote">
              <div className="trashIcon" onClick={() => removeNote(note.id)}>
                <Trash2 />
              </div>
              <div className="noteDate">{note.date}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Notes;
