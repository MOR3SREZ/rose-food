import styles from './SignUp.module.css';

const SignUp = () => {
  return (
    <div className={styles.container}>
      <h2>No Logic form</h2>
      <form className={styles.form}>
        <label className={styles.name}>
          Name:
          <input type='text' placeholder='Name' />
        </label>
        <label className={styles.email}>
          Gmail:
          <input type='email' placeholder='Gmail' />
        </label>
        <label className={styles.password}>
          Password:
          <input type='password' placeholder='Password' />
        </label>

        <button type='submit'> Signup</button>
      </form>
    </div>
  );
};
export default SignUp;
