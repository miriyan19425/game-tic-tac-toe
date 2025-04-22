function Button({handleOnClick, children}){
	return <button type='button' onClick={handleOnClick} className='mark'>{children}</button>;
}

export default Button;
