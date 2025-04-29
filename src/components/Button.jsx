function Button({handleOnClick, children, winIndxComb, indx}){
	return <button type='button' 
			onClick={handleOnClick} 
			className={winIndxComb && winIndxComb.includes(indx) ? 'mark win' : 'mark'}
			disabled={winIndxComb !== undefined}>
		     {children}
		</button>;
}

export default Button;
