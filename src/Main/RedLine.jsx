import React from 'react';
import moment from 'moment';
import './redline.scss';

const hour = +moment().format('HH');
const minute = +moment().format('mm');
const margin = hour * 60 + minute;

const Redline = () => (
  <div className="redline" style={{ top: `${margin}px` }} />
);

export default Redline;
