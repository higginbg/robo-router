import styles from './styles.module.css';

interface Props {
  onClick: () => void;
  label: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({ onClick, label, type = 'button' }: Props) => (
  <button className={styles.Button} onClick={onClick} type={type}>
    {label}
  </button>
);

export default Button;
