<script>
	import MyInput from '$lib/myInput.svelte';

	let firstName = '';
	let lastName = '';
	let requestData = '';
	let request = '';
	let generated = false;

	function capitalizeFirstLetter(string) {
		return string[0].toUpperCase() + string.slice(1);
	}

	async function generateData() {
		requestData = `${capitalizeFirstLetter(firstName)}${capitalizeFirstLetter(lastName)}`;
		request = `https://api.qrserver.com/v1/create-qr-code/?data=${requestData}&amp;size=100x100`;
		generated = true;
	}

	async function downloadImage(imageSrc) {
		const image = await fetch(imageSrc);
		const imageBlog = await image.blob();
		const imageURL = URL.createObjectURL(imageBlog);

		const link = document.createElement('a');
		link.href = imageURL;
		link.download = `${requestData}QRcode.png`;
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
	<img class="m-12" src={request} alt="your QR code" />
	<button
		class="bg-blue-500 text-white py-2 px-3 rounded-lg max-w-52"
		on:click={() => downloadImage(request)}>Download</button
	>
{/if}
