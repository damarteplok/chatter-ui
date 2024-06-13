import Auth from './Auth';
import { Link } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import { useCreateUser } from '../../hooks/useCreateUser';
import { useState } from 'react';
import { extractErrorMessage } from '../../utils/error';
import { useLogin } from '../../hooks/useLogin';

const Signup = () => {
	const [createUser] = useCreateUser();
	const [error, setError] = useState('');
	const { login } = useLogin();

	return (
		<Auth
			submitLabel={'Signup'}
			error={error}
			onSubmit={async ({ email, password }) => {
				try {
					await createUser({
						variables: {
							createUserInput: {
								email,
								password,
							},
						},
					});
					await login({ email, password });
					setError('');
				} catch (err) {
					const errorMessage = extractErrorMessage(err);
					if (errorMessage) {
						setError(errorMessage);
						return;
					}
					setError('Unknown error occured');
				}
			}}
		>
			<Link to={'/login'} style={{ alignSelf: 'center' }}>
				<MUILink>login</MUILink>
			</Link>
		</Auth>
	);
};

export default Signup;