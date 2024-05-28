<script lang="ts">
	import { Dialog, Separator, Label } from 'bits-ui';
	import { X } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	import * as m from '$lib/paraglide/messages.js';
</script>

<div class="flex w-full flex-row gap-2 md:justify-end">
	<Dialog.Root>
		<Dialog.Trigger
			class="easy-in h-10 rounded-full border px-4 text-sm transition-all duration-200 text-surface-950-50 border-surface-200-800 hover:border-surface-300-700"
		>
			{m.letterOfRecommendation()}
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay
				transition={fade}
				transitionConfig={{ duration: 300 }}
				class="fixed inset-0 z-50 bg-surface-950/80"
			/>
			<Dialog.Content
				class="rounded-card-lg bg-background shadow-popover fixed left-[50%] top-[50%] z-50 h-full w-full max-w-[1000px] translate-x-[-50%] translate-y-[-50%] p-5 outline-none md:max-h-[94%]"
			>
				<Dialog.Title class="text-2xl font-bold text-surface-100"
					>{m.letterOfRecommendation()}</Dialog.Title
				>
				<Separator.Root class="bg-muted -mx-5 mb-6 mt-5 block h-px" />

				<iframe
					class="h-[94%] overflow-hidden rounded-xl"
					title="Empfehlungsschreiben"
					src="/Empfehlungsschreiben_Eden-Academy_Micha-Mailaender.pdf"
					width="100%"
					style="border: none;"
				>
				</iframe>

				<Dialog.Close
					class="focus-visible:ring-foreground focus-visible:ring-offset-background active:scale-98 absolute right-5 top-5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
				>
					<div>
						<button type="button" class="btn-icon preset-filled-surface-50-950"
							><X class="text-foreground " /></button
						>

						<span class="sr-only">Close</span>
					</div>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>

	<Dialog.Root>
		<Dialog.Trigger
			class="easy-in h-10 rounded-full border px-4 text-sm transition-all duration-200 text-surface-950-50 border-surface-200-800 hover:border-surface-300-700"
		>
			{m.jobReference()}
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay
				transition={fade}
				transitionConfig={{ duration: 150 }}
				class="fixed inset-0 z-50 bg-black/80"
			/>
			<Dialog.Content
				class="rounded-card-lg bg-background shadow-popover fixed left-[50%] top-[50%] z-50 h-full w-full max-w-[1000px] translate-x-[-50%] translate-y-[-50%] p-5 outline-none md:max-h-[94%]"
			>
				<Dialog.Title class="text-2xl font-bold text-surface-100"
					>{m.jobReference()} doubleSlash GmbH</Dialog.Title
				>
				<Separator.Root class="bg-muted -mx-5 mb-6 mt-5 block h-px" />
				<iframe
					class="h-[94%] overflow-hidden rounded-xl"
					title="Job reference doubleSlash GmbH"
					src="/Arbeitszeugnis_doubleSlash_MichaMailaender.pdf"
					width="100%"
					style="border: none;"
				>
				</iframe>
				<Dialog.Close
					class="focus-visible:ring-foreground focus-visible:ring-offset-background active:scale-98 absolute right-5 top-5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
				>
					<div>
						<button type="button" class="btn-icon preset-filled-surface-50-950"
							><X class="text-foreground " /></button
						>
						<span class="sr-only">Close</span>
					</div>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
</div>
