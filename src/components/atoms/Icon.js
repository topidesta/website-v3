import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'emotion';
import * as color from '../../styles/colors';

export const Types = {
  apple: (
    <path d="M89.9 77.9c-1.4 3.4-3.2 6.6-5.3 9.7-2.8 4-5.1 6.8-6.8 8.4-2.7 2.5-5.7 3.8-8.8 3.9-2.2 0-5-.6-8.1-2-3.2-1.3-6.1-2-8.8-2-2.8 0-5.8.7-9 2s-5.8 2-7.8 2.1c-3 .1-6-1.2-9-4-1.9-1.7-4.3-4.6-7.2-8.7-3.1-4.4-5.6-9.4-7.6-15.2C9.4 65.9 8.3 59.8 8.3 54c0-6.7 1.4-12.5 4.3-17.3 2.2-3.8 5.3-7 9-9.2 3.7-2.2 7.9-3.4 12.2-3.5 2.4 0 5.5.7 9.4 2.2 3.9 1.5 6.4 2.2 7.5 2.2.8 0 3.6-.9 8.3-2.6 4.4-1.6 8.2-2.3 11.3-2 8.3.7 14.6 4 18.7 10-7.4 4.6-11.1 10.9-11 19.1.1 6.4 2.4 11.7 6.9 15.9 2 2 4.3 3.5 6.8 4.5-.6 1.6-1.2 3.1-1.8 4.6zM70.8 2c0 5-1.8 9.7-5.4 14-4.3 5.1-9.6 8.1-15.3 7.6-.1-.6-.1-1.2-.1-1.9 0-4.8 2.1-9.9 5.7-14.1 1.8-2.1 4.2-3.9 7-5.3s5.5-2.2 8-2.3c.1.7.1 1.3.1 2z" />
  ),
  cup: (
    <path d="M73.9 51.2c20.2-6.8 27.6-19.3 25.9-28.7-1.2-6.9-7.2-11.4-14.8-11.3-.2 0-.5.1-.7.2.1-2.1.2-4.1.2-6.3 0-.8-.3-1.5-.8-2.1-.5-.6-1.3-.9-2.1-.9H18.3c-.8 0-1.5.3-2.1.9-.5.6-.8 1.3-.8 2.1.1 2.2.2 4.3.3 6.3-.2-.1-.4-.1-.6-.1C7.4 11.1 1.4 15.6.2 22.5-1.4 32 6 44.5 26.4 51.3c.9 1.1 1.9 2.2 2.8 3.3C34 60.1 39 65.8 39 70.3c0 4.7-4.2 7.5-7.9 10-1 .7-1.9 1.3-2.7 1.9-3.9 3.1-5.9 7.4-5.9 12.9 0 1.6 1.3 2.9 2.9 2.9h50.7c.8 0 1.5-.3 2.1-.9.5-.6.8-1.3.8-2.1-.2-8.1-4.3-11.8-7.7-13.4-1.5-.7-9.1-4.7-9.1-11.3 0-4.7 4.5-10.3 9.4-16.3.8-.9 1.5-1.9 2.3-2.8zM84 16.8c.3.1.7.2 1.1.2 5-.1 8.2 2.4 9 6.4 1 5.7-3.4 13.5-14.7 19.2 2.3-5.6 3.8-14.2 4.6-25.8zM5.9 23.5c.7-4.1 4.2-6.5 9-6.4.4 0 .8 0 1.1-.2.9 11.7 2.4 20.2 4.7 25.8C9.3 36.9 5 29.1 5.9 23.5zm50.5 46.7c0 9.8 9.5 15.2 12.4 16.6 1.4.7 3.3 2 4.1 5.3H28.7c.5-2.2 1.6-4 3.4-5.4.7-.5 1.5-1.1 2.4-1.7C38.7 82.2 45 78 45 70.1c0-6.7-5.5-12.9-11.3-19.5-2-2.3-4.1-4.7-5.9-7-2.5-3.2-5.5-12-6.5-35.8h57.3c-.7 23.3-3.9 32.4-6.4 35.9-1.6 2.2-3.4 4.4-5.1 6.5-5.5 6.9-10.7 13.2-10.7 20z" />
  ),
  download: (
    <path d="M44.6 57.1V6.2C44.6 2.9 47.1 0 50 0s5.8 2.9 5.8 6.2v50.4l11.7-10.8c2.1-2.1 5.4-2.1 7.5.4.8.8 1.7 2.5 1.2 3.8-.4 1.2-.4 3.3-1.2 4.2L55 73.3c-1.2 1.2-2.9 2.1-4.6 1.7-1.7 0-3.3-.4-4.6-1.7L25.4 54.2c-.8-.8-1.7-2.5-1.7-3.8 0-1.7.4-2.9 1.2-3.7 2.1-2.1 5.4-2.5 7.5-.4.1-.1 12.2 10.8 12.2 10.8zM10 87.5h80c3.3 0 5.8 2.9 5.8 6.2S93.3 100 90 100H10c-3.3 0-5.8-2.9-5.8-6.2s2.5-6.3 5.8-6.3z" />
  ),
  externalLink: (
    <path d="M78 100H22C9.9 100 0 90.1 0 78V22C0 9.9 9.9 0 22 0h21.7c3.3 0 6 2.7 6 6s-2.7 6-6 6H22c-5.5 0-10 4.5-10 10v56c0 5.5 4.5 10 10 10h56c5.5 0 10-4.5 10-10V59.6c0-3.3 2.7-6 6-6s6 2.7 6 6V78c0 12.1-9.9 22-22 22zM50 56c-1.5 0-3.1-.6-4.2-1.8-2.3-2.3-2.3-6.1 0-8.5L79.5 12H70c-3.3 0-6-2.7-6-6s2.7-6 6-6h15.6c7.7 0 14 6.3 14 14v16.6c0 3.3-2.7 6-6 6s-6-2.7-6-6v-9.7L54.2 54.2C53.1 55.4 51.5 56 50 56z" />
  ),
  facebook: (
    <path d="M50 100C22.4 100 0 77.6 0 50S22.4 0 50 0s50 22.4 50 50-22.4 50-50 50zm4.6-19.2V54.5h9.1L65 44.2H54.6v-6.5c0-3 .8-5 5.2-5h5.6v-9.2c-1-.1-4.3-.4-8.1-.4-8 0-13.5 4.8-13.5 13.6v7.6h-9.1v10.3h9.1v26.3h10.8z" />
  ),
  github: (
    <path d="M50 0C22.4 0 0 22.9 0 51.3 0 74 14.3 93.1 34.2 99.9c2.5.4 3.4-1.1 3.4-2.4 0-1.2-.1-5.3-.1-9.5-12.6 2.4-15.8-3.1-16.8-6-.6-1.5-3-6-5.1-7.2-1.8-1-4.2-3.3-.1-3.4 3.9-.1 6.8 3.7 7.7 5.3 4.5 7.8 11.7 5.6 14.6 4.2.4-3.3 1.8-5.6 3.2-6.9-11.1-1.3-22.8-5.7-22.8-25.3 0-5.6 1.9-10.2 5.1-13.8-.5-1.3-2.2-6.5.5-13.6 0 0 4.2-1.3 13.8 5.3 4-1.2 8.2-1.7 12.5-1.7s8.5.6 12.5 1.7c9.6-6.7 13.8-5.3 13.8-5.3 2.8 7 1 12.3.5 13.6C80.1 38.5 82 43 82 48.7c0 19.7-11.7 24-22.8 25.3 1.8 1.6 3.4 4.7 3.4 9.5 0 6.9-.1 12.4-.1 14.1 0 1.3.9 2.9 3.4 2.4C85.7 93.2 100 74 100 51.4 100 22.9 77.6 0 50 0z" />
  ),
  instagram: (
    <path d="M50 100C22.4 100 0 77.6 0 50S22.4 0 50 0s50 22.4 50 50-22.4 50-50 50zm0-74.2c7.9 0 8.8 0 12 .2 2.9.1 4.4.6 5.5 1 1.3.5 2.4 1.2 3.4 2.2 1 1 1.7 2.1 2.2 3.4.4 1 .9 2.6 1 5.5.1 3.1.2 4.1.2 12s0 8.8-.2 12c-.1 2.9-.6 4.4-1 5.5-1 2.6-3 4.6-5.6 5.6-1 .4-2.6.9-5.5 1-3.1.1-4.1.2-12 .2s-8.8 0-12-.2c-2.9-.1-4.4-.6-5.5-1-1.3-.5-2.4-1.2-3.4-2.2-1-1-1.7-2.1-2.2-3.4-.4-1-.9-2.6-1-5.5-.1-3.1-.2-4.1-.2-12s0-8.8.2-12c.1-2.9.6-4.4 1-5.5.5-1.3 1.2-2.4 2.2-3.4 1-1 2.1-1.7 3.4-2.2 1-.4 2.6-.9 5.5-1 3.2-.2 4.1-.2 12-.2zm0-5.4c-8 0-9 0-12.2.2-3.1.1-5.3.6-7.2 1.4-2 .7-3.8 1.9-5.2 3.4-1.5 1.5-2.7 3.3-3.4 5.2-.7 1.9-1.2 4-1.4 7.2-.1 3.2-.2 4.2-.2 12.2s0 9 .2 12.2c.1 3.1.6 5.3 1.4 7.2.7 2 1.9 3.8 3.4 5.2 1.5 1.5 3.3 2.7 5.2 3.4 1.9.7 4 1.2 7.2 1.4 3.2.1 4.2.2 12.2.2s9 0 12.2-.2c3.1-.1 5.3-.6 7.2-1.4 4-1.5 7.1-4.7 8.6-8.6.7-1.9 1.2-4 1.4-7.2.1-3.2.2-4.2.2-12.2s0-9-.2-12.2c-.1-3.1-.6-5.3-1.4-7.2-.7-2-1.9-3.8-3.4-5.2-1.5-1.5-3.3-2.7-5.2-3.4-1.9-.7-4-1.2-7.2-1.4-3.2-.1-4.2-.2-12.2-.2zm0 14.4c-8.4 0-15.2 6.8-15.2 15.2S41.6 65.2 50 65.2 65.2 58.4 65.2 50 58.4 34.8 50 34.8zm0 25.1c-5.4 0-9.9-4.4-9.9-9.9s4.4-9.9 9.9-9.9c5.4 0 9.9 4.4 9.9 9.9 0 5.4-4.5 9.9-9.9 9.9zm15.8-22.1c2 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5c-2 0-3.5 1.6-3.5 3.5s1.5 3.5 3.5 3.5z" />
  ),
  link: (
    <path d="M50 0c27.6 0 50 22.4 50 50s-22.4 50-50 50S0 77.6 0 50 22.4 0 50 0zm16.8 45.7c-1.1 1.1-1.1 3 0 4.2 1.1 1.1 3 1.1 4.2 0l2.1-2.1c5.7-5.7 5.7-15.1 0-20.8-5.7-5.7-15.1-5.7-20.8 0L43 36.3c-5.7 5.7-5.7 15.1 0 20.8 1.1 1.1 3 1.1 4.2 0 1.1-1.1 1.1-3 0-4.2-3.4-3.4-3.4-9 0-12.5l9.3-9.3c3.4-3.4 9-3.4 12.5 0 3.4 3.4 3.4 9 0 12.5l-2.2 2.1zm-33.6 8.6c1.1-1.1 1.1-3 0-4.2-1.1-1.1-3-1.1-4.2 0l-2.1 2.1c-5.7 5.7-5.7 15.1 0 20.8 5.7 5.7 15.1 5.7 20.8 0l9.3-9.3c5.7-5.7 5.7-15.1 0-20.8-1.1-1.1-3-1.1-4.2 0-1.1 1.1-1.1 3 0 4.2 3.4 3.4 3.4 9 0 12.5l-9.3 9.3c-3.4 3.4-9 3.4-12.5 0-3.4-3.4-3.4-9 0-12.5l2.2-2.1z"/>
  ),
  linux: (
    <path d="M88.7 80.3c-2.8-1.2-4-2.8-3.9-5.2.1-2.8-1.4-4.8-2.1-5.6.4-1.7 1.7-7.7 0-12.9-1.8-5.6-7.4-14-13.2-22.4-2.4-3.4-2.5-7.1-2.6-11.4-.1-4.1-.3-8.8-2.5-13.9C61.9 3.2 57.1 0 51.1 0 47.5 0 43.8 1.2 41 3.2c-5.8 4.1-5 13.1-4.5 19.1.1.8.1 1.6.2 2.2.3 5.8 0 8.9-.4 9.9-.3.6-1.5 2.3-2.9 4.2-1.4 1.9-3 4.1-4.3 6.1-1.5 2.4-2.8 6.1-4 9.7-.9 2.6-1.7 5.1-2.5 6.6-1.1 2.1-1.4 4.5-.8 6.7-.6.4-1.4 1.2-2.1 2.8-.9 1.9-2.6 2.9-6.2 3.6-1.7.4-2.8 1.1-3.4 2.2-.9 1.6-.4 3.5 0 4.9.6 2 .2 3.2-.5 5.5-.2.5-.4 1.1-.6 1.8-.3.9-.2 2 .3 2.8 1.4 2.2 5.4 2.9 9.5 3.4 2.5.3 5.2 1.3 7.8 2.3 2.6 1 5.2 2 7.6 2.3.4 0 .7.1 1.1.1 2.4 0 4.7-1.3 5.8-3.5 3.4-.7 6.9-1.1 10.4-1.3 4.6-.1 9.1.8 10.3 1.1.4.8 1.4 2.6 3.1 3.5.9.5 2.2.8 3.5.8 1.4 0 4.1-.3 6.2-2.6 2.1-2.3 7.3-5.2 11.2-7.4.9-.5 1.7-.9 2.4-1.3 2.2-1.2 3.3-3 3.2-4.8-.3-1.7-1.3-3-2.7-3.6zM41 79.8c-.3-2-2.7-3.9-5.5-6.1-2.3-1.8-4.9-3.9-5.6-5.7-1.5-3.6-.3-10 1.7-13.3 1-1.6 1.8-4.1 2.6-6.6.9-2.6 1.7-5.3 2.7-6.5 1.6-1.8 3-5.4 3.3-8.3 1.5 1.5 3.8 3.3 5.9 3.3.3 0 .6 0 .9-.1 1.4-.4 3.6-1.7 5.6-2.9 1.8-1.1 4-2.4 4.8-2.5C58.8 33.2 67 52 67.8 58c.5 3.4.3 6.9-.4 10.3-.3 0-.6-.1-1-.1-2.3 0-2.9 1.3-3 2.1-.4 2-.4 8.4-.5 9.8-.8 1.1-5 6.2-11 7.1-2.4.4-4.7.6-6.8.6-1.8 0-2.9-.1-3.3-.2L39 84c1.2-.6 2.4-1.8 2-4.2zM44.9 21c-.1 0-.2.1-.3.1 0-.2 0-.4-.1-.6-.3-2-1.6-3.4-3-3.4h-.3c-.8.1-1.5.8-1.8 1.7.3-2 1.4-3.5 2.7-3.5 1.5 0 2.8 2.1 2.8 4.7v1zm11.9 1.5c.1-.5.2-1 .2-1.5 0-2.3-1.4-4.1-3.2-4.1-1.8 0-3.2 1.8-3.2 4.1v.5c-.1 0-.2-.1-.3-.1-.2-.6-.3-1.3-.3-2 0-2.7 1.7-5 3.8-5 2.1 0 3.8 2.2 3.8 5 0 1.2-.3 2.3-.8 3.1zm-1.5 5.4c0 .1-.1.2-.8.6-.4.2-.8.4-1.4.8l-.4.2c-1.5.9-5 3.1-5.9 3.3-.6.1-1-.2-1.9-.8-.2-.2-.4-.3-.6-.4-1.6-1.1-2.7-2.3-2.8-2.8.5-.4 1.8-1.5 2.5-2.1 1.4-1.3 2.7-2.2 3.4-2.2h.1c.8.1 2.8 1 4.2 1.5.7.3 1.2.5 1.6.7 1.2.4 1.9 1 2 1.2zM66.6 89c.7-3.3 1.5-7.9 1.4-10.6 0-.6-.1-1.3-.1-1.9-.1-1.2-.2-3-.1-3.5h.1c0 1.5.3 4.6 2.7 5.6.7.3 1.5.5 2.4.5 2.4 0 5-1.2 6.1-2.3.6-.7 1.2-1.5 1.5-2.1.1.3.1.7.1 1-.1 2.3.9 5.3 2.9 6.4l.3.2c.7.4 2.6 1.4 2.7 1.9 0 0 0 .1-.1.2-.5.5-2.2 1.3-3.8 2.2-2.9 1.5-6.2 3.3-7.6 4.9-2.1 2.3-4.4 3.8-5.8 3.8-.2 0-.3 0-.5-.1-1.6-.6-2.8-2.9-2.2-6.2zm-52.2-8.5c-.2-.8-.3-1.4-.1-1.9.1-.4 2.1-.9 3-1.1 1.2-.3 2.5-.6 3.3-1.1 1.1-.7 1.7-2 2.3-3.1.4-.8.8-1.7 1.3-2h.1c.9 0 2.8 2 3.9 3.7.3.4.8 1.3 1.4 2.3 1.8 3 4.2 7.2 5.4 8.6 1.1 1.3 3 3.7 2.5 5.8-.3 1.6-2.1 2.9-2.5 3.2-.2 0-.4.1-.6.1-2.4 0-7.2-2.1-9.7-3.2l-.4-.2c-1.4-.6-3.8-1-6-1.4-1.8-.3-4.3-.7-4.7-1.1-.3-.4.1-1.6.4-2.7.2-.8.5-1.6.6-2.5.2-1.4 0-2.5-.2-3.4z" />
  ),
  medium: (
    <path d="M50 100c27.6 0 50-22.4 50-50S77.6 0 50 0 0 22.4 0 50s22.4 50 50 50zM26.5 37.1c.1-.8-.2-1.5-.8-2.1L20 28v-1.1h17.8l13.8 31 12.1-31h17V28l-4.9 4.8c-.4.3-.6.9-.5 1.4v35.4c-.1.5.1 1.1.5 1.4l4.8 4.8v1.1H56.5v-1.1l5-4.9c.5-.5.5-.6.5-1.4V40.9L48.2 76.8h-1.9L30.2 40.9V65c-.1 1 .2 2 .9 2.8l6.5 8v1.1H19.2v-1.1l6.5-8c.7-.7 1-1.8.8-2.8V37.1z" />
  ),
  station: (
    <path d="M50 66.7c14.9 0 27-12.3 27-27.5S64.9 11.7 50 11.7 23 24 23 39.2s12.1 27.5 27 27.5zm0 11.8c-21.3 0-38.6-17.6-38.6-39.3C11.4 17.5 28.7-.1 50-.1s38.6 17.6 38.6 39.3c0 21.7-17.3 39.3-38.6 39.3zM21 90.2h58v9.8H21v-9.8z" />
  ),
  twitter: (
    <path d="M50 100C22.4 100 0 77.6 0 50S22.4 0 50 0s50 22.4 50 50-22.4 50-50 50zm-8.8-23.1C63 76.9 74.9 57.7 74.9 41v-1.6c2.3-1.8 4.3-4 5.9-6.5-2.1 1-4.4 1.7-6.8 2 2.4-1.6 4.3-4 5.2-7-2.3 1.4-4.8 2.5-7.5 3.1-2.2-2.5-5.2-4-8.6-4-6.5 0-11.8 5.7-11.8 12.6 0 1 .1 2 .3 2.9-9.8-.5-18.6-5.6-24.4-13.2-1 1.9-1.6 4-1.6 6.3 0 4.4 2.1 8.2 5.3 10.5-1.9-.1-3.8-.6-5.4-1.6v.2c0 6.1 4.1 11.2 9.5 12.4-1 .3-2 .4-3.1.4-.8 0-1.5-.1-2.2-.2 1.5 5 5.9 8.7 11.1 8.8-4.1 3.4-9.2 5.4-14.7 5.4-1 0-1.9-.1-2.8-.2 5 3.5 11.2 5.6 17.9 5.6z" />
  ),
  windows: (
    <path d="M0 14l40.9-5.6v39.4L0 48.1V14zm40.8 38.4v39.5L0 86.3V52.2l40.8.2zm5-44.6l54.2-8v47.6l-54.2.4v-40zm54.2 45v47.3l-54.2-7.6-.1-39.8 54.3.1z" />
  ),
};

export const Colors = {
  light: color.light,
  neutral: color.neutral,
  neutral: color.neutral,
  clr1Light: color.clr1Light,
  clr1: color.clr1,
  clr1Dark: color.clr1Dark,
  clr2: color.clr2,
  clr3: color.clr3,
  clr4: color.clr4,
};

const Icon = ({ type, color, size, className, ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox={'0 0 100 100'}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={cx(
      className,
      css({
        'path,polygon,rect,circle': {
          fill: Colors[color],
        },
      }),
    )}
    {...rest}
  >
    {Types[type]}
  </svg>
);
Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.oneOf(Object.keys(Colors)),
  type: PropTypes.oneOf(Object.keys(Types)),
};
Icon.defaultProps = {
  type: 'externalLink',
  color: 'neutral',
  size: 20,
};

export default Icon;
