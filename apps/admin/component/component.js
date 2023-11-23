import styles from './component.module.css';
import '@org/lib//common-ui';
import '@org/lib/common-validate';
export function Component(props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Component!</h1>
    </div>
  );
}
export default Component;
