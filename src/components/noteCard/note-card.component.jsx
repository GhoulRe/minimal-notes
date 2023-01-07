import { deleteTodo } from '../../utils/firebase.utils';
import './note-card.styles.scss';
import { useContext } from 'react';
import { UserCredentials } from '../../context/usercredentials .context';
import {MdDelete} from "react-icons/md";


const NoteCard = ({note}) => {
    const {titleData,contentData,dateS} = note.todo;
    const {uidd} = note;
    const {UserCredential} = useContext(UserCredentials);
    const date = dateS.slice(7,10);
    const month = dateS.slice(4,7);
    const year = dateS.slice(10,16);
    const time = dateS.slice(16,24);

    const handleDelete = ()=>{
      deleteTodo(UserCredential,uidd);
    }

  return (
    <div className=" noteCards" >
    <div className='deleteicon'>
    <span onClick={()=>handleDelete(note)}><MdDelete/></span>
    </div>
  <div className="cartData">
    <h5 className="cardTitle">Title:<span>{titleData}</span></h5>
    <h6 className="cardContent">Note:<span>{contentData}</span></h6>
    <h6 className="cardDate">date: <span>{date} {month} {year}</span></h6>
    <h6 className="cardTime">time: <span>{time}</span></h6>
  </div>
</div>
  )
}

export default NoteCard;