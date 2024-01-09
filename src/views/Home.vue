<template>
	<div>
		<navbar-component></navbar-component>
        <main class="top-0 w-full absolute">
            <div id="rodrillas-wallpaper" class="grid grid-cols-5 self-center pt-40 pb-60 table">
				<div class="col table-cell"></div>
				<div id="rodrillas-caption" class="col-span-2 table-cell text-white text-center">
					<div class="mx-auto mt-48 w-3/5 hidden">					
						<div>
							<font-awesome-icon :icon="['fas','campground']" class="mx-2 text-xl" /> 	
							<span class="text-xl">CarpAventura</span>
						</div>
						<div class="text-sm mt-1">presenta</div>
					</div>
					<div id="rodrillas-text" class="">
						<img src="/texto_rodrillas.png"  class="mx-auto mt-24 w-3/5"/>
					</div>
				</div>
				<div id="rodrillas-artboard" class="col table-cell bg-white/60 rounded-lg text-center">		
					<div class="text-gray-300">
						<font-awesome-icon :icon="['fas', 'calendar-alt']" class="text-lg leading-lg mr-2"/>
						<span>15 de Junio de 2024</span>
					</div>
					<hr-icon-component color="color-sky-300"></hr-icon-component>
					<div class="text-gray-300">
						<font-awesome-icon :icon="['fas', 'clock']" class="text-lg leading-lg mr-2"/>
						<span>19:00 (Hora local)</span>
					</div>			
					<hr-icon-component color="color-sky-300"></hr-icon-component>
					<div class="text-gray-300">
						<font-awesome-icon :icon="['fas', 'location-dot']" class="text-lg leading-lg mr-2"/>
						<div class="inline">La Hípica, Granada<br/>
						(Grupo Mamunia) </div>
					</div>					
					<hr-icon-component color="color-sky-300"></hr-icon-component>
					<div class="text-gray-300">
						<countdown-component></countdown-component>
					</div>
				</div>
				<div class="col table-cell"></div>
            </div>	
			<section id="caption-form">
				<div class="relative max-w-3xl mx-auto pt-10 pb-10 justify-center">
					<h1 class="text-slate-900 text-2xl text-center text-sky-500 text-dancing">¿Te lo vas a perder?</h1>
					<div class="mt-6 text-sm text-poppins text-justify text-[16px] text-gray-400">
						Desde CarpAventura estamos muy contentos de presentaros la celebración de este evento ÚNICO e IRREPETIBLE (o eso esperamos nosotros xD).
						Si has llegado a esta página, estás entre nuestras personas más importantes, y queremos compartir contigo nuestro amor y nuestra alegría en este día.
						Para ayudarnos con la organización (y Patri no se vuelva loca xD) hemos creado esta web con informacíon útil sobre el evento y sobre nosotros. 
						Una cosa importante, es que puedes confirmar si vas a asistir o no, e informarnos de tus preferencias alimenticias.						
					</div>
					<div class="mt-12 flex justify-center">
						<button type="button" class="relative mt-3 text-center text-poppins flex items-center h-10 px-6 rounded-md bg-sky-300 text-white">
							Confirma tu asistencia
						</button>
					</div>
				</div>
			</section>					
			<section id="carpaventura-world" class="bg-sky-300 py-20">
				<h1 class="text-slate-900 text-2xl text-center text-white text-dancing mb-16">CarpAventura World</h1>
			</section>
			<section id="carpa-info" class="relative max-w-6xl mx-auto pt-16 justify-center">
				<h1 class="text-slate-900 text-2xl text-center text-sky-500 text-dancing mb-16">Información general</h1>
				<div class="grid grid-cols-4 gap-8">
					<div class="rounded-box p-4 bg-white text-gray-400 text-poppins shadow-3xl shadow-gray-900">
						<font-awesome-icon :icon="['fas','calendar-alt']" class="mr-2 text-sky-500"/>
						<div class="inline font-bold uppercase text-handlee text-gray-300">Horario:</div>
						<div class="text-[15px] mt-2">De lunes a domingos: de 08:00* a 23:59h</div>
						<div class="text-[13px] mt-4 text-justify">* Consulta el horario de fines de semana por si hay remoloneo.</div>
					</div>			
					<div class="rounded-box p-4 bg-white text-gray-400 text-poppins shadow-3xl shadow-gray-900">
						<font-awesome-icon :icon="['fas','location-dot']" class="mr-2 text-sky-500"/>
						<div class="inline font-bold uppercase text-handlee text-gray-300">Ubicación:</div>
						<div class="text-[15px] mt-2 text-justify">Nuestra sede se encuentra en el Cerrillo de Maracena, donde siempre serás bienvenido con cita previa.</div>
					</div>				
					<div class="rounded-box p-4 bg-white text-gray-400 text-poppins shadow-3xl shadow-gray-900">
						<font-awesome-icon :icon="['fas','wheelchair-move']" class="mr-2 text-sky-500"/>
						<div class="inline font-bold uppercase text-handlee text-gray-300">Accesibilidad:</div>
						<div class="text-[15px] mt-2 text-justify">Acceso habilitado siempre y cuando tengas el consentimiento de Gnaro Martinez (gestor de fincas y bienes inmuebles).</div>
					</div>										
					<div class="rounded-box p-4 bg-white text-gray-400 text-poppins shadow-3xl shadow-gray-900">
						<font-awesome-icon :icon="['fas','comment-dots']" class="mr-2 text-sky-500"/>
						<div class="inline font-bold uppercase text-handlee text-gray-300">Datos curiosos:</div>
						<div class="text-[15px] mt-2 text-justify">No sabemos cuantos años llevamos juntos pero Carl dice que 2 lustros por lo menos.</div>
					</div>					
				</div>
			</section>
			<section id="nuestros_mundos" class="relative max-w-6xl mx-auto pb-16 pt-16 justify-center">					
				<h1 class="text-slate-900 text-2xl text-center text-sky-500 text-dancing mb-16">Nuestros mundos</h1>
				<div class="grid grid-cols-5 gap-8">
					<div class="rounded shadow-3xl p-4 bg-white text-gray-300 text-poppins shadow-gray-900">
						<div class="overflow-hidden h-[110px]">
							<img class="w-full h-full" src="/disney-simpson.webp"/>
						</div>
						<div class="text-[15px] mt-4 text-center">LOS SIMPSONS</div>
					</div>
					<div class="rounded shadow-3xl p-4 bg-white text-gray-300 text-poppins shadow-gray-900">
						<div class="overflow-hidden h-[110px]">
							<img class="w-full h-full" src="/señor-anillos.jpg"/>
						</div>
						<div class="text-[15px] mt-4 text-center">EL SEÑOR DE LOS ANILLOS</div>
					</div>	
					<div class="rounded shadow-3xl p-4 bg-white text-gray-300 text-poppins shadow-gray-900">
						<div class="overflow-hidden h-[110px]">
							<img class="w-full h-full" src="/harry_potter.webp"/>	
						</div>
						<div class="text-[15px] mt-4 text-center">HARRY POTTER</div>
					</div>	
					<div class="rounded shadow-3xl p-4 bg-white text-gray-300 text-poppins shadow-gray-900">
						<div class="overflow-hidden h-[110px]">
							<img class="w-full h-full" src="/disney.jpg"/>
						</div>
						<div class="text-[15px] mt-4 text-center">DISNEY</div>
					</div>		
					<div class="rounded shadow-3xl border-white p-4 bg-white text-gray-300 text-poppins shadow-gray-900">
						<div class="overflow-hidden h-[110px]">
							<img class="w-full h-full" src="/pixar.jpg"/>
						</div>
						<div class="text-[15px] mt-4 text-center">PIXAR</div>
					</div>
					<div class="rounded shadow-3xl border-white p-4 bg-white text-gray-300 text-poppins shadow-gray-900">
						<div class="overflow-hidden h-[110px]">
							<img class="w-full h-full" src="/dragon-ball-z.webp"/>
						</div>
						<div class="text-[15px] mt-4 text-center">DRAGON BALL Z</div>
					</div>	
					<div class="rounded shadow-3xl border-white p-4 bg-white text-gray-300 text-poppins shadow-gray-900">
						<div class="overflow-hidden h-[110px]">
							<img class="w-full h-full" src="/pokemon.jpeg"/>
						</div>
						<div class="text-[15px] mt-4 text-center">POKEMON</div>
					</div>	
					<div class="rounded shadow-3xl border-white p-4 bg-white text-gray-300 text-poppins shadow-gray-900">
						<div class="overflow-hidden h-[110px]">
							<img class="w-full h-full" src="/machu_picchu.jpg"/>
						</div>
						<div class="text-[15px] mt-4 text-center">VIAJES</div>
					</div>	
					<div class="rounded shadow-3xl border-white p-4 bg-white text-gray-300 text-poppins shadow-gray-900">
						<div class="overflow-hidden h-[110px]">
							<img class="w-full h-full" src="/juegos.jpg"/>
						</div>
						<div class="text-[15px] mt-4 text-center">JUEGOS</div>
					</div>	
					<div class="rounded shadow-3xl border-white p-4 bg-white text-gray-300 text-poppins shadow-gray-900">
						<div class="overflow-hidden h-[110px]">
							<img class="w-full h-full" src="/baile.jpg"/>
						</div>
						<div class="text-[15px] mt-4 text-center">BAILE</div>
					</div>			
				</div>
			</section>			
			<section id="espectaculos" class="relative max-w-6xl mx-auto pb-16 pt-16 justify-center">					
				<h1 class="text-slate-900 text-2xl text-center text-sky-500 text-dancing mb-16">Espectáculos</h1>
				<div class="grid grid-cols-4 gap-8">
					<div class="rounded shadow-3xl p-4 bg-white text-gray-300 text-poppins shadow-gray-900">
						<div class="overflow-hidden h-[110px]">
							<div class="text-[15px] mt-4 text-center">LA CEREMONIA</div>
							<img class="w-full h-full" src="/disney-simpson.webp"/>
						</div>
						
					</div>
					<div class="rounded shadow-3xl p-4 bg-white text-gray-300 text-poppins shadow-gray-900">
						<div class="overflow-hidden h-[110px]">
							<div class="text-[15px] mt-4 text-center">EL COCKTAIL</div>
							<img class="w-full h-full" src="/señor-anillos.jpg"/>
						</div>
					</div>	
					<div class="rounded shadow-3xl p-4 bg-white text-gray-300 text-poppins shadow-gray-900">
						<div class="overflow-hidden h-[110px]">
							<div class="text-[15px] mt-4 text-center">EL BANQUETE</div>
							<img class="w-full h-full" src="/harry_potter.webp"/>	
						</div>
						
					</div>	
					<div class="rounded shadow-3xl p-4 bg-white text-gray-300 text-poppins shadow-gray-900">
						<div class="overflow-hidden h-[110px]">
							<div class="text-[15px] mt-4 text-center">LA BARRA LIBRE</div>
							<img class="w-full h-full" src="/disney.jpg"/>
						</div>
					</div>		
				</div>
			</section>
			
        </main>  
    </div>
</template>

<script>
	import HrIconComponent from "../components/HrIcon.vue";
	import CountdownComponent from "../components/Countdown.vue";
	import NavbarComponent from "../components/Navbar.vue";
	/*import FooterComponent from "../components/Footer.vue";*/
	
	export default {
		name: "landing-page",
		components: {
			NavbarComponent,
			HrIconComponent,
			CountdownComponent,
			/*FooterComponent*/
		}
	}
</script>