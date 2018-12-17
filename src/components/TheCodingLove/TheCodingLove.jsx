import React from 'react';
import PropTypes from 'prop-types';
import style from './theCodingLove.css';

const TheCodingLove = ({ title, gif }) => (
  <div className={style.container}>
    <h1>{title}</h1>
    <img alt={title} className={style.img} src={gif} />
  </div>
);
TheCodingLove.propTypes = {
  title: PropTypes.string,
  gif: PropTypes.string,
};

export default TheCodingLove;
