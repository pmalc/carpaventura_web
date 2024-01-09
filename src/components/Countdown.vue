<template>
    <h3 class="text-white text-quattro text-[14px] uppercase mb-2">--- Faltan ---</h3>
    <div class="countdown-grid flex items-center justify-center flex-row text-center auto-cols-max text-montserrat gap-2">
        <div class="flex justify-center items-center rounded-full max-sm:border-0 sm:border border-white max-sm:w-20 max-sm:h-20 sm:w-22 sm:h-24">
            <div class="flex items-center justify-center text-center max-sm:border-0 sm:border-2 max-sm:mx-0 sm:mx-2 bg-gray-600 border-sky-300 rounded-full w-20 h-20 align-middle">
            <div class="flex items-center flex-col content-center">
                <div class="countdown text-lg">
                    <span :style="'--value:' + days" class="text-courgette"> </span>
                </div>
                <div class="uppercase text-sm font-bol">días</div>
            </div>
            </div>
        </div> 
        <div class="flex justify-center items-center rounded-full max-sm:border-0 sm:border border-white max-sm:w-20 max-sm:h-20 sm:w-22 sm:h-24">
            <div class="flex items-center justify-center text-center max-sm:border-0 sm:border-2 max-sm:mx-0 sm:mx-2 bg-gray-600 border-sky-300 rounded-full w-20 h-20 align-middle">
                <div class="flex items-center flex-col content-center">
                    <div class="countdown text-lg">
                        <span :style="'--value:' + hrs" class="text-courgette"> </span>
                    </div>
                    <div class="uppercase text-sm font-bold">horas</div>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center rounded-full max-sm:border-0 sm:border border-white max-sm:w-20 max-sm:h-20 sm:w-22 sm:h-24">
            <div class="flex items-center justify-center text-center max-sm:border-0 sm:border-2 max-sm:mx-0 sm:mx-2 bg-gray-600 border-sky-300 rounded-full w-20 h-20 align-middle">
                <div class="flex items-center flex-col content-center">
                    <div class="countdown text-lg">
                        <span :style="'--value:' + mins" class="text-courgette"> </span>
                    </div>
                    <div class="uppercase text-sm font-bold">minutos</div>
                </div>
            </div>  
        </div>
        <div class="flex justify-center items-center rounded-full max-sm:border-0 sm:border border-white max-sm:w-20 max-sm:h-20 sm:w-22 sm:h-24">
            <div class="flex items-center justify-center text-center max-sm:border-0 sm:border-2 max-sm:mx-0 sm:mx-2 bg-gray-600 border-sky-300 rounded-full w-20 h-20 align-middle">
                <div class="flex items-center flex-col content-center">
                    <div class="countdown text-lg">
                        <span :style="'--value:' + secs" class="text-courgette"> </span>
                    </div>
                    <div class="uppercase text-sm font-bold">segundos</div>
                </div>
            </div>  
        </div>        
    </div>
</template>
  
<script>
    import "../assets/css/countdown.css";
    export default {
        data(){
            return{
                endDate : new Date("Jun 15, 2024 19:30:00"),
                now : new Date(),
                timer : null
            }
        },
        computed:{
            days(){
                let d =  Math.floor ((this.endDate.getTime() - this.now.getTime())/ (1000 * 3600 * 24));
                return d>9?d:'0'+d;
            },
            hrs(){
                let h = Math.floor(((this.endDate.getTime() - this.now.getTime()) % (1000 * 3600 * 24)) / (1000 * 3600));
                return h>9?h:'0'+h;
            },
            mins(){
                let m = Math.floor(((this.endDate.getTime() - this.now.getTime()) % (1000 * 3600)) / (1000 * 60));
                return m>9?m:'0'+m;
            },
            secs(){
                let s = Math.floor(((this.endDate.getTime() - this.now.getTime()) % (1000 * 60)) / 1000);
                return s>9?s:'0'+s;
            }
        },
        watch : {
            endDate : {
                immediate : true,
                handler(newVal){
                    if(this.timer){
                        clearInterval(this.timer)
                    }
                    this.timer = setInterval(()=>{
                        this.now = new Date()
                        if(this.negative)
                            return
                        if(this.now > newVal){
                            this.now = newVal
                            this.$emit('endTime')
                            clearInterval(this.timer)
                        }
                    }, 1000)
                }
            }
        },
        beforeDestroy(){
            clearInterval(this.timer);
        }
    }
</script>