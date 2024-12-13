<script>
	import MyInput from '$lib/myInput.svelte';

	let firstName = '';
	let lastName = '';
	let requestData = '';

	function capitalizeFirstLetter(string) {
		return string[0].toUpperCase() + string.slice(1);
	}

	function generateData() {
		requestData = `${capitalizeFirstLetter(firstName)}${capitalizeFirstLetter(lastName)}`;
		console.log(requestData);
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
<img
	src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100"
	alt=""
	title=""
/>
