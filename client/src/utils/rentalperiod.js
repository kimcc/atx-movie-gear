import dayjs from 'dayjs';

export function calculateRentalPeriod (startDate, endDate) {
    const date1 = dayjs(startDate);
    const date2 = dayjs(endDate);

    let rentalPeriod = date2.diff(date1, 'day');

    return rentalPeriod;

}

calculateRentalPeriod();

// export default calculateRentalPeriod;