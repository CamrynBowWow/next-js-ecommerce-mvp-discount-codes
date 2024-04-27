export async function isValidPassword(password: string, hashedPassword: string) {
	return (await hashPassword(password)) === hashedPassword;
}

async function hashPassword(passwords: string) {
	const arrayBuffer = await crypto.subtle.digest('SHA-512', new TextEncoder().encode(passwords));

	return Buffer.from(arrayBuffer).toString('base64');
}
