<template>
    <form class="w-full">
        <h1 class="text-[20px] text-sky-500 text-quattro mb-6">
            <font-awesome-icon :icon="['fas', 'circle-chevron-right']" />
            <span class="ml-2 font-bold">Formulario de asistencia</span>
        </h1>
        <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block tracking-wide text-gray-200 text-[15px] text-montserrat mb-2" for="guest-name">Nombre*:</label>
                <input class="placeholder:text-gray-700 appearance-none block w-full border border-gray-900 text-montserrat text-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" v-model="guest.name" id="guest-name" type="text" placeholder="Tu nombre...">
            </div>
            <div class="w-full md:w-1/2 px-3">
                <label class="block tracking-wide text-gray-200 text-[15px] text-montserrat mb-2" for="guest-surname">Apellidos*:</label>
                <input class="placeholder:text-gray-700 appearance-none block w-full border border-gray-900 text-montserrat text-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" v-model="guest.surname" id="guest-surname" type="text" placeholder="Tus apellidos...">
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block tracking-wide text-gray-200 text-[15px] text-montserrat mb-2" for="guest-telefono">Teléfono*:</label>
                <input class="placeholder:text-gray-700 appearance-none block w-full border border-gray-900 text-montserrat text-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" v-model="guest.phone" id="guest-telefono" type="text" placeholder="Tu teléfono...">
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block tracking-wide text-gray-300 text-[15px] text-montserrat mb-2" for="guest-menu">Menú*:</label>
                <div class="relative">
                    <select class="select block appearance-none w-full border border-gray-900 text-montserrat text-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" v-model="guest.menu" id="guest-menu">
                        <option value="1">Omnívoro</option>
                        <option value="2">Vegetariano</option>
                        <option value="3">Vegano</option>
                        <option value="4">Celíaco</option>
                        <option value="5">Adolescente</option>
                    </select>
                </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">                
                <label class="block tracking-wide text-gray-200 text-[15px] text-montserrat mb-2" for="guest-confirmacion">Confirmación*:</label>
                <div class="relative">
                    <select class="select block appearance-none w-full border border-gray-900 text-montserrat text-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" v-model="guest.confirm" id="guest-confirmacion">
                        <option value="true">Sí, asístire</option>
                        <option value="false">No, no puedo asistir</option>
                    </select>
                </div>
            </div>            
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
            <div class="max-md:w-full md:w-1/3 px-3 mb-3">
                <label class="block tracking-wide text-gray-200 text-[15px] text-montserrat mb-2" for="guest-partner">Acompañante*:</label>
                <div class="form-control flex-row gap-2 ml-2">
                    <label class="cursor-pointer inline w-auto">
                        <span class="label-text text-montserrat text-[15px]">Sí</span> 
                        <input type="radio" name="guest-partner" class="ml-2 align-middle radio w-[20px] h-[20px] checked:bg-sky-300" @change="togglePartner()"/>
                    </label>
                    <label class="cursor-pointer inline w-auto">
                        <span class="label-text text-montserrat text-[15px]">No</span> 
                        <input type="radio" name="guest-partner" class="ml-2 align-middle radio w-[20px] h-[20px] checked:bg-sky-300" checked  @change="togglePartner()"/>
                    </label>
                </div>
            </div>        
            <div v-if="showPartner" class="flex max-sm:flex-col sm:flex-row w-full mx-3 my-3 p-3 mb-6 border border-gray-900">
                <div class="max-sm:w-full sm:w-2/3 px-3 mb-0">
                    <label class="block tracking-wide text-gray-200 text-[15px] text-montserrat mb-2" for="compa-name">Nombre*:</label>
                    <input class="placeholder:text-gray-700 appearance-none block w-full border border-gray-900 text-montserrat text-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="compa-name" type="text" placeholder="Su nombre...">
                </div>
                <div class="max-sm:w-full sm:w-1/3 px-3 mb-0">
                    <label class="block tracking-wide text-gray-200 text-[15px] text-montserrat mb-2" for="compa-menu">Menú*:</label>
                    <div class="relative">
                        <select class="select block appearance-none w-full border border-gray-900 text-montserrat text-gray-300 py-3 px-4 pr-8 rounded leading-tight mb-3 focus:outline-none focus:bg-white focus:border-gray-500" id="compa-menu">
                            <option value="1">Omnívoro</option>
                            <option value="2">Vegetariano</option>
                            <option value="3">Vegano</option>
                            <option value="4">Celíaco</option>
                            <option value="5">Adolescente</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="max-md:w-1/2 md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block tracking-wide text-gray-200 text-[15px] text-montserrat mb-2" for="guest-child">Niños*:</label>
                <div class="form-control flex-row gap-2 ml-2">
                    <label class="cursor-pointer inline w-auto">
                        <span class="label-text text-montserrat text-[15px]">Sí</span> 
                        <input type="radio" name="guest-child" class="ml-2 align-middle radio w-[20px] h-[20px] checked:bg-sky-300" @change="toggleChild()"/>
                    </label>
                    <label class="cursor-pointer inline w-auto">
                        <span class="label-text text-montserrat text-[15px]">No</span> 
                        <input type="radio" name="guest-child" class="ml-2 align-middle radio w-[20px] h-[20px] checked:bg-sky-300" @change="toggleChild()" checked />
                    </label>
                </div>
            </div>            
            <div v-if="showChild" class="items-center max-md:w-1/2 md:w-1/3 px-3 gap-1">
                <label class="block tracking-wide text-gray-200 text-[15px] text-montserrat mb-2" for="child-num">Número*:</label>
                <input class="input-sm placeholder:text-gray-700 appearance-none block w-2/4 border border-gray-900 text-montserrat text-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" max="4" min="1" v-model="nchildren" id="child-num" type="number" @input="changeChildren">
            </div>
            <div v-if="showChild" class="flex flex-col w-full mx-3 my-3 p-3 mb-6 border border-gray-900">
                <div v-for="(child, key) in childrens" class="flex max-sm:flex-col sm:flex-row">
                    <div class="max-sm:w-full sm:w-2/3 px-3 mb-0">
                        <label class="block tracking-wide text-gray-200 text-[15px] text-montserrat mb-2" :for="'child-'+key+'-name'">Nombre*:</label>
                        <input class="placeholder:text-gray-700 appearance-none block w-full border border-gray-900 text-montserrat text-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" v-model="child.name" :id="'child-'+key+'-name'" type="text" placeholder="Su nombre...">
                    </div>
                    <div class="max-sm:w-full sm:w-1/3 px-3 mb-0">
                        <label class="block tracking-wide text-gray-200 text-[15px] text-montserrat mb-2" :for="'child-'+key+'-menu'">Menú*:</label>
                        <div class="relative">
                            <select class="select block appearance-none w-full border border-gray-900 text-montserrat text-gray-300 py-3 mb-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" :id="'child-'+key+'-menu'">
                                <option value="6">Infantil</option>
                                <option value="5">Adolescente</option>                                
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
        <div class="mt-4 flex justify-center">
            <button type="button" class="relative mt-3 text-center text-poppins flex items-center h-10 px-6 rounded-md bg-sky-300 text-white" @click="sendEmail">
                Enviar formulario                            
            </button>
        </div>
    </form>
</template>
<script>	
    /*import axios from "axios";
    import 'dotenv/config';*/
    //import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
	export default {
		name: "form-asistencia",        
		data() {
			return {
				showPartner: false,
                showChild: false,
                nchildren: 1,
                childrens:[],
                guest:{
                    'name': '',
                    'surname': '',
                    'phone': '',
                    'menu': 1,
                    'confirm': true,
                },
                compa:{
                    'name': '',
                    'menu': 1,
                },
			}
		},
		methods: {
			togglePartner: function(){
				this.showPartner = !this.showPartner;
			},
			toggleChild: function(){
				this.showChild = !this.showChild;   
                this.childrens = [];
                if(this.showChild){
                    this.childrens.push({name:'', menu:6});
                } 
            },
            changeChildren: function(value){
                var copy_children = [].concat(this.childrens);
                this.childrens = [];
                for(var i=0; i<this.nchildren; i++){
                    this.childrens.push({name:'', menu:6});
                }
                /*this.childrens.array.forEach(element => {
                    if(copy_children.length() > key){
                        element = [...copy_children[key]];
                    }
                    console.log(copy_children.length);
                });*/
            },
            sendEmail: function(){
                /*const Recipient = require("mailersend").Recipient;
                const EmailParams = require("mailersend").EmailParams;
                const MailerSend = require("mailersend");

                const mailersend = new MailerSend({
                    api_key: "mlsn.1ca75e928e4f79b939b0888cd798cebc44788e21edca0bccf8510c8534f4ed1a",
                });

                const recipients = [new Recipient("patry16_9@hotmail.com", "Recipient")];

                const emailParams = new EmailParams()
                    .setFrom("info@carpaventuraworld.xyz")
                    .setFromName("Your Name")
                    .setRecipients(recipients)
                    .setSubject("Subject")
                    .setHtml("Greetings from the team, you got this message through MailerSend.")
                    .setText("Greetings from the team, you got this message through MailerSend.");

                mailersend.send(emailParams);*/

            }
		}
	}
</script>