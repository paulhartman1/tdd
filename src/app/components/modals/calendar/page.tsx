import { Modal } from "@nextui-org/react";
import React, {useState} from "react";
import Calendar from '@/app/components/calendar/page';
interface CalendarModalProps {
    open: boolean;
    onClose(): void;
}


export default function CalendarModal(props:CalendarModalProps) {

    const [show, setShow] = useState('Paul was here');

    
    return(<Modal
        closeButton
        aria-labelledby="modal-title"
        open={props.open}
        onClose={props.onClose}
      >
        <Modal.Body>
          <Calendar />
        </Modal.Body>
        </Modal>);
}