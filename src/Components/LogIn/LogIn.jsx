import styles from './LogIn.module.css';

const LogIn = () => {
  return (
    <div className={styles.container}>
      <h2>No Logic form</h2>
      <form className={styles.form}>
        <label className={styles.email}>
          Gmail:
          <input type='email' placeholder='Gmail' />
        </label>
        <label className={styles.password}>
          Password:
          <input type='password' placeholder='Password' />
        </label>

        <button type='submit'> Login</button>
      </form>
    </div>
  );
};
export default LogIn;
