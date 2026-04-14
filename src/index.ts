export default {
	async fetch(request, env) {
		const inputs = {
			prompt: "cat on aerostat, sunset, big and long buildings, 4k quality, realism",
		};

		const response = await env.AI.run(
			"@cf/stabilityai/stable-diffusion-xl-base-1.0",
			inputs,
		);

		return new Response(response, {
			headers: {
				"content-type": "image/png",
			},
		});
	},
} satisfies ExportedHandler<Env>;
