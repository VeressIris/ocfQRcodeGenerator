<script>
	import MyInput from '$lib/myInput.svelte';

	let firstName = '';
	let lastName = '';
	let userData = '';
	let QRrequest = '';
	let generated = false;

	function capitalizeFirstLetter(string) {
		return string[0].toUpperCase() + string.slice(1);
	}

	async function generateData() {
		userData = `${capitalizeFirstLetter(firstName)}${capitalizeFirstLetter(lastName)}`;

		const data = `https://localhost:5173/server/add?user=${firstName} ${lastName}`;
		QRrequest = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURI(data)}&amp;size=600x600`; // idk why the size doesn't seem to go above 250px, maybe it's an API thing

		console.log(QRrequest);

		generated = true;
	}

	async function downloadImage(imageSrc) {
		const image = await fetch(imageSrc);
		const imageBlog = await image.blob();
		const imageURL = URL.createObjectURL(imageBlog);

		const link = document.createElement('a');
		link.href = imageURL;
		link.download = `${userData}QRcode.png`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
</script>

<h1>Generate a QR code for OCF</h1>
<p>See the following</p>
<form class="flex flex-col justify-center items-center">
	<MyInput label="First Name" bind:text={firstName} />
	<MyInput label="Last Name" bind:text={lastName} />
	<button
		type="submit"
		on:click={generateData}
		class="bg-red-500 text-white py-2 px-3 rounded-lg max-w-52">Generate QR Code</button
	>
</form>

{#if generated}
	<img class="m-12 w-[250px]" src={QRrequest} alt="your QR code" />
	<button
		class="bg-blue-500 text-white py-2 px-3 rounded-lg max-w-52"
		on:click={() => downloadImage(QRrequest)}>Download</button
	>
{/if}
