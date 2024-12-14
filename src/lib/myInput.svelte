<script>
	export let label = '';
	export let text = '';
</script>

<div class="my-2 flex flex-col">
	<label for="input" class="font-semibold">{label}</label>
	<input
		id="input"
		type="text"
		class="border rounded-md p-1 focus:border-yellow-200 focus:ring-1 focus:ring-yellow-200 focus:outline-none border-orange-100 bg-[#083827]"
		bind:value={text}
	/>
</div>
