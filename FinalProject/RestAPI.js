export default async function RestAPI(link) {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization:
				"Bearer l1AHImUuiLONKH1ZunbohtYVV79niSAdN0yp1I8KPBSZdekFSHcZHHbunilR",
		},
		body: JSON.stringify({ url: link }),
	};
	try {
		const response = await fetch(
			`https://api.tinyurl.com/create`,
			requestOptions,
		);
		if (!response.ok) {
			throw new Error("Error in fetch: " + response.statusText);
		}
		const data = await response.json();
		console.log(data.data.tiny_url);
		return data;
	} catch (err) {
		console.error(err);
	}
}
