import React from 'react';
import { css, cx } from 'emotion';
import { rem } from 'polished';
import { mqMin, mqMax } from '../../styles/breackpoint';
import Wrapper from '../layout/Wrapper';
import Title from '../atoms/Title';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';

const Reassurance = ({ title, content, logos, ...rest }) => {
  return (
    <div
      className={css({
        padding: `0 ${rem(20)}`,
        margin: `${rem(-50)} 0 0`,
      })}
    >
      <div
        className={css({
          position: 'relative',
          textAlign: 'center',
          borderRadius: rem(13),
          background: color.light,
          boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.15)',
          margin: `0 auto`,
          maxWidth: rem(1040),
          padding: rem(30),
        })}
        {...rest}
      >
        {title && (
          <div
            className={css({
              color: color.clr1,
              fontSize: font.XXL,
              fontFamily: font.secondary,
              '&:not(:last-child)': {
                marginBottom: rem(5),
              },
              [[mqMin[2]]]: {
                fontSize: font.XXXL,
              },
            })}
          >
            {title}
          </div>
        )}
        {content && (
          <p
            className={css({
              color: color.neutralLight,
              '&:not(:last-child)': {
                marginBottom: rem(15),
              },
              [[mqMin[2]]]: {
                fontSize: font.M,
              },
            })}
          >
            {content}
          </p>
        )}
        {logos && (
          <ul
            className={css({
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            })}
          >
            {logos.map(
              (item, index) =>
                item.image.url && (
                  <li
                    key={`${index}-logos`}
                    className={css({
                      margin: rem(10),
                    })}
                  >
                    {item.image.url && (
                      <img
                        src={item.image.url}
                        alt={item.title}
                        width={item.image.dimensions.width || null}
                        height={item.image.dimensions.height || null}
                      />
                    )}
                  </li>
                ),
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Reassurance;
