<template>
	<nav class="z-50 w-full flex flex-wrap items-center justify-between px-2 py-2 bg-sky-500 fixed">
		<div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
			<div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
				<a class="w-auto text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-white md:w-[200px]" href="#">
					<img src="/logo_white.png" class="w-3/6 md:w-full"/>
				</a>
				<button class="cursor-pointer text-lg leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
					<font-awesome-icon :icon="['fas', 'bars']" class="text-white"/>
				</button>
			</div>
			<div class="lg:flex flex-grow items-center justify-center lg:bg-transparent lg:shadow-none" v-bind:class="{'hidden': !showMenu, 'block': showMenu}">
				<ul class="flex flex-col lg:flex-row list-none bg-sky-500 w-auto">
					<li class="flex items-center justify-center">
						<a class="text-white hover:text-blue-300 px-3 py-4 lg:py-2 flex items-center uppercase font-bold" href="#evento">
							<font-awesome-icon :icon="['fas', 'calendar-alt']" class="leading-lg mr-2"/>
							<span>EL EVENTO</span>
						</a>
					</li>
					
					<li class="flex items-center justify-center">
						<a class="text-white hover:text-blue-300 px-3 py-4 lg:py-2 flex items-center uppercase font-bold" href="#parque">
							<font-awesome-icon :icon="['fas', 'archway']" class="leading-lg mr-2"/>
							<span>EL PARQUE</span>
						</a>
					</li>
					<li class="flex items-center justify-center">
						<a class="text-white hover:text-blue-300 px-3 py-4 lg:py-2 flex items-center uppercase font-bold" href="#entradas">
							<font-awesome-icon :icon="['fas', 'ticket']" class="leading-lg mr-2"/>
							<span>ENTRADAS</span>
						</a>
					</li>
					<li class="flex items-center justify-center">
						<a class="text-white hover:text-blue-300 px-3 py-4 lg:py-2 flex items-center uppercase font-bold" href="#tu_visita">
							<font-awesome-icon :icon="['fas', 'heart']" class="leading-lg mr-2"/>
							<span>TU VISITA</span>
						</a>
					</li>
				</ul>
			</div>
			<!--<div class="lg:flex flex-grow items-center bg:white md:w-auto lg:bg-transparente lg:shadow-none" v-bind:class="{'hidden': !showMenu, 'block': showMenu}">
				<ul class="flex flex-row lg:flex-row list-none">
					
					<li class="flex items-center">
						<div class="dropdown dropdown-end">
							<a tabindex="0" class="lg:text-white hover:text-blue-300 px-3 py-4 lg:py-2 flex items-center uppercase font-bold cursor-pointer" @click.prevent>
								<font-awesome-icon :icon="['fas', 'globe']" class="leading-lg mr-2"/>
								<span class="mr-2">ES</span>
								<font-awesome-icon :icon="['fas','chevron-down']" class="leading-lg"/>
							</a>				      
							<ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-48">
								<li class="text-sky-300 hover:bg-sky-300"><a><span>ES - ESPAÑOL</span></a></li>
								<li class="text-sky-300 hover:bg-sky-300"><a><span>EN - ENGLISH</span></a></li>
								<li class="text-sky-300 hover:bg-sky-300"><a><span>DE - DEUTSCH</span></a></li>
								<li class="text-sky-300 hover:bg-sky-300"><a><span>PT - PORTUGUÊS</span></a></li>
							</ul>
						</div>					
					</li>						
				</ul>
			</div>-->
		</div>
	</nav>
</template>
<script>
	export default {
		data() {
			return {
				showMenu: false
			}
		},
		methods: {
			toggleNavbar: function(){
				this.showMenu = !this.showMenu;
			}
		}
	}
</script>
