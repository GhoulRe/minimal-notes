import { createContext,useState } from "react";


export const NoteContext = createContext({
  noteData: null,
  setNoteData: ()=> {},
});

export const NoteProvider = ({children})=>{
    const [noteData, setNoteData] = useState(null);
    const value = {noteData,setNoteData};
    
    return(
        <NoteContext.Provider value={value}>
            {children}
        </NoteContext.Provider>
    )
}