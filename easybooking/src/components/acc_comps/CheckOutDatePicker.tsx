import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

interface CODPProps {
    checkOutText: string | undefined;
    checkOutDate: Date | null;
    updateCheckOutDate: (date: Date | null) => void;
}

export const CheckOutDatePicker = (
    { checkOutText, checkOutDate, updateCheckOutDate}: CODPProps
) => {

    return (
        <>
            <DatePicker
                selected={checkOutDate}
                value={checkOutText}
                onChange={ (e) => { updateCheckOutDate(e) } }
                onFocus={(e) => { e.target.blur()}}
                className="w-00 merge-input"
                minDate={new Date()}
                showIcon={true}
            />
        </>
    )
}