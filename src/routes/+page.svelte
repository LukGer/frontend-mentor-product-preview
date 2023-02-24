<div class="flex max-w-prose flex-col overflow-hidden rounded-xl bg-white md:grid md:grid-cols-2">
	<img
		src="/image-product-desktop.jpg"
		alt="product"
		class="max-h-[15rem] object-cover md:max-h-none"
	/>

	<div class="flex flex-col gap-4 p-6">
		<p class="text-sm uppercase tracking-[0.3rem] text-darkGrayishBlue">Perfume</p>

		<p class="font-serif text-3xl">Gabrielle Essence Eau De Parfum</p>

		<p class="text-sm tracking-wider text-darkGrayishBlue">
			A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for
			the House of CHANEL.
		</p>

		<div class="mt-4 flex flex-row items-center gap-6">
			<p class="font-serif text-3xl text-darkCyan">$149.99</p>
			<p class="text-darkGrayishBlue line-through">$169.99</p>
		</div>

		<div class="flex-1" />

		<button
			class="btn flex h-14 flex-row items-center justify-center gap-4 rounded-xl text-lg text-white transition-colors duration-200"
		>
			<svg width="15" height="16" xmlns="http://www.w3.org/2000/svg" class="scale-125"
				><path
					d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
					fill="#FFF"
				/></svg
			>

			<p>Add to Cart</p>
		</button>
	</div>
</div>

<style>
	.btn {
		--l: 37%;

		background-color: hsl(158, 36%, var(--l));
	}

	.btn:hover {
		--l: 20%;
	}
</style>
