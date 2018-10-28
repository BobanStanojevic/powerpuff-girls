// groups array of objects by given parameter
function groupBy<T>(arr: T[], callback: (item: T) => string | number): { [key: string]: T[] } {
	return arr.reduce((groups, item) => {
		const val = callback(item).toString();
		groups[val] = groups[val] || [];
		groups[val].push(item);
		return groups;
	}, {});
}

export { groupBy };