import Image from "next/image";
import logo from '@/public/logo.png';
import background from '@/public/futebolHome.png'; 

import Input from "@/app/components/ui/separator/input";
import Button from "@/app/components/ui/separator/button";

const LoginPage = () => {

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-[#4CAF50]">
            <div className='flex h-[80%] shadow-2xl rounded-xl  w-3/4'>

                <section 
                    className='w-full flex flex-col items-center pt-12 gap-3' 
                    style={{ backgroundImage: `url(${background.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <p className="text-5xl uppercase text-white">Faça seu login!</p>
                    <p className="text-2xl uppercase text-white">e começe a evoluir com a gente!  </p>
                </section>

                <section className='flex flex-col items-center justify-center gap-5 bg-[#FFFFFF] w-full'>
                    <div className="flex  items-center justify-center flex-col gp-2 mb-5">
                        <Image 
                            src={logo}
                            alt="logo"
                        />
                        <p className="text-3xl uppercase text-black">Faça seu Login!</p>
                    </div>
                    <Input label="Email" placeholder="digite aqui seu email"/>
                    <Input label="Senha" placeholder="digite aqui sua senha"/>
                    <Button  text="enviar" width={300} href="/profile"/>
                    <a className="text-gray-500 text-sm underline cursor-pointer">Esqueceu sua senha?</a>
                </section>

            </div>
        </div>
    );
};

export default LoginPage;
