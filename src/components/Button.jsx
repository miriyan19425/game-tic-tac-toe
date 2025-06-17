import styles from './Button.module.css';

function Button({handleOnClick, children, winIndxComb, indx}){
	return <button type='button' 
			onClick={handleOnClick} 
			className={children === 'New Game' ? styles.new : winIndxComb && winIndxComb.includes(indx) ? `${styles.mark} ${styles.win}` : styles.mark}
			disabled={winIndxComb !== undefined}>
		     {children}
		</button>;
}

export default Button;
