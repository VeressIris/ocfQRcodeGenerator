<script>
	export let label = '';
	export let text = '';
</script>

<div class="my-2 flex flex-col">
	<label for="input">{label}</label>
	<input type="text" class="border-2 rounded-md" bind:value={text} />
</div>
