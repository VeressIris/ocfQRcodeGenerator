export async function GET({ url }) {
	const user = url.searchParams.get('user');

	try {
		const payload = JSON.stringify({ nume: user });

		const response = await fetch(
			'https://script.google.com/macros/s/AKfycbwNZJSpOI0BTn9pZaiwETtXJOctmwMxOvr4iQfy3Y8328CCpFJTDhsxc8Z6gRATzSVBSQ/exec',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: payload
			}
		);

		const result = await response.json();
		if (response.ok) {
			console.log('Success!', result);
			return new Response(`Added ${user}`);
		} else {
			console.error('Error!', result);
			return new Response('error');
		}
	} catch (error) {
		console.error('Fetch Error!', error.message);
		return new Response('error');
	}
}
