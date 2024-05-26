<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton-svelte';

	const experiences = [
		{
			title: 'Personal Coach',
			company: '',
			date: 'Jan 2022 - Present',
			description: [
				'Training continuously interpersonal skills. Part-time personal coaching to help others and get to know more personalities.'
			]
		},
		{
			title: 'CEO & Co-Founder',
			company: 'Dechea',
			date: 'Aug 2020 - Present',
			description: [
				'“A medical software that helps people around the world to get the best treatment based on their circumstances.“',
				'Driving the product strategy, creating the architecture & toolchain and mentoring the team to become better developers.'
			]
		},
		{
			title: 'Project Lead',
			company: 'BMW',
			date: 'Jan 2019 - Jul 2020',
			description: [
				'Leading and coaching an agile team of 15 people. Ensuring the quality of the product outcome. Executing an IT product with a yearly budget of 2.5 million euros.'
			]
		},
		{
			title: 'Project Lead Assistant',
			company: 'BMW',
			date: 'Apr 2017 - Dec 2018',
			description: [
				'Assist in leading and coaching an agile team of 15 people. Ensuring the quality of the product outcome.'
			]
		},
		{
			title: 'Software Developer',
			company: 'BMW',
			date: 'Sep 2016 - Mar 2017',
			description: [
				'Developing a continuous delivery toolchain, creating automated tests, providing training documentation, serving customer requests.'
			]
		},
		{
			title: 'IT Specialist Apprenticeship',
			company: 'doubleSlash',
			date: 'Sep 2013 - Aug 2016',
			description: []
		}
	];
</script>

<Avatar src={'/favicon.png'} alt="skeleton" />
<p>Micha</p>
<p>CEO & Co-Founder, Personal Coach</p>
<p>
	Creator, mentor, tech-lover and philanthropist.<br />
	I am passionate about helping people become the best version of themself to positively impact our world.
	Great technical products help me make this mission a reality.
</p>

<div class="mx-auto max-w-2xl">
	<div class="border-l-2 border-blue-800 pl-4">
		{#each experiences as experience}
			<div class="mb-8">
				<div class="relative">
					<div
						class="absolute -left-6 top-1/3 h-4 w-4 -translate-y-1/2 transform rounded-full bg-blue-800"
					></div>
					<h3 class="text-xl font-bold">
						{experience.title}
						{#if experience.company}
							<span class="text-base font-normal italic text-gray-400">{experience.company}</span>
						{/if}
					</h3>
					<p class="text-sm text-gray-400">{experience.date}</p>
				</div>
				{#each experience.description as desc}
					<p class="mt-2 {desc.startsWith('“') ? 'italic' : ''}">{desc}</p>
				{/each}
			</div>
		{/each}
	</div>
</div>
