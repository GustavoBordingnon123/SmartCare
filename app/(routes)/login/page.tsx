import Input from "@/app/components/input";
import Image from "next/image";
import logo from '@/public/logo.png';
import background from '@/public/futebolHome.png';
import Button from "@/app/components/button";


const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#4CAF50]">
     
        <div className='flex h-[500px] shadow-2xl rounded-md  w-3/4'>

            <section className='w-full'>
                <Image 
                    src={background}
                    alt="logo"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
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
                
                <Button  text="enviar" width={300}/>
                
                <a className="text-gray-500 text-sm underline cursor-pointer">Esqueceu sua senha?</a>

            </section>


        </div>
    
    </div>
  );
};

export default LoginPage;
