import Modal from 'react-modal';
import { FormEvent, useState, useMemo, useEffect} from 'react'; 
import { addDays, addHours, differenceInSeconds} from 'date-fns';
import DatePicker, {registerLocale} from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

import es from 'date-fns/locale/es';
import { useUiStore } from '../../hooks/useUiStore';
import { useCalendarStore } from '../../hooks/useCalendarStore';
import { startSavingEvent } from '../../Redux/store/calendar/thunks';
import { useAppDispatch } from '../../Redux/Hooks/TypedHooks';
import { event } from '../../Redux/store/calendar/calendarSlice';

registerLocale('es', es);

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');


  export type form = {

    title: string,
    notes: string,
    start: Date,
    end: Date
  }


export const CalendarModal = () => {

    const dispatch = useAppDispatch(); 

    const {isDateModalOpen, closeDateModal} = useUiStore();

    const {activeEvent} = useCalendarStore();

    const [formSubmited, setFormSubmited] = useState<boolean>(false)

    const [formValue, setFormValues] = useState<form>({

        title: 'Christian',
        notes: 'Probando el Date Picker',
        start: new Date(),
        end: addHours(new Date(), 24)

    });

    const onFormChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    
    
       const {value, name} = event.target;

       setFormValues({
        ...formValue,
        [name]: value
       });
    }

    const onDateChange = (event:Date | null, changing: 'start' | 'end') => {

        setFormValues({
            ...formValue,
            [changing]: event

        });
    }


    useEffect(() => {
      if(activeEvent !== null){

        setFormValues({...activeEvent})
        console.log(formValue);
      }
    
      
    }, [activeEvent])
    


    const titleCheck =  useMemo(() => {

        if(!formSubmited) return '';

        return (formValue.title.length > 0) ? '' : 'is-invalid'

    }, [formValue.title, formSubmited])


    const onSubmit = (event:FormEvent) => {

        event.preventDefault();

        setFormSubmited(true);

        const difference = differenceInSeconds(formValue.end, formValue.start);
        
        if(isNaN(difference) || difference <= 0) {
            console.log('Error en las fechas');
            Swal.fire('Nota No actualizada', 'Revisar las fechas ingresadas', 'error');

            return;
        }
        
        if(formValue.title.length <= 0) return;

        console.log(formValue);

        const object:event = {
            ...formValue,
            bgColor: '#asdasd',
            user: {
                _id: 'asdasd',
                name: 'Salomon'
            }
        }

        dispatch(startSavingEvent(object));

        closeDateModal();

        setFormSubmited(false);


    }


  return (
    <Modal
     isOpen={isDateModalOpen}
     onRequestClose={() => closeDateModal()}
     style={customStyles}
     contentLabel="Example Modal"
     className="modal"
     overlayClassName="modal-fondo"
     closeTimeoutMS={200}   
     >
        <h1> Nuevo evento </h1>
        <hr />
        <form className="container" onSubmit={onSubmit}>
            <div className='d-flex flex-column mb-2'>           
                <label>Fecha y hora inicio</label>
                <DatePicker
                    className='form-control'
                    selected={formValue.start}                
                    onChange={(date) => onDateChange(date, 'start')} 
                    showTimeSelect={true}
                    locale='es'
                    timeCaption='Hora'
                    dateFormat='Pp'
                />  
            </div>

            <div className="d-flex flex-column mb-2">
                <label>Fecha y hora fin</label>
                <DatePicker
                    className='form-control'
                    selected={formValue.end}
                    minDate={formValue.start}
                    maxDate={addDays(formValue.start, 90)}               
                    onChange={(date) => onDateChange(date, 'end')}
                    showTimeSelect={true}
                    locale='es'
                    timeCaption='Hora'
                    dateFormat='Pp'
                />  
            </div>

            <hr />
            <div className="form-group mb-2">
                <label>Titulo y notas</label>
                <input 
                    type="text" 
                    className={`form-control ${titleCheck}`}
                    placeholder="Título del evento"
                    name="title"
                    autoComplete="off"
                    value={formValue.title}
                    onChange={(event) => onFormChange(event)}
                />
                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

            <div className="form-group mb-2">
                <textarea                     
                    className="form-control"
                    placeholder="Notas"
                    rows={5}
                    name="notes"
                    value={formValue.notes}
                    onChange={(event) => onFormChange(event)}
                ></textarea>
                <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>

        </form> 
    </Modal>


  )
}
