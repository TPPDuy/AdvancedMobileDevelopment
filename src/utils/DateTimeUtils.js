import moment from 'moment';

export const formatMonthYearType = (millis) => moment(millis).format('DD/MM/YYYY');

export const formatHourType1 = (duration) => `${Math.floor(duration / 60)}h${duration % 60}m`;

export const formatHourType2 = (millisDuration) => moment(millisDuration).format('hh:mm');
