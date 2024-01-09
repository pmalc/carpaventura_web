<template>
	<div>
		<navbar-component></navbar-component>
        <main class="w-full">
			<div id="inicio" class="relative bg-white">
				<div class="relative top-14 md:top-16 mb-14 md:mb-16">		
					<img src="/TheRodrillas_fullhd.png" />
					<div class="relative max-sm:w-[650px] sm:w-[900px] md:w-[1100px] lg:w-[1400px] xl:w-[1900px] 2xl:w-[2200px]">
						<img src="/mancha.png" class="absolute max-sm:-bottom-24 -bottom-24 -left-20 max-sm:h-[110px] h-[120px] w-full"/>
					</div>
				</div>
				<div id="evento" class="bg-sky-300 w-full bg-cover relative bottom">
					
					<div class="text-center m-auto sm:w-full md:w-4/6 xl:w-3/6 2xl:w-2/6 p-12 text-lg">
						<div class="text-white text-quattro mb-4">
							<div class="text-[20px] uppercase">The Rodrillas</div>
							<div class="text-[18px]">La boda de Carl & Pat</div>
						</div>
		
						<div class="text-white text-courgette text-md">
							<font-awesome-icon :icon="['fas', 'calendar-alt']" class="text-lg leading-lg mr-2"/>
							<span>Sábado 15 de Junio de 2024</span>
						</div>
						<hr-icon-component color="color-sky-300"></hr-icon-component>
						<div class="text-white text-courgette text-md">
							<font-awesome-icon :icon="['fas', 'clock']" class="text-lg leading-lg mr-2"/>
							<span>19:15H (Hora local)</span>
						</div>			
						<hr-icon-component color="color-sky-300"></hr-icon-component>
						<div class="text-white text-courgette text-md">
							<font-awesome-icon :icon="['fas', 'location-dot']" class="text-lg leading-lg mr-2"/>
							<div class="inline text-left">La Hípica, Granada<br/>
							(Grupo Mamunia) </div>
						</div>					
						<hr-icon-component color="color-sky-300"></hr-icon-component>
						<div class="text-sky-300">
							<countdown-component></countdown-component>
						</div>
					</div> 			
				</div>
			</div>	
            <section id="caption-form" class="bg-gray-600 bg-stars bg-contain bg-repeat pb-6">
                <div class="relative xl:max-w-xl md:max-w-2xl max-w-sm mx-auto pt-10 pb-16 justify-center">
					<div class="bg-corner absolute top-6 left-0 bg-contain bg-no-repeat h-[100px] w-[100px]"></div>
					<div class="bg-corner absolute top-6 right-0 bg-contain bg-no-repeat h-[100px] w-[100px] -scale-x-100"></div>
                    <p class="mt-10 text-montserrat text-center text-[18px] text-gray-200 mb-2 px-10">
                        Este parque temático abre sus puertas para celebrar un evento único e irrepetible.
					</p>
					<p class="mt-6 text-montserrat text-center text-[18px] text-gray-200 mb-2 px-10">
						Descubre una nueva experiencia gastronómica y conoce el maravilloso mundo que hemos ideado para celebrar esta unión.
					</p>
					<p class="mt-6 text-montserrat text-center text-[18px] text-gray-200 mb-2 px-10">
						Sumérgete en un torbellino de diversión, baila al ritmo de la música  y déjate contagiar por su espíritu festivo.
					</p>
					<p class="mt-6 text-montserrat text-center text-[18px] text-gray-200 mb-2 px-10">
						Es el momento de dejar volar tu imaginación y convertirte en el niño que todos llevamos dentro.				
					</p>
					<h1 class="max-sm:text-[36px] sm:text-xl text-quattro text-center mt-10 mb-2 text-gray-200">¿Te lo vas a perder?</h1>
					<p class="text-[12px] text-center text-montserrat m-auto w-4/6">* Se requiere confirmación de asistencia a este evento tan especial.</p>
                    <div class="mt-4 flex justify-center">
                        <button type="button" class="relative mt-3 text-center text-poppins flex items-center h-10 px-6 rounded-md bg-sky-300 text-white">
							<a href="#entradas">Consigue tus entradas</a>                            
                        </button>
                    </div>
					<div class="bg-corner absolute bottom-0 left-0 bg-contain bg-no-repeat h-[100px] w-[100px] -scale-y-100"></div>
					<div class="bg-corner absolute bottom-0 right-0 bg-contain bg-no-repeat h-[100px] w-[100px] -scale-x-100 -scale-y-100"></div>
                </div>
            </section>	
			<div id="parque">	
				<section id="nuestras_tematicas" class="relative pb-12 pt-16 justify-center bg-sky-300">					
					<h1 class="text-slate-900 max-sm:text-[36px] sm:text-xl text-center text-white text-quattro mb-4">Nuestras temáticas</h1>
					<div class="md:w-11/12 w-5/6 xl:w-5/6 2xl:w-4/6 m-auto flex max-lg:flex-row flex-col justify-center items-center gap-6">
						<div class="max-lg:w-3/6  w-full flex max-lg:flex-col flex-row gap-3 justify-center items-center">
							<div class="rounded shadow-3xl w-full bg-white shadow-sky-500">
								<div class="text-[15px] text-center">
									<img class="h-[45px] w-auto m-auto" src="/simpsons.png" />
								</div>
							</div>
							<div class="rounded shadow-3xl w-full bg-white shadow-sky-500">
								<div class="text-[15px] text-center">
									<img class="h-[45px] w-auto m-auto" src="/lords.png" />
								</div>
							</div>	
							<div class="rounded shadow-3xl w-full bg-white shadow-sky-500">
								<div class="text-[15px] text-center">
									<img class="h-[45px] p-1 m-auto" src="/harry_potter.svg" />
								</div>
							</div>	
							<div class="rounded shadow-3xl w-full bg-white shadow-sky-500">
								<div class="text-[15px] text-center">
									<img class="h-[45px] pt-1 m-auto" src="/disney.png" />
								</div>
							</div>		
							<div class="rounded shadow-3xl w-full bg-white shadow-sky-500">
								<div class="text-[15px] text-center">
									<img class="h-[45px] m-auto p-2" src="/pixar.svg" />
								</div>
							</div>
						</div>
						<div class="max-lg:w-3/6 w-full flex max-lg:flex-col gap-3 flex-row justify-center items-center">
							<div class="rounded shadow-3xl w-full bg-white shadow-sky-500">
								<div class="text-[15px] text-center">
									<img class="h-[45px] pl-1 m-auto" src="/dragonball.png" />
								</div>
							</div>	
							<div class="rounded shadow-3xl w-full bg-white shadow-sky-500">
								<div class="text-[15px] text-center">
									<img class="h-[45px] m-auto" src="/pokemon.png" />
								</div>
							</div>	
							<div class="rounded shadow-3xl w-full bg-white shadow-sky-500">
								<div class="h-[45px] leading-[50px] text-lg text-sky-300 text-center text-sedgwick ">VIAJES</div>
							</div>	
							<div class="rounded shadow-3xl w-full bg-white shadow-sky-500">
								<div class="h-[45px] leading-[45px] text-lg text-sky-300 text-center text-press ">JUEGOS</div>
							</div>	
							<div class="rounded shadow-3xl w-full bg-white shadow-sky-500">
								<div class="h-[45px] leading-[45px] text-md text-sky-300 text-center text-limelight ">RITMOS LATINOS</div>
							</div>	
						</div>
					</div>
				</section>	
				<section id="nuestros_espectaculos" class="relative pb-12 pt-6 justify-center bg-sky-300">					
					<h1 class="text-slate-900 max-sm:text-[36px] sm:text-xl text-center text-white text-quattro mb-4">Nuestros Espectáculos</h1>
					<div class="mt-6 mb-10 w-5/6 mx-auto text-montserrat text-center text-[16px] text-white">
						Dejate llevar por la sorpresa, la mejor escenografía y un despliegue técnico sin igual.					
					</div>		
					<div class="md:w-11/12 w-5/6 xl:w-5/6 2xl:w-4/6 m-auto flex max-lg:flex-col flex-row justify-center items-center gap-6">
						<div class="flex max-sm:flex-col flex-row gap-6">
							<div class="rounded shadow-3xl p-4 bg-white text-gray-300 text-montserrat shadow-sky-500">
								<div class="overflow-hidden h-[230px]">
									<div class="text-[15px] text-center">LA CEREMONIA</div>
									<div class="text-[13px] mb-4 text-center">19:30H</div>
									<img class="w-full h-full" src="/carli.gif"/>
								</div>
								
							</div>
							<div class="rounded shadow-3xl p-4 bg-white text-gray-300 text-montserrat shadow-sky-500">
								<div class="overflow-hidden h-[230px]">
									<div class="text-[15px] text-center">EL COCKTAIL</div>
									<div class="text-[13px] mb-4 text-center">20:45H</div>
									<img class="w-full h-full" src="/flameado_moe.gif"/>
								</div>
							</div>	
						</div>
						<div class="flex max-sm:flex-col flex-row gap-6">
							<div class="rounded shadow-3xl p-4 bg-white text-gray-300 text-montserrat shadow-sky-500">
								<div class="overflow-hidden h-[230px]">
									<div class="text-[15px] text-center">EL BANQUETE</div>
									<div class="text-[13px] mb-4 text-center">22:00H</div>
									<img class="w-full h-full" src="/banquete.gif"/>	
								</div>
								
							</div>	
							<div class="rounded shadow-3xl p-4 bg-white text-gray-300 text-montserrat shadow-sky-500">
								<div class="overflow-hidden h-[230px]">
									<div class="text-[15px] text-center">EL GUATEQUE</div>
									<div class="text-[13px] mb-4 text-center">00:00H</div>
									<img class="w-full h-full" src="/dancing.gif"/>
								</div>
							</div>	
						</div>	
					</div>
				</section>	
			</div>							
			<section id="entradas" class="relative mx-auto pb-12 pt-8 bg bg-gray-600 bg-stars bg-contain bg-repeat justify-center">		
				<div class="relative max-sm:w-full xl:w-4/6 2xl:w-3/6 mx-auto pt-10 pb-16 justify-center max-sm:px-10 sm:px-36">
					<div class="bg-corner absolute top-0 max-sm:left-3 sm:left-12 bg-contain bg-no-repeat h-[100px] w-[100px]"></div>
					<div class="bg-corner absolute top-0 max-sm:right-3 sm:right-12 bg-contain bg-no-repeat h-[100px] w-[100px] -scale-x-100"></div>
					<h1 class="text-slate-900 max-sm:text-[30px] sm:text-xl text-center text-sky-300 text-quattro mb-4">Consigue tus entradas</h1>	
					<p class="mt-4 mx-auto text-montserrat text-center text-[16px] text-gray-200">	
						¿Estás preparado/a para una jornada llena de risas, amor y mucha juerga? <br/>Tu presencia será la chispa que haga que este evento sea aún más especial.
					</p>
					<p class="mt-4 mx-auto text-montserrat text-center text-[16px] text-gray-200">	
						Nos gustaría saber si te unirías a nosotros en esta nueva aventura que vamos a iniciar.<br/>
						Avísanos sobre tu asistencia rellenando el siguiente formulario de confirmación <br/>
						ó contactando a través de nuestros teléfonos móviles.
					</p>	
					<div class="flex flex-row justify-center items-center mt-4 mb-10 gap-2">
						<img src="/icon_whatsapp.png" class="w-[45px] h-[45px]"/>
						<div class="text-montserrat text-center text-[16px] text-gray-200 flex flex-col justify-start items-end">
							<div>CAR:</div>
							<div>PA:</div>
						</div>
						<div class="text-montserrat text-center text-[16px] text-gray-200 flex flex-col justify-start items-start">							
							<div>(+34) 653 39 14 53</div>
							<div>(+34) 645 96 76 43</div>
						</div>
					</div>
					<form-asistencia class="mt-1 mb-3 w-full mx-auto bg-white p-8 rounded shadow shadow-gray-500"></form-asistencia>	
					<div class="bg-corner absolute bottom-0 max-sm:left-3 sm:left-12 bg-contain bg-no-repeat h-[100px] w-[100px] -scale-y-100"></div>
					<div class="bg-corner absolute bottom-0 max-sm:right-3 sm:right-12 bg-contain bg-no-repeat h-[100px] w-[100px] -scale-x-100 -scale-y-100"></div>
				</div>		
			</section>	
			<section id="tu_visita" class="relative pb-6 pt-6 justify-center bg-sky-300">					
				<h1 class="text-slate-900 max-sm:text-[36px] sm:text-xl text-center text-white text-quattro mb-4">Prepara tu visita</h1>
				<div class="sm:w-5/6 md:w-3/6 lg:w-2/5 xl:w-1/3 2xl:w-1/4 m-auto flex max-lg:flex-col flex-col justify-center items-start gap-6 relative">
					<img src="/steps.png" class="absolute h-[140px] top-0 left-10"/>
					<div class="text-white text-montserrat text-left pt-1 pl-[110px]">Confirma tu asistencia y el menú.</div>
					<div class="text-white text-montserrat text-left pl-[110px]">Elige tu ropa según la etiqueta.</div>
					<div class="text-white text-montserrat text-left pl-[110px]">Practica tus golpes de cadera.</div>
				</div>
				<div class="flex flex-row justify-center items-center gap-8">
					<div class="flex flex-col justify-center items-center my-10">
						<img src="/tag.png" class="h-[80px] w-auto mb-4"/>
						<div class="text-montserrat text-white text-[20px]">ETIQUETA:</div>
						<div class="text-montserrat text-white text-[16px]">"Elegante Casual"</div>
						<div class="text-montserrat text-white text-[16px]">(Estiloso y cómodo)</div>
					</div>
					<div class="flex flex-col justify-center items-center my-10">
						<img src="/menu.png" class="h-[85px] w-auto mb-4"/>
						<div class="flex flex-row gap-2">
							<div class="text-montserrat text-white text-[16px]">Omnívoro</div>
							<div class="text-montserrat text-white text-[16px]">Celíaco</div>
						</div>
						<div class="flex flex-row gap-2">
							<div class="text-montserrat text-white text-[16px]">Vegetariano</div>
							<div class="text-montserrat text-white text-[16px]">Infantil</div>
						</div>
						<div class="flex flex-row gap-2">
							<div class="text-montserrat text-white text-[16px]">Vegano</div>
							<div class="text-montserrat text-white text-[16px]">Adolescente</div>
						</div>
					</div>
				</div>
				
			</section>												
			<section id="donde_estamos" class="relative mx-auto pb-6 pt-6 bg bg-gray-600 bg-stars bg-contain bg-repeat justify-center">		
				<div class="relative max-sm:w-full xl:w-4/6 2xl:w-3/6 mx-auto pt-10 pb-16 justify-center max-sm:px-14 sm:px-36">
					<div class="bg-corner absolute top-0 max-sm:left-3 sm:left-12 bg-contain bg-no-repeat h-[100px] w-[100px]"></div>
					<div class="bg-corner absolute top-0 max-sm:right-3 sm:right-12 bg-contain bg-no-repeat h-[100px] w-[100px] -scale-x-100"></div>
					<h1 class="text-slate-900 max-sm:text-[30px] sm:text-xl text-center text-sky-300 text-quattro mb-4">Dónde estamos</h1>	
					<a href="https://maps.app.goo.gl/Nbqv7zDaCwFGW2hk9" target="_blank">
						<img class="mb-8 mx-auto" src="/marker.png"/>
					</a>
					<div class="flex flex-row max-sm:justify-start sm:justify-center items-center mt-4 mb-10 gap-3">
						<img src="/qrcode.png" class="w-[72px] h-[72px]"/>
						<div class="text-montserrat text-center text-[16px] text-gray-200 flex flex-col justify-start items-end">
							La Hípica (Grupo Mamunia)<br/>
							Pasaje San José s/n, Purchil<br/>
							Granada
						</div>
					</div>
					<div class="flex flex-row max-sm:justify-start sm:justify-center items-center mt-4 mb-10 gap-3">
						<img src="/parking.png" class="w-[72px] h-[72px]"/>
						<div class="text-montserrat text-center text-[16px] text-gray-200 flex flex-col justify-start items-end">
							PARKING INCLUIDO
						</div>
					</div>
					<div class="flex flex-row max-sm:justify-start sm:justify-center items-center mt-12 mb-10 px-20 gap-3">
						<h1 class="max-sm:text-[36px] sm:text-xl text-quattro text-center mt-10 mb-2 text-gray-200">
							¡Vive la magia y celebra el amor con tu pase VIP a CarpAventura World!
						</h1>
					</div>
					<div class="bg-corner absolute bottom-0 max-sm:left-3 sm:left-12 bg-contain bg-no-repeat h-[100px] w-[100px] -scale-y-100"></div>
					<div class="bg-corner absolute bottom-0 max-sm:right-3 sm:right-12 bg-contain bg-no-repeat h-[100px] w-[100px] -scale-x-100 -scale-y-100"></div>
				</div>		
			</section>								
			<!--<section id="sobre_nosotros" class="relative mx-auto pb-6 pt-6 bg bg-gray-600 bg-stars bg-contain bg-repeat justify-center">		
				<div class="relative max-sm:w-full xl:w-full 2xl:w-full mx-auto pt-10 pb-16 justify-center max-sm:px-14 sm:px-10 md:px-20">
					<div class="bg-corner absolute top-0 max-sm:left-3 sm:left-12 bg-contain bg-no-repeat h-[100px] w-[100px]"></div>
					<div class="bg-corner absolute top-0 max-sm:right-3 sm:right-12 bg-contain bg-no-repeat h-[100px] w-[100px] -scale-x-100"></div>
					<h1 class="text-slate-900 max-sm:text-[30px] sm:text-xl text-center text-sky-300 text-quattro mb-4">Sobre Nosotros</h1>	
							
					<div class="md:w-11/12 w-5/6 xl:w-5/6 2xl:w-4/6 m-auto flex max-lg:flex-col flex-row justify-center items-center gap-6">
						<div class="flex max-sm:flex-col flex-row gap-6">
							<div class="rounded shadow-3xl p-4 bg-white text-gray-300 text-montserrat shadow-gray-500 max-sm:w-full sm:w-1/2">
								<div class="overflow-hidden max-sm:h-[150px] sm:h-[200px] max-sm:px-3 sm:px-2">
									<font-awesome-icon :icon="['fas','calendar-alt']" class="mr-2 text-sky-500"/>
									<div class="inline max-sm:text-[18px] sm:text-[16px] text-justify" style="font-weight:bold;">HORARIO:</div>
									<div class="text-[15px] mt-2 mb-4 text-justify text-gray-500">De lunes a domingos: de 08:00* a 23:59h</div>
									<div class="text-[13px] mb-4 text-justify text-gray-500">* Consulta el horario de fines de semana por si hay remoloneo.</div>
								</div>
								
							</div>
							<div class="rounded shadow-3xl p-4 bg-white text-gray-300 text-montserrat shadow-gray-500 max-sm:w-full sm:w-1/2">
								<div class="overflow-hidden max-sm:h-[150px] sm:h-[200px] max-sm:px-3 sm:px-2">
									<font-awesome-icon :icon="['fas','location-dot']" class="mr-2 text-sky-500"/>
									<div class="inline max-sm:text-[18px] sm:text-[16px] text-justify" style="font-weight:bold;">UBICACIÓN:</div>
									<div class="text-[15px] mt-2 mb-4 text-justify text-gray-500">Nuestra sede se encuentra en el Cerrillo de Maracena, donde siempre serás bienvenido con cita previa.</div>
								</div>
							</div>	
						</div>
						<div class="flex max-sm:flex-col flex-row gap-6">
							<div class="rounded shadow-3xl p-4 bg-white text-gray-300 text-montserrat shadow-gray-500 max-sm:w-full sm:w-1/2">
								<div class="overflow-hidden max-sm:h-[150px] sm:h-[200px] max-sm:px-3 sm:px-2">
									<font-awesome-icon :icon="['fas','location-dot']" class="mr-2 text-sky-500"/>
									<div class="inline max-sm:text-[18px] sm:text-[16px] text-justify" style="font-weight:bold;">ACCESIBILIDAD:</div>
									<div class="text-[15px] mt-2 mb-4 text-justify text-gray-500">Acceso habilitado siempre y cuando tengas el consentimiento de Gnaro Martinez (gestor de fincas y bienes inmuebles).</div>
								</div>
								
							</div>	
							<div class="rounded shadow-3xl p-4 bg-white text-gray-300 text-montserrat shadow-gray-500 max-sm:w-full sm:w-1/2">
								<div class="overflow-hidden max-sm:h-[150px] sm:h-[200px] max-sm:px-3 sm:px-2">
									<font-awesome-icon :icon="['fas','comment-dots']" class="mr-2 text-sky-500"/>
									<div class="inline max-sm:text-[18px] sm:text-[16px] text-justify" style="font-weight:bold;">DATOS CURIOSOS:</div>
									<div class="text-[15px] mt-2 mb-4 text-justify text-gray-500">No sabemos cuantos años llevamos juntos pero Carl dice que 2 lustros por lo menos.</div>
								</div>
							</div>	
						</div>	
					</div>								
					<div class="bg-corner absolute bottom-0 max-sm:left-3 sm:left-12 bg-contain bg-no-repeat h-[100px] w-[100px] -scale-y-100"></div>
					<div class="bg-corner absolute bottom-0 max-sm:right-3 sm:right-12 bg-contain bg-no-repeat h-[100px] w-[100px] -scale-x-100 -scale-y-100"></div>
				</div>		
			</section>-->
			
        </main> 
		<footer-component></footer-component>
    </div>
</template>

<script>
	import HrIconComponent from "../components/HrIcon.vue";
	import CountdownComponent from "../components/Countdown.vue";
	import NavbarComponent from "../components/Navbar.vue";
	import FormAsistencia from "../components/FormAsistencia.vue";
	import FooterComponent from "../components/Footer.vue";
	
	export default {
		name: "landing-page",
		components: {
			NavbarComponent,
			HrIconComponent,
			CountdownComponent,
			FormAsistencia,
			FooterComponent
		}
	}
</script>