import './create-modal.styles.scss';
import { useContext } from 'react';
import { useState } from 'react';
import { UserCredentials } from '../../context/usercredentials .context';
import {writeToDatabase} from '../../utils/firebase.utils';



const CreateNoteModal = () => {
    const [titleData,setTitleData] = useState('');
    const [contentData,setContentData] = useState('');
    const {UserCredential} = useContext(UserCredentials);

    
    const userNote = {titleData,contentData};


    const handleNote = async(event)=>{
        event.preventDefault();

        
        const res = async()=>{
            await writeToDatabase(UserCredential,userNote);
            // console.log('done');
        }
           await res();
        }
     

    return (
        <>

        {UserCredential !== null ? (<>{/* // Button trigger modal  */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Note
            </button>
           

            {/* // Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex flex-column">
                            <span>Title:</span>
                            <input required onChange={(e)=> setTitleData(e.target.value)} value={titleData}/>
                            <span>Note:</span>
                            <input required onChange={(e)=> setContentData(e.target.value)} value={contentData}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleNote}>Save </button>
                        </div>
                    </div>
                </div>
            </div></>) : null}
            
        </>
    )
}

export default CreateNoteModal;