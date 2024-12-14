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

		const data = `https://ocf-qr-code.vercel.app/server/add?user=${firstName} ${lastName}`;
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

<h1 class="mb-3 text-center text-yellow-200">Coduri voluntari OCF</h1>
<p>Generează-ți codul de voluntar!</p>
<form class="mt-3 flex flex-col justify-center items-center">
	<MyInput label="Nume" bind:text={lastName} />
	<MyInput label="Prenume" bind:text={firstName} />
	<button
		type="submit"
		on:click={generateData}
		class="bg-red-100 mt-3 font-semibold hover:bg-red-200 active:bg-red-300 py-2 px-3 rounded-lg max-w-52"
		>Generează</button
	>
</form>

{#if generated}
	<h3 class="mt-8 text-yellow-200">
		Acesta este codul tau.<br /> Nu uita sa il descarci!
	</h3>
	<img class="my-4 w-[250px]" src={QRrequest} alt="your QR code" />
	<button
		class="bg-orange-400 font-semibold hover:bg-orange-500 active:bg-orange-600 text-white py-2 px-3 rounded-lg max-w-52 hover:pointer"
		on:click={() => downloadImage(QRrequest)}>Download</button
	>
{/if}
