<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import Files from './pdf-files.svelte';
	import * as m from '$lib/paraglide/messages.js';

	const experiences = [
		{
			title: m.experiences_personalCoach_title(),
			company: '',
			date: 'Jan 2022 - Present',
			description: [m.experiences_personalCoach_description1()]
		},
		{
			title: m.experience_dechea_title(),
			company: 'Dechea',
			date: m.experience_dechea_date(),
			description: [m.experience_dechea_description1(), m.experience_dechea_description2()]
		},
		{
			title: m.experience_projectLead_title(),
			company: 'doubleSlash',
			date: m.experience_projectLead_date(),
			description: [m.experience_projectLead_description1()]
		},
		{
			title: m.experience_projectLeadAssistance_title(),
			company: 'doubleSlash',
			date: m.experience_projectLeadAssistance_date(),
			description: [m.experience_projectLeadAssistance_description1()]
		},
		{
			title: m.experience_softwareDeveloper_title(),
			company: 'doubleSlash',
			date: m.experience_softwareDeveloper_date(),
			description: [m.experience_softwareDeveloper_description1()]
		},
		{
			title: m.experience_apprenticeship_title(),
			company: 'doubleSlash',
			date: m.experience_apprenticeship_date(),
			description: []
		}
	];
</script>

<div class="mx-64 flex max-w-[1512px] flex-col pt-8">
	<div class="flex flex-row justify-between">
		<div class="flex flex-row items-center gap-3">
			<Avatar src={'/favicon.png'} alt="skeleton" size="w-10" background="bg-transparent" />
			<div class="flex flex-col">
				<p class="text-sm font-extrabold text-surface-950-50">{m.name()}</p>
				<p class="text-sm text-surface-600-400">{m.title()}</p>
			</div>
		</div>
		<Files />
	</div>

	<div class="grid grid-cols-12 pt-40">
		<div class="col-span-5 col-start-1 flex flex-col gap-6">
			<h1 class="h1 leading-tight tracking-tight text-surface-950-50">
				{m.description_1()}
			</h1>
			<p class="text-lg text-surface-600-400">
				{m.description_2()}
			</p>
		</div>
		<div class="col-span-6 col-start-7 pl-10">
			<div class="w-full">
				<div class="relative" style="padding-top: 56.25%;">
					<iframe
						class="absolute left-0 top-0 h-full w-full"
						src="https://www.youtube.com/embed/uNSXTxPHHXU?rel=0"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					>
					</iframe>
				</div>
			</div>
		</div>
	</div>

	<h2 class="h3 border-b pb-16 pt-64 border-surface-950-50">{m.experience()}</h2>

	<div class=" flex flex-col pb-40">
		{#each experiences as experience}
			<div class=" grid grid-cols-12 gap-6 border-b py-6 border-surface-200-800">
				<div class="col-span-3 col-start-1 text-base font-bold">{experience.title}</div>
				<div class="col-span-6 col-start-4 flex flex-col gap-2">
					{#if experience.company}
						<span class="text-base font-bold">{experience.company}</span>
					{/if}

					{#each experience.description as desc}
						<p class=" text-base text-surface-600-400 {desc.startsWith('“') ? 'italic' : ''}">
							{desc}
						</p>
					{/each}
				</div>
				<div class="col-span-2 col-start-11">
					<p class="w-full text-right text-base text-surface-600-400">
						{experience.date}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
