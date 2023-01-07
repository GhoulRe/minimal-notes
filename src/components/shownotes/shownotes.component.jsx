import { useContext } from "react";
import { NoteContext } from '../../context/note.context';
import NoteCard from "../noteCard/note-card.component";
import './shownotes.styles.scss';

const ShowNotes = () => {
    const { noteData } = useContext(NoteContext);
    return (
        <div className="cards-main-div">
            {noteData && noteData.map((note,index) => (
                <NoteCard key={`${note.titleData}` + index} note={note} />
            ))}
        </div>
    )
}

export default ShowNotes;


