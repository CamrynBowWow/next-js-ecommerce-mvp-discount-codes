export function UseWait(duration: number) {
	return new Promise((resolve) => setTimeout(resolve, duration));
}
