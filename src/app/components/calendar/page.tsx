import RC from "react-calendar"
import 'react-calendar/dist/Calendar.css';
interface CalendarProps {
    onChange(date?:any): void;
    date?: Date;
}

enum TileClasses {
    'BOOKED',
    'AVAILABLE',
    'UNAVAILABLE'
}

function tileDisabled({date, view}:any) {
    return false;
}

async function getCalendarData() {

    const res = await fetch('http://localhost:3000/cal').then((res) => {
        console.log(res);
        return res;
    }).catch((err) => {
        console.log(err);
    });
    // const data = await res.json();
    // return data;
}
export default function Calendar(props:CalendarProps) {
   

    return (
        <RC onChange={props.onChange} value={props.date} tileClassName={'red'} tileDisabled={tileDisabled}/>
    )
}