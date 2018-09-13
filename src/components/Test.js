import React from 'react';
import Slider from '@material-ui/lab/Slider';

const styles = {
  subheader: {
    textTransform: 'capitalize',
  },
  labelStyleOuter: {
    width: '30px',
    height: '30px',
    borderRadius: '50% 50% 50% 0',
    background: 'black',
    position: 'absolute',
    transform: 'rotate(-45deg)',
    top: '-40px',
    left: '-9px',
  },
  labelStyleInner: {
    transform: 'rotate(45deg)',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    top: '3px',
    right: '0px',
    fontSize: '10px',
  },
};

const Test = ({ radius, onChange }) => (
  <div>
    <Slider
      defaultValue={5 / 100}
      min={0}
      max={1}
      step={5 / 100}
      value={4 / 100}
      onChange={onChange}
      label={
        <div style={styles.labelStyleOuter}>
          <div style={styles.labelStyleInner}>
            {radius}
          </div>
        </div>
      }
    />
  </div>
);

export default Test;