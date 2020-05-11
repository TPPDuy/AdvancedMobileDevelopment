import moment from 'moment';

export const formatMonthYearType = (millis) => moment(millis).format('DD/MM/YYYY');

export const formatHourType = (duration) => `${Math.floor(duration / 60)}h${duration % 60}m`;
