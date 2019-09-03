import React from 'react';
import { connect } from 'dva';

import styles from './IndexPage.css';
import utils from '../utils/index';

const { deepClone, isArray, isObj } = utils;
function IndexPage() {

  const obj = {
    name: 'hobbin',
    age: 18,
    info: {
      address: 'hangzhou',
      email: 'hobbin@163.com',
      phone: {
        dalian: '1884265****',
        hz: '186******929',
      }
    },
  }
  // obj.obj = obj;

  const newObj = deepClone(obj);
  // console.log(newObj);
  // obj.age= 19;
  // obj.info.address = 'dalian ';
  // obj.info.phone.hz = '1111111';
  // console.log(obj);
  // console.log(newObj);
  // console.log(isObj([1,2,3]));

  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
