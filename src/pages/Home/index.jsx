import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

export const HomePage = () => {
    return (
        <main className="min-h-dvh bg-gray-900 text-center py-10 px-4">
            <Header />

            <section className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto justify-center">
            
            <Card 
            title="Etc... Burguer & Tal!" 
            description="Hambúrgueres artesanais com ingredientes de qualidade, muito sabor e aquele toque especial da casa. Um dos favoritos de Araraquara!" 
            img="https://static.ifood-static.com.br/image/upload/t_high/logosgde/ac63f410-6bad-49c0-99b0-a63e2dc9956c/202310052019_y8em_i.jpg" 
            link="https://www.instagram.com/etcburguer/" />

            <Card
            title="Ahoy Burger"
            description="mash burgers suculentos, porções generosas e muito sabor. Uma verdadeira viagem gastronômica no coração de Araraquara!"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp7iYpo4XmkNPp0eCr-GyT-CCuV6Z7-sSvUA&s"
            link="https://www.instagram.com/ahoyburger/" />
                

            <Card
            title="X-Calota"
            description="Lanches gigantes, muito recheio e aquele sabor que conquistou Araraquara. Se a fome é grande, o X-Calota resolve!"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_BHOwHksbrwwb8S8-FHZJPtr3kMv44ew7Q&s"
            link="https://www.instagram.com/xcalotaararaquara/" />
                
            </section>

            <footer className="mt-10 text-sm text-white text-center">
                <p>Desenvolvido por Geovane Handrius Alonso — <span className="text-yellow-400">geovane.halonso.2005@gmail.com</span></p>
            </footer>
        </main>
    );
};
