import React,{useEffect} from 'react';
import styles from '../../styles/modules/validations.module.scss';
import check from'../../assets/check.svg'
import cross from'../../assets/cross.svg'

import {
  validationA,
  validationB,
  validationC,
  validationD,
  validationE,
  validationF,
  validationG,
  validationH,
  validationAll,
} from './utils';
const Validations = ({ password, setStrongPassword }) => {

  useEffect(() => {
    setStrongPassword(validationAll(password));
    console.log(validationAll(password));
  }, [password]);

  return (
    <div className={styles.container}>
      <div className={styles.conditions}>
        <h1 className={styles.title}>Your password must meet all the conditions</h1>
        <div className={styles.conditionsContainer}>
          <img className={`${styles.image} ${validationA(password)? styles['image-check']:styles['image-cross']}`} src={validationA(password)? check:cross} alt="check" />
          <p
            className={
              validationA(password)
                ? styles['correct-password']
                : styles['incorrect-password']
            }
          >
            Must contain at least 16 characters
          </p>
        </div>
        <div className={styles.conditionsContainer}>
          <img className={`${styles.image} ${validationB(password)? styles['image-check']:styles['image-cross']}`} src={validationB(password)? check:cross} alt="check" />
          <p
            className={
              validationB(password)
                ? styles['correct-password']
                : styles['incorrect-password']
            }
          >
            Must contain at least one lowercase letter and at least one uppercase
            letter
          </p>
        </div>
        <div className={styles.conditionsContainer}>
          <img className={`${styles.image} ${validationC(password)? styles['image-check']:styles['image-cross']}`} src={validationC(password)? check:cross} alt="check"/>
          <p
            className={
              validationC(password)
                ? styles['correct-password']
                : styles['incorrect-password']
            }
          >
            You can't have two consecutive identical letters
          </p>
        </div>
        <div className={styles.conditionsContainer}>
          <img className={`${styles.image} ${validationD(password)? styles['image-check']:styles['image-cross']}`} src={validationD(password)? check:cross} alt="check"/>
          <p
            className={
              validationD(password)
                ? styles['correct-password']
                : styles['incorrect-password']
            }
          >
            Must contain at least 4 (four) numbers
          </p>
        </div>
        <div className={styles.conditionsContainer}>
          <img className={`${styles.image} ${validationE(password)? styles['image-check']:styles['image-cross']}`} src={validationE(password)? check:cross} alt="check"/>
          <p
            className={
              validationE(password)
                ? styles['correct-password']
                : styles['incorrect-password']
            }
          >
            You can't have two consecutive identical numbers
          </p>
        </div>
        <div className={styles.conditionsContainer}>
          <img className={`${styles.image} ${validationF(password)? styles['image-check']:styles['image-cross']}`} src={validationF(password)? check:cross} alt="check"/>
          <p
            className={
              validationF(password)
                ? styles['correct-password']
                : styles['incorrect-password']
            }
          >
            Must contain at least 2 (two) special characters (!@#$%ˆ&*-_+=?) without repeating and
            cannot be consecutive
          </p>
        </div>
        <div className={styles.conditionsContainer}>
          <img className={`${styles.image} ${validationG(password)? styles['image-check']:styles['image-cross']}`} src={validationG(password)? check:cross} alt="check"/>
          <p
            className={
              validationG(password)
                ? styles['correct-password']
                : styles['incorrect-password']
            }
          >
            Can't contain the number 0
          </p>
        </div>
        <div className={styles.conditionsContainer}>
          <img className={`${styles.image} ${validationH(password)? styles['image-check']:styles['image-cross']}`} src={validationH(password)? check:cross} alt="check"/>
          <p
            className={
              validationH(password)
                ? styles['correct-password']
                : styles['incorrect-password']
            }
          >
            Cant't contain spaces
          </p>
        </div>
      </div>
    </div>
  );
};

export default Validations;
