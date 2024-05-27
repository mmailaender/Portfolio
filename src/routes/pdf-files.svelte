<script lang="ts">
	import { Dialog, Separator, Label } from 'bits-ui';
	import { X } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
</script>

<Dialog.Root>
	<Dialog.Trigger
		class="rounded-input bg-dark text-background
  shadow-mini hover:bg-dark/95 focus-visible:ring-foreground focus-visible:ring-offset-background active:scale-98
  inline-flex h-12 items-center justify-center whitespace-nowrap px-[21px] text-[15px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
	>
		Letter of recommendation
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay
			transition={fade}
			transitionConfig={{ duration: 150 }}
			class="fixed inset-0 z-50 bg-black/80"
		/>
		<Dialog.Content
			class="rounded-card-lg bg-background shadow-popover fixed left-[50%] top-[50%] z-50 h-full w-full max-w-[1000px] translate-x-[-50%] translate-y-[-50%] border p-5 outline-none md:max-h-[94%]"
		>
			<Dialog.Title
				class="flex w-full items-center justify-center text-lg font-semibold tracking-tight"
				>Letter of recommendation</Dialog.Title
			>
			<Separator.Root class="bg-muted -mx-5 mb-6 mt-5 block h-px" />
			<iframe
				class="h-[94%]"
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
					<X class="text-foreground size-5" />
					<span class="sr-only">Close</span>
				</div>
			</Dialog.Close>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>

<Dialog.Root>
	<Dialog.Trigger
		class="rounded-input bg-dark text-background
  shadow-mini hover:bg-dark/95 focus-visible:ring-foreground focus-visible:ring-offset-background active:scale-98
  inline-flex h-12 items-center justify-center whitespace-nowrap px-[21px] text-[15px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
	>
		Job reference
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay
			transition={fade}
			transitionConfig={{ duration: 150 }}
			class="fixed inset-0 z-50 bg-black/80"
		/>
		<Dialog.Content
			class="rounded-card-lg bg-background shadow-popover fixed left-[50%] top-[50%] z-50 h-full w-full max-w-[1000px] translate-x-[-50%] translate-y-[-50%] border p-5 outline-none md:max-h-[94%]"
		>
			<Dialog.Title
				class="flex w-full items-center justify-center text-lg font-semibold tracking-tight"
				>Job reference</Dialog.Title
			>
			<Separator.Root class="bg-muted -mx-5 mb-6 mt-5 block h-px" />
			<iframe
				class="h-[94%]"
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
					<X class="text-foreground size-5" />
					<span class="sr-only">Close</span>
				</div>
			</Dialog.Close>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
