<script>
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex justify-center items-center flex-col my-8 mx-18">
	{@render children()}
</div>
