function areYouPlayingBanjo(name: string) {
	return ["R", "r"].includes(name.charAt(0)) ? `${name} plays banjo` : `${name} does not play banjo`;
}
