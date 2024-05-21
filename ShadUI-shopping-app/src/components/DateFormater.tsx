

interface DateFormaterProps {
    isoDate: string
}

const DateFormater: React.FC<DateFormaterProps> = ({ isoDate }) => {
    const formatDate = (isoString: string) => {
        const date = new Date(isoString);

        const day = String(date.getDate()).padStart(2, '0');
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();

        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        const formattedTime = `${String(hours).padStart(2, '0')}:${minutes}${ampm}`;

        return `${day} ${month} ${year} ${formattedTime}`;
    };

    const formattedDate = formatDate(isoDate);

    return (
        <>
        {formattedDate}
        </>
    );
}

export default DateFormater